import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { db } from "./firebaseInit.js";
console.log("目前 Firebase Apps：", getApps());

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
