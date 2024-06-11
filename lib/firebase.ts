// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "drive-4b588.firebaseapp.com",
  projectId: "drive-4b588",
  storageBucket: "drive-4b588.appspot.com",
  messagingSenderId: "564658893029",
  appId: "1:564658893029:web:0e8e4ae8de14c43afc240c"
};

!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export {db, storage}