// viewCounter.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 你的 Firebase 設定
const firebaseConfig = {
  apiKey: "AIzaSyBmR7K4ECZA0Vv0PlHn6dMxg5P06UsBnq0",
  authDomain: "falling-comet-lab-blog.firebaseapp.com",
  projectId: "falling-comet-lab-blog",
  storageBucket: "falling-comet-lab-blog.firebasestorage.app",
  messagingSenderId: "275403715950",
  appId: "1:275403715950:web:25383ec082d6ff3338bd7f",
  measurementId: "G-TRDSPMNYQK"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 每篇文章唯一 ID（用網址最後一段當 key）
const getPageId = () => {
  const path = window.location.pathname;
  return path.replace(/^\/+|\/+$/g, '').replace(/\//g, '-');
};

const pageId = getPageId();

// 顯示計數的容器
const counterDiv = document.getElementById("view-counter");

async function updatePageViews() {
  const ref = doc(db, "posts", pageId);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    await updateDoc(ref, { views: increment(1) });
    counterDiv.innerText = `👁️ 本頁瀏覽次數：${snap.data().views + 1}`;
  } else {
    await setDoc(ref, { views: 1 });
    counterDiv.innerText = `👁️ 本頁瀏覽次數：1`;
  }
}

if (counterDiv) updatePageViews();
