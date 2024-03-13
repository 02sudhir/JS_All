
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAJDH3Af8VaJVg1lekHMKKBzrxW62LFXtk",
  authDomain: "react-netflix-sudhir.firebaseapp.com",
  projectId: "react-netflix-sudhir",
  storageBucket: "react-netflix-sudhir.appspot.com",
  messagingSenderId: "206291068354",
  appId: "1:206291068354:web:68100b2342f874fa32225b",
  measurementId: "G-NJGT9DGHQJ"
};


const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app);
