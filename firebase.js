// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDoiAqTteMxMiZBlb03UpFajo02PVjta-c",
  authDomain: "royal-study-official.firebaseapp.com",
  projectId: "royal-study-official",
  storageBucket: "royal-study-official.firebasestorage.app",
  messagingSenderId: "755868684706",
  appId: "1:755868684706:web:50ec3e5a2f03de574a22fb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);