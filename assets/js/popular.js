import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  // 其他設定參數...
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const db = getFirestore();