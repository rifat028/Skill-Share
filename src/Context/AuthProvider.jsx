import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
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
import { auth } from "../assets/Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [resetEmail, setResetEmail] = useState("");

  const googleProvider = new GoogleAuthProvider();

  const CreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateProfileInfo = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL:
        photoUrl ||
        `https://placehold.co/150x150/4F46E5/FFFFFF?text=${name
          .slice(0, 2)
          .toUpperCase()}`,
    });
  };

  const GoogleSignIN = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const SignInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const HandleForgetPassword = (email) => {
    // setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    // CreateUser: CreateUser
    loading,
    user,
    resetEmail,
    setResetEmail,
    CreateUser,
    updateProfileInfo,
    SignInUser,
    logOutUser,
    GoogleSignIN,
    HandleForgetPassword,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
