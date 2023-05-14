import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/Firebase';

export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);

    const setLoadingSpin = (Loading) => {
        setLoading(Loading);
    };

  const setAuthUser = (user) => {
    setUser(user);
  };
  const authInfo = {
    user,
    Loading,
    setAuthUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
