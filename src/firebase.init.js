// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAEdSUF67h6oVdLRCfoDjRmIpxdLHGrOLg",
  authDomain: "ema-john-simple-6495b.firebaseapp.com",
  projectId: "ema-john-simple-6495b",
  storageBucket: "ema-john-simple-6495b.appspot.com",
  messagingSenderId: "1036054813372",
  appId: "1:1036054813372:web:3ac5cb22f9a5640dba0eb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
