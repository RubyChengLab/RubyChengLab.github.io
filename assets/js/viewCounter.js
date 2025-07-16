// /assets/js/viewCounter.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// ✅ 貼在這裡！
const firebaseConfig = {
  apiKey: "AIzaSyBmR7K4ECZA0Vv0PlHn6dMxg5P06UsBnq0",
  authDomain: "falling-comet-lab-blog.firebaseapp.com",
  projectId: "falling-comet-lab-blog",
  storageBucket: "falling-comet-lab-blog.appspot.com",
  messagingSenderId: "275403715950",
  appId: "1:275403715950:web:25383ec082d6ff3338bd7f",
  measurementId: "G-TRDSPMNYQK"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 使用目前頁面路徑作為 Doc ID
const path = location.pathname;
const docRef = doc(db, "posts", path);

// 更新與顯示瀏覽次數
async function updateViewCount() {
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    await updateDoc(docRef, { views: increment(1) });
  } else {
    await setDoc(docRef, { views: 1 });
  }

  const updatedSnap = await getDoc(docRef);
  const views = updatedSnap.data().views;
  document.getElementById("view-counter").innerText = `👁️ 本頁瀏覽次數：${views}`;
}

updateViewCount();