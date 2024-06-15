// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTXLd1pJMO3QjB9e5UWutBWXqx64CLnz8",
    authDomain: "netflixgpt-c8b32.firebaseapp.com",
    projectId: "netflixgpt-c8b32",
    storageBucket: "netflixgpt-c8b32.appspot.com",
    messagingSenderId: "64252156982",
    appId: "1:64252156982:web:17993cf44d43a46a938c97",
    measurementId: "G-0HSJE06GGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();