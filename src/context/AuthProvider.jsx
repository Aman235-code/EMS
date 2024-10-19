/* eslint-disable react/prop-types */

import { createContext, useState, useEffect } from "react";
import { getLocalstorage, setLocalstorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null);
  console.log("In the context ");

  useEffect(() => {
    console.log("context use effect");
    setLocalstorage();
    const { employees, admin } = getLocalstorage();
    setuserData({ employees, admin });
    console.log(userData);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
