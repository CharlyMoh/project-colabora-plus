import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [rol, setRol] = useState(null); // 'admin' o 'user'

  return (
    <AuthContext.Provider value={{ rol, setRol }}>
      {children}
    </AuthContext.Provider>
  );
};
