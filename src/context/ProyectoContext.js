import React, { createContext, useState, useContext } from 'react';

const ProyectoContext = createContext();

export const useProyectos = () => useContext(ProyectoContext);

export const ProyectoProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState([]);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null); // nuevo

  const agregarProyecto = (proyecto) => {
    const proyectoConTareas = { ...proyecto, tareas: [] }; // agrega campo "tareas"
    setProyectos((prev) => [...prev, proyectoConTareas]);
  };

  const agregarTareaAProyecto = (index, tarea) => {
    setProyectos(prev => {
      const copia = [...prev];
      const tareaConProgreso = {
        ...tarea,
        progreso: copia[index].integrantes.map(usuario => ({
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
      value={{ proyectos, agregarProyecto, agregarTareaAProyecto, proyectoSeleccionado, setProyectoSeleccionado }}
    >
      {children}
    </ProyectoContext.Provider>
  );
};