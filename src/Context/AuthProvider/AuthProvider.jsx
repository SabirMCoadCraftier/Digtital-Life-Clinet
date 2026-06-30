import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true); // ক্রিয়েট করার সময়ও লোডিং ট্রু করে দেওয়া ভালো
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        try {
          // 🔥 ফায়ারবেস থেকে নতুন JWT/ID Token নেওয়া হচ্ছে
          const token = await currentUser.getIdToken();
          // 💾 লোকাল স্টোরেজে টোকেন সেভ করা হচ্ছে
          localStorage.setItem("access-token", token);
        } catch (error) {
          console.error("Error getting Firebase token:", error);
        }
      } else {
        // 🗑️ ইউজার লগআউট করলে বা না থাকলে লোকাল স্টোরেজ থেকে টোকেন মুছে ফেলা হচ্ছে
        localStorage.removeItem("access-token");
      }

      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    signInWithGoogle,
    logOut,
    updateUserProfile,
    user,
    loading,
  };

  // React Router v6+ বা লেটেস্ট স্ট্যান্ডার্ড অনুযায়ী Context.Provider ব্যবহার করা নিরাপদ
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;