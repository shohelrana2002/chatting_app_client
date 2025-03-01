/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const handleUserCreate = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleLogout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const provider = new GoogleAuthProvider();
  const handleGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const HandleUpdateProfile = (currentUser) => {
    setLoading(true);
    return updateProfile(auth, currentUser);
  };
  // Mange User
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  const authInfo = {
    loading,
    setLoading,
    user,
    handleUserCreate,
    handleLogout,
    handleLogin,
    handleGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
