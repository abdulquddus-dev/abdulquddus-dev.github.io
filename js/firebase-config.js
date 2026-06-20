// ════════════════════════════════════════════════════════
//  firebase-config.js
//  🔴 استبدل القيم أدناه بإعدادات مشروعك من Firebase Console
// ════════════════════════════════════════════════════════
var FIREBASE_CONFIG = {
apiKey: "AIzaSyAeLXOPgUEDm17M42I9uRVdzlzsp2bgsz4",
  authDomain: "aqdev-website-88e35.firebaseapp.com",
  projectId: "aqdev-website-88e35",
  storageBucket: "aqdev-website-88e35.firebasestorage.app",
  messagingSenderId: "77627286992",
  appId: "1:77627286992:web:0678aaf20ace7087dec5d5"
};
firebase.initializeApp(FIREBASE_CONFIG);
var db = firebase.firestore();

// ════════════════════════════════════════════════════════
//  AQStats — إحصائيات حقيقية (مشاهدات، تحميلات)
// ════════════════════════════════════════════════════════
var AQStats = (function () {

  function listenStats(projectId, cb) {
    return db.collection("projects").doc(projectId)
      .onSnapshot(function (d) { cb(d.exists ? d.data() : { views:0, downloads:0 }); },
                  function ()  { cb({ views:0, downloads:0 }); });
  }

  // قراءة لمرة واحدة بدل اشتراك مباشر مستمر (onSnapshot) — أخف على الموارد
  // ولا يترك قناة Firestore "Listen" مفتوحة بلا نهاية أمام Googlebot وغيره.
  function getStats(projectId, cb) {
    db.collection("projects").doc(projectId).get()
      .then(function (d) { cb(d.exists ? d.data() : { views:0, downloads:0 }); })
      .catch(function ()  { cb({ views:0, downloads:0 }); });
  }

  function recordView(projectId) {
    db.collection("projects").doc(projectId)
      .set({ views: firebase.firestore.FieldValue.increment(1) }, { merge: true })
      .catch(function(){});
  }

  function recordDownload(projectId) {
    db.collection("projects").doc(projectId)
      .set({ downloads: firebase.firestore.FieldValue.increment(1) }, { merge: true })
      .catch(function(){});
  }

  function getAllStats(cb) {
    db.collection("projects").get()
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
    return db.collection("projects").doc(projectId)
      .collection("reviews")
      .orderBy("createdAt", "desc")
      .onSnapshot(function (snap) {
        var arr = [];
        snap.forEach(function (doc) {
          var d = doc.data();
          arr.push({ id:doc.id, name:d.name||"مجهول", rating:d.rating||0, text:d.text||"", date:d.dateStr||"" });
        });
        cb(arr);
      }, function () { cb([]); });
  }

  // قراءة لمرة واحدة بدل اشتراك مستمر — نفس سبب getStats أعلاه.
  function getReviews(projectId, cb) {
    db.collection("projects").doc(projectId)
      .collection("reviews")
      .orderBy("createdAt", "desc")
      .get()
      .then(function (snap) {
        var arr = [];
        snap.forEach(function (doc) {
          var d = doc.data();
          arr.push({ id:doc.id, name:d.name||"مجهول", rating:d.rating||0, text:d.text||"", date:d.dateStr||"" });
        });
        cb(arr);
      })
      .catch(function () { cb([]); });
  }

  function addReview(projectId, name, rating, text, cb) {
    var now = new Date();
    var m   = now.getMonth() + 1;
    var ds  = now.getFullYear() + "/" + (m<10?"0"+m:m) + "/" + (now.getDate()<10?"0"+now.getDate():now.getDate());
    db.collection("projects").doc(projectId).collection("reviews")
      .add({ name:name||"مجهول", rating:rating, text:text, dateStr:ds,
             createdAt: firebase.firestore.FieldValue.serverTimestamp() })
      .then(function () { _updateAvg(projectId); cb(true);  })
      .catch(function () { cb(false); });
  }

  function _updateAvg(pid) {
    db.collection("projects").doc(pid).collection("reviews").get()
      .then(function (snap) {
        if (snap.empty) return;
        var tot = 0, cnt = 0;
        snap.forEach(function (d) { tot += (d.data().rating||0); cnt++; });
        db.collection("projects").doc(pid)
          .set({ avgRating: Math.round(tot/cnt*10)/10, reviewsCount: cnt }, { merge: true });
      });
  }

  return { listenReviews:listenReviews, getReviews:getReviews, addReview:addReview };
})();
