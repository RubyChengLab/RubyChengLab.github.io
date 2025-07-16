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

// 取得路徑，且格式化成合法的 firestore doc id
const rawPath = location.pathname;
const path = rawPath === "/" ? "index" : rawPath.replace(/\//g, "_");

// 再用 path 建立 docRef
const docRef = doc(db, "posts", path);
console.log("🔥 viewCounter.js 執行中，path =", path);




// 更新與顯示瀏覽次數
async function updateViewCount() {
  console.log("嘗試讀取文件");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("文件存在，增加瀏覽數");
    await updateDoc(docRef, { views: increment(1) });
  } else {
    console.log("文件不存在，建立新文件");
    await setDoc(docRef, { views: 1 });
  }

  const updatedSnap = await getDoc(docRef);
  const views = updatedSnap.data().views;
  console.log("更新後瀏覽數為:", views);
  document.getElementById("view-counter").innerText = `👁️ 本頁瀏覽次數：${views}`;
}

updateViewCount();