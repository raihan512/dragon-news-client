import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from "../firebaseConfig/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginWithGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = { user, loginWithGoogle };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
