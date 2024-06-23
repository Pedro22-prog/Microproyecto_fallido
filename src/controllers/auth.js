// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const app = initializeApp({
  // Firebase configuration
});

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, db };

// auth.js
import { auth } from "../firebase";

export async function loginWithCredentials(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new Error('Credenciales inválidas');
  }
}

export async function cambiarContrasena(email) {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw new Error('Error al enviar el correo de restablecimiento de contraseña.');
  }
}

// db.js
import { db } from '../firebase';

export async function registerWithCredentialsStudent(email, password, name, number) {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    const id = auth.currentUser.uid;
    const docRef = doc(db, "estudiantes", id);
    const data = {
      email: email,
      name: name,
      number: number,
      picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3gkd0qUkv1F9epnQv4Wv0cgvrsGkJ7pETR3VEbPF1ne6SGhhkYXybBInQ5CGShqmPtyE&usqp=CAU",
      agrupaciones: []
    };
    await setDoc(docRef, data, { merge: true });
    return user;
  } catch (e) {
    throw new Error('Error al registrar el estudiante.');
  }
}

export async function registerWithCredentialsAdmi(email, password, name, number) {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    const id = auth.currentUser.uid;
    const docRef = doc(db, "administradores", id);
    const data = {
      email: email,
      name: name,
      number: number,
      picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3gkd0qUkv1F9epnQv4Wv0cgvrsGkJ7pETR3VEbPF1ne6SGhhkYXybBInQ5CGShqmPtyE&usqp=CAU"
    };
    await setDoc(docRef, data, { merge: true });
    return user;
  } catch (e) {
    throw new Error('Error al registrar el administrador.');
  }
}

// social.js
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { db } from '../firebase';

async function signInWithSocialProvider(provider, userType) {
  try {
    const result = await signInWithPopup(auth, provider);
    const additionalInfo = getAdditionalUserInfo(result);
    const id = auth.currentUser.uid;
    const collectionName = userType === 'student' ? 'estudiantes' : 'administradores';

    if (additionalInfo.isNewUser) {
      const docRef = doc(db, collectionName, id);
      const data = {
        email: result.user.email,
        name: result.user.displayName,
        number: result.user.phoneNumber,
        picture: result.user.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3gkd0qUkv1F9epnQv4Wv0cgvrsGkJ7pETR3VEbPF1ne6SGhhkYXybBInQ5CGShqmPtyE&usqp=CAU',
        agrupaciones: userType === 'student' ? [] : undefined,
      };
      await setDoc(docRef, data, { merge: true });
      return true;
    }
    return result.user;
  } catch (error) {
    throw new Error('Error al iniciar sesión con redes sociales.');
  }
}

export async function loginWithGoogleEstudiante() {
  return signInWithSocialProvider(googleProvider, 'student');
}

export async function loginWithGoogleAdmi() {
  return signInWithSocialProvider(googleProvider, 'admin');
}

export async function loginWithFacebookEstudiante() {
  return signInWithSocialProvider(facebookProvider, 'student');
}

export async function loginWithFacebookAdmi() {
  return signInWithSocialProvider(facebookProvider, 'admin');
}

// main.js
import { loginWithCredentials } from './auth';
import { registerWithCredentialsStudent } from './db';
import { loginWithGoogleEstudiante } from './social';

async function main() {
  try {
    await loginWithCredentials('user@example.com', 'password');
    await registerWithCredentialsStudent('user@example.com', 'password', 'John Doe', '1234567890');
    await loginWithGoogleEstudiante();
  } catch (error) {
    console.error(error);
  }
}
