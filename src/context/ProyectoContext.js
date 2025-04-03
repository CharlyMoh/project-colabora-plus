import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto
const ProyectoContext = createContext();

// Hook para usar el contexto fácilmente
export const useProyectos = () => useContext(ProyectoContext);

// Proveedor del contexto (envolverá tu App)
export const ProyectoProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState([]);

  // Función para agregar un nuevo proyecto
  const agregarProyecto = (proyecto) => {
    setProyectos((prev) => [...prev, proyecto]);
  };

  return (
    <ProyectoContext.Provider value={{ proyectos, agregarProyecto }}>
      {children}
    </ProyectoContext.Provider>
  );
};
