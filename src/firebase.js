// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD12PAMoDae6KwlllfWuSyIWUA2s2eN67c",
  authDomain: "linkedin-clone-429900.firebaseapp.com",
  projectId: "linkedin-clone-429900",
  storageBucket: "linkedin-clone-429900.appspot.com",
  messagingSenderId: "529925643707",
  appId: "1:529925643707:web:30b59750652d238a89f89e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();