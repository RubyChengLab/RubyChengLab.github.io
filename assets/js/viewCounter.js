import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const docRef = doc(db, "posts", path); // ✅ 這行不能漏！

import { getFirestore, doc, getDoc, setDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { db } from "./firebaseInit.js";

console.log("Firebase Apps:", getApps());
const firebaseConfig = {
  apiKey: "AIzaSyBmR7K4ECZA0Vv0PlHn6dMxg5P06UsBnq0",
  authDomain: "falling-comet-lab-blog.firebaseapp.com",
  databaseURL: "https://falling-comet-lab-blog-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "falling-comet-lab-blog",
  storageBucket: "falling-comet-lab-blog.firebasestorage.app",
  messagingSenderId: "275403715950",
  appId: "1:275403715950:web:25383ec082d6ff3338bd7f",
  measurementId: "G-TRDSPMNYQK"
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

function animateCount(start, end, duration, element) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    element.innerText = `👁️ 本頁瀏覽次數：${value}`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

async function updateViewCount() {
  const viewEl = document.getElementById("view-counter");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    await updateDoc(docRef, { views: increment(1) });
  } else {
    await setDoc(docRef, { views: 1 });
  }

  const updatedSnap = await getDoc(docRef);
  const views = updatedSnap.data().views || 0;

  // 動畫：從0到最新數字
  animateCount(0, views, 1500, viewEl);
}

updateViewCount();
