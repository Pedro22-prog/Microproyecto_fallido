// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOJUxPFHwss3_ypOvUGQuVRXvu0x0lWEI",
  authDomain: "microproyecto2-86850.firebaseapp.com",
  projectId: "microproyecto2-86850",
  storageBucket: "microproyecto2-86850.appspot.com",
  messagingSenderId: "71807243021",
  appId: "1:71807243021:web:3a62d4623bdedad3755644"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);