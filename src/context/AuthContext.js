import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [rol, setRol] = useState(null);
  const [usuarioActual, setUsuarioActual] = useState(null);

  const usuarios = [
    { username: 'u1', password: '123', rol: 'user' },
    { username: 'u2', password: '123', rol: 'user' },
    { username: 'u3', password: '123', rol: 'user' },
    { username: 'user', password: '123', rol: 'user' },
    { username: 'admin', password: '123', rol: 'admin' }
  ];

  const login = (username, password) => {
    const user = usuarios.find(u => u.username === username && u.password === password);
    if (user) {
      setRol(user.rol);
      setUsuarioActual(user.username);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ rol, setRol, login, usuarioActual, usuarios }}>
      {children}
    </AuthContext.Provider>
  );
};
