// viewCounter.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  // ...你的firebase設定
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const rawPath = location.pathname;
const path = rawPath === "/" ? "index" : rawPath.replace(/\//g, "_");

const docRef = doc(db, "posts", path);

// 確保不要在這之前用 path 變數
console.log("path =", path);

async function updateViewCount() {
  // 這裡正常使用 path
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