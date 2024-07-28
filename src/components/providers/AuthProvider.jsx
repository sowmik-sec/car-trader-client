/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState("Sowmik");
  const [loading, setLoading] = useState(true);
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = { user, signUpUser, loading, loginUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
