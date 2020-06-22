import React, { useState, useEffect } from "react";
import app from "./App";

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("login");
    if (isLoggedIn) this.props.history.push("/");
  }, []);


  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
