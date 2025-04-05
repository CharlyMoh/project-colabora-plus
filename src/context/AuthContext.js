import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(); // <-- ESTA LÍNEA FALTABA

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [rol, setRol] = useState(null);
  const [usuarioActual, setUsuarioActual] = useState(null);


  /*CAMBIAR LINEA DE CODIGO*/ 
  const login = (usuarioDesdeBackend) => {
    setUsuarioActual(usuarioDesdeBackend);
    if (usuarioDesdeBackend.rol === 'admin') {
      setRol('admin');
    } else {
      setRol('user');
    }
    
  };

  return (
    <AuthContext.Provider value={{ rol, setRol, login, usuarioActual }}>
      {children}
    </AuthContext.Provider>
  );
};
