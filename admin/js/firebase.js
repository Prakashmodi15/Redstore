// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBe6T75YFS3MACQ1Drmrrj6xeRlMIwT7s4",
  authDomain: "myshop-1dbc9.firebaseapp.com",
  projectId: "myshop-1dbc9",
  storageBucket: "myshop-1dbc9.appspot.com",
  messagingSenderId: "81466489688",
  appId: "1:81466489688:web:e225da8670b2314dd1432d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
