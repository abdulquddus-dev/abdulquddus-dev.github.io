// ════════════════════════════════════════════════════════
//  firebase-config.js — Firebase v9+ Modular SDK (ES Modules)
//  محمَّل عبر <script type="module"> مباشرة من CDN بدون bundler.
//  هذا يقلل حجم الكود المُحمَّل بشكل كبير مقارنة بنسخة compat
//  القديمة، لأن استيراد دوال محددة فقط (tree-shaking طبيعي من
//  المتصفح نفسه عبر ES Modules) أخف بكثير من تحميل كامل الـ SDK.
// ════════════════════════════════════════════════════════
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
  getFirestore, doc, getDoc, setDoc, onSnapshot, increment,
  collection, getDocs, addDoc, query, orderBy, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

var FIREBASE_CONFIG = {
  apiKey: "AIzaSyAeLXOPgUEDm17M42I9uRVdzlzsp2bgsz4",
  authDomain: "aqdev-website-88e35.firebaseapp.com",
  projectId: "aqdev-website-88e35",
  storageBucket: "aqdev-website-88e35.firebasestorage.app",
  messagingSenderId: "77627286992",
  appId: "1:77627286992:web:0678aaf20ace7087dec5d5"
};

var app = initializeApp(FIREBASE_CONFIG);
var db = getFirestore(app);

// ════════════════════════════════════════════════════════
//  AQStats — إحصائيات حقيقية (مشاهدات، تحميلات)
// ════════════════════════════════════════════════════════
var AQStats = (function () {

  function listenStats(projectId, cb) {
    return onSnapshot(doc(db, "projects", projectId),
      function (d) { cb(d.exists() ? d.data() : { views:0, downloads:0 }); },
      function ()  { cb({ views:0, downloads:0 }); });
  }

  // قراءة لمرة واحدة بدل اشتراك مباشر مستمر (onSnapshot) — أخف على الموارد
  // ولا يترك قناة Firestore "Listen" مفتوحة بلا نهاية أمام Googlebot وغيره.
  function getStats(projectId, cb) {
    getDoc(doc(db, "projects", projectId))
      .then(function (d) { cb(d.exists() ? d.data() : { views:0, downloads:0 }); })
      .catch(function ()  { cb({ views:0, downloads:0 }); });
  }

  function recordView(projectId) {
    setDoc(doc(db, "projects", projectId), { views: increment(1) }, { merge: true })
      .catch(function(){});
  }

  function recordDownload(projectId) {
    setDoc(doc(db, "projects", projectId), { downloads: increment(1) }, { merge: true })
      .catch(function(){});
  }

  function getAllStats(cb) {
    getDocs(collection(db, "projects"))
      .then(function (snap) {
        var r = {};
        snap.forEach(function (d) { r[d.id] = d.data(); });
        cb(r);
      }).catch(function () { cb({}); });
  }

  return { listenStats:listenStats, getStats:getStats, recordView:recordView, recordDownload:recordDownload, getAllStats:getAllStats };
})();

// ════════════════════════════════════════════════════════
//  AQReviews — تقييمات حقيقية محفوظة في Firestore
// ════════════════════════════════════════════════════════
var AQReviews = (function () {

  function listenReviews(projectId, cb) {
    var q = query(collection(db, "projects", projectId, "reviews"), orderBy("createdAt", "desc"));
    return onSnapshot(q, function (snap) {
      var arr = [];
      snap.forEach(function (d) {
        var data = d.data();
        arr.push({ id:d.id, name:data.name||"مجهول", rating:data.rating||0, text:data.text||"", date:data.dateStr||"" });
      });
      cb(arr);
    }, function () { cb([]); });
  }

  // قراءة لمرة واحدة بدل اشتراك مستمر — نفس سبب getStats أعلاه.
  function getReviews(projectId, cb) {
    var q = query(collection(db, "projects", projectId, "reviews"), orderBy("createdAt", "desc"));
    getDocs(q)
      .then(function (snap) {
        var arr = [];
        snap.forEach(function (d) {
          var data = d.data();
          arr.push({ id:d.id, name:data.name||"مجهول", rating:data.rating||0, text:data.text||"", date:data.dateStr||"" });
        });
        cb(arr);
      })
      .catch(function () { cb([]); });
  }

  function addReview(projectId, name, rating, text, cb) {
    var now = new Date();
    var m   = now.getMonth() + 1;
    var ds  = now.getFullYear() + "/" + (m<10?"0"+m:m) + "/" + (now.getDate()<10?"0"+now.getDate():now.getDate());
    addDoc(collection(db, "projects", projectId, "reviews"),
      { name:name||"مجهول", rating:rating, text:text, dateStr:ds, createdAt: serverTimestamp() })
      .then(function () { _updateAvg(projectId); cb(true);  })
      .catch(function () { cb(false); });
  }

  function _updateAvg(pid) {
    getDocs(collection(db, "projects", pid, "reviews"))
      .then(function (snap) {
        if (snap.empty) return;
        var tot = 0, cnt = 0;
        snap.forEach(function (d) { tot += (d.data().rating||0); cnt++; });
        setDoc(doc(db, "projects", pid), { avgRating: Math.round(tot/cnt*10)/10, reviewsCount: cnt }, { merge: true });
      });
  }

  return { listenReviews:listenReviews, getReviews:getReviews, addReview:addReview };
})();

// AQStats/AQReviews تُستخدم من index.html كسكربت عادي (غير module) لذا
// نعرضها صراحة على window حتى تبقى متاحة عالمياً كما كانت في compat،
// ونُطلق حدثاً مخصصاً لإعلام بقية الصفحة أن Firebase أصبح جاهزاً فعلياً
// (مهم لأن type="module" يُحمَّل بشكل مؤجل تلقائياً، فقد ينفّذ السكربت
// الرئيسي قبل اكتمال هذا الملف لولا هذا التنسيق الصريح).
window.AQStats = AQStats;
window.AQReviews = AQReviews;
window.dispatchEvent(new Event('aqFirebaseReady'));
