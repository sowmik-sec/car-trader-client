/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState("Sowmik");
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth, {
      displayName: name,
      photoURL: photo,
    });
  };
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (curUser) => {
      setLoading(false);
      setUser(curUser);
    });
    return () => {
      unSubscriber();
    };
  }, []);
  const authInfo = {
    user,
    signUpUser,
    loading,
    loginUser,
    googleSignIn,
    updateUserProfile,
    resetPassword,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
