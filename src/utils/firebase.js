// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCkZmEb8DH_1QA1llwxGZqgqlbjYKEusxc",
    authDomain: "streamsnipe-24a82.firebaseapp.com",
    projectId: "streamsnipe-24a82",
    storageBucket: "streamsnipe-24a82.appspot.com",
    messagingSenderId: "184191632113",
    appId: "1:184191632113:web:f1542e1b108fbb68b09f50",
    measurementId: "G-P61PYDF7TZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();