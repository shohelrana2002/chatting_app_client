/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
// import axios from "axios";
export const AuthContext = createContext(null);
export const auth = getAuth(app);
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
  const HandleUpdateProfile = (name, photo, phoneNumber) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
      phoneNumber: phoneNumber,
    });
  };
  const sendEmailVerify = (user) => {
    setLoading(true);
    return sendEmailVerification(user);
  };
  // const handleSaveUsers = async (user) => {
  //   const userInfo = {
  //     email: user?.email,
  //     name: user?.displayName,
  //     image: user?.photoURL,
  //   };
  //   const { data } = await axios.patch(
  //     `${import.meta.env.VITE_URL}/user`,
  //     userInfo
  //   );
  //   return data;
  // };
  // Mange User
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      // handleSaveUsers(currentUser);
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
    HandleUpdateProfile,
    handleGoogle,
    sendEmailVerify,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
