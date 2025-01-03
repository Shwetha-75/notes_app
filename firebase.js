import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,collection} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyB7Lc1EZGnSm4VxDMRnfULJGrtidSXWxjI",
  authDomain: "notes-c9e9f.firebaseapp.com",
  projectId: "notes-c9e9f",
  storageBucket: "notes-c9e9f.firebasestorage.app",
  messagingSenderId: "560682983708",
  appId: "1:560682983708:web:521adccef89f8c086bdad9",
  measurementId: "G-K2S8MLKDGN"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);
export const notesCollection=collection(db,"notes");