// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGe14ZbQU0a06mFygIcmkJM4ay6bpIaIg",
  authDomain: "midtest-26526.firebaseapp.com",
  projectId: "midtest-26526",
  storageBucket: "midtest-26526.firebasestorage.app",
  messagingSenderId: "194876133278",
  appId: "1:194876133278:web:717f2b1c9b4b63b478508f",
  measurementId: "G-T8HWJN9N7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);