import React, { createContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const signIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const signUp = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  const signOut = () => {
    return firebase.auth().signOut();
  };

  return (
    <AuthContext.Provider value={{ currentUser, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};