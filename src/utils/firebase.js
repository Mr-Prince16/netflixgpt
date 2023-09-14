// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjSInpbNBaEO3WXkZLxDL3oso3WWDCuF8",
  authDomain: "netflix-gpt-d6ec4.firebaseapp.com",
  projectId: "netflix-gpt-d6ec4",
  storageBucket: "netflix-gpt-d6ec4.appspot.com",
  messagingSenderId: "780504148918",
  appId: "1:780504148918:web:d369f8cfad07dc6337af17",
  measurementId: "G-CJCC1H2W9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);