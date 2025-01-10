import React, { createContext, useContext, useState, useEffect } from "react";

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../Firebase/firebase/firebase.config";
import axios from "axios";


const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider(); //google

// Create context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data,setData] = useState(null);

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);


  //api
  const fetchData = async (uid) => {
    try {
      // Replace with your actual API endpoint
      const response = await axios.get(`http://localhost:5000`);
      setData(response.data); // Store the user data in state
    } catch (err) {
      setError("Error fetching user data"); // Handle errors
      console.error("Error fetching user data:", err);
    }
  };

  // Authentication methods
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    return signOut(auth);
  };

const name = 'from context'

  // Provide the current user and auth methods
  const value = {
    name,
    currentUser,
    login,
    signup,
    logout,
    data,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};