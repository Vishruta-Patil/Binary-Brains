// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSIs7CMHjBdq3LcQFlPD3Xi5WowbcZqjc",
  authDomain: "binary-brain-d3e2d.firebaseapp.com",
  projectId: "binary-brain-d3e2d",
  storageBucket: "binary-brain-d3e2d.appspot.com",
  messagingSenderId: "736457730773",
  appId: "1:736457730773:web:0e26d27f8a01382943d05c",
  measurementId: "G-7PG7VB9H1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)