import React, { createContext, useState, useContext } from 'react';

const ProyectoContext = createContext();

export const useProyectos = () => useContext(ProyectoContext);

export const ProyectoProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState([]);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const agregarProyecto = (proyecto) => {
    const proyectoConTareas = { ...proyecto, tareas: [] };
    setProyectos(prev => [...prev, proyectoConTareas]);
  };

  const agregarTareaAProyecto = (proyecto, tarea) => {
    setProyectos(prev => {
      const copia = [...prev];
      const index = copia.findIndex(p => p._id === proyecto._id);
      if (index === -1) return prev;

      const tareaConProgreso = {
        ...tarea,
        progreso: (copia[index].teammates || []).map(usuario => ({
          usuario,
          estado: 'Pendiente'
        }))
      };

      copia[index].tareas = [...(copia[index].tareas || []), tareaConProgreso];
      return copia;
    });
  };

  return (
    <ProyectoContext.Provider
      value={{
        proyectos,
        setProyectos,
        agregarProyecto,
        agregarTareaAProyecto,
        proyectoSeleccionado,
        setProyectoSeleccionado
      }}
    >
      {children}
    </ProyectoContext.Provider>
  );
};
