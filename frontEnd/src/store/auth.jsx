import { createContext, useContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const storeTokenInLs = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const isLoggedIn = !!token;
  return (
    <AuthContext.Provider value={(storeTokenInLs, LogoutUser, isLoggedIn)}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const contextValue = useContext(AuthContext);
  if (!contextValue) {
    throw new Error("Context is not set properly");
  }
  return contextValue;
};
