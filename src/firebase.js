// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import { getAuth } from "firebase/auth";
//import { GoogleAuthProvider } from "firebase/auth/web-extension";
//import { FacebookAuthProvider } from "firebase/auth/web-extension";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCOJUxPFHwss3_ypOvUGQuVRXvu0x0lWEI",
//   authDomain: "microproyecto2-86850.firebaseapp.com",
//   projectId: "microproyecto2-86850",
//   storageBucket: "microproyecto2-86850.appspot.com",
//   messagingSenderId: "71807243021",
//   appId: "1:71807243021:web:3a62d4623bdedad3755644"
//};

//Initialize Firebase
//const app = initializeApp(firebaseConfig);

//export const auth = getAuth(app);
//export const db = getFirestore(app);
//export const googleProvider = new GoogleAuthProvider();
//export const facebookProvider = new FacebookAuthProvider();
//import firebase from 'firebase/app';
//import 'firebase/auth';

//const firebaseConfig = {
//  apiKey: "AIzaSyCOJUxPFHwss3_ypOvUGQuVRXvu0x0lWEI",
//  authDomain: "microproyecto2-86850.firebaseapp.com",
//  projectId: "microproyecto2-86850",
//  storageBucket: "microproyecto2-86850.appspot.com",
//  messagingSenderId: "71807243021",
//  appId: "1:71807243021:web:3a62d4623bdedad3755644"
//};

//firebase.initializeApp(firebaseConfig);
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOJUxPFHwss3_ypOvUGQuVRXvu0x0lWEI",
  authDomain: "microproyecto2-86850.firebaseapp.com",
  projectId: "microproyecto2-86850",
  storageBucket: "microproyecto2-86850.appspot.com",
  messagingSenderId: "71807243021",
  appId: "1:71807243021:web:3a62d4623bdedad3755644"
};

const app = initializeApp(firebaseConfig);
export { app };
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();