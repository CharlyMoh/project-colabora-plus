import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useProyectos } from '../context/ProyectoContext';

const TaskScreenUser = () => {
  const navigation = useNavigation();
  const { proyectoSeleccionado, proyectos } = useProyectos();

  const tareas =
    proyectoSeleccionado !== null && proyectoSeleccionado !== undefined
      ? proyectos[proyectoSeleccionado]?.tareas || []
      : [];

  const [seleccionadas, setSeleccionadas] = useState([]);

  const toggleSeleccion = (index) => {
    if (seleccionadas.includes(index)) {
      setSeleccionadas(seleccionadas.filter(i => i !== index));
    } else {
      setSeleccionadas([...seleccionadas, index]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.iconText}>🏠</Text>
        </TouchableOpacity>
        <Text style={styles.title}>COLABORA +</Text>
        <View style={styles.logoContainer}><Text style={styles.logoText}>LOGO</Text></View>
      </View>

      {/* Tareas */}
      <Text style={styles.sectionTitle}>Tareas disponibles</Text>
      <View style={styles.taskContainer}>
        {tareas.length === 0 ? (
          <Text style={styles.taskText}>No hay tareas asignadas</Text>
        ) : (
          tareas.map((tarea, index) => (
            <TouchableOpacity
              key={index}
              style={styles.taskRow}
              onPress={() => toggleSeleccion(index)}
            >
              <View style={[styles.checkbox, seleccionadas.includes(index) && styles.checkboxSelected]} />
              <Text style={styles.taskText}>{tarea.nombre} - {tarea.descripcion}</Text>
            </TouchableOpacity>
          ))
        )}
      </View>

      {/* Botones de estatus */}
      <Text style={styles.sectionTitle}>Estatus</Text>
      <View style={styles.statusContainer}>
        <TouchableOpacity style={[styles.statusButton, styles.insetShadow, styles.completed]}>
          <Text style={styles.statusText}>Completado</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.statusButton, styles.insetShadow, styles.pending]}>
          <Text style={styles.statusText}>Pendiente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.statusButton, styles.insetShadow, styles.inProgress]}>
          <Text style={styles.statusText}>Progreso</Text>
        </TouchableOpacity>
      </View>

      {/* Botón actualizar */}
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>ACTUALIZAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  homeButton: { backgroundColor: '#D3D3D3', padding: 10, borderRadius: 8 },
  iconText: { fontSize: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  logoContainer: { backgroundColor: '#D3D3D3', padding: 10, borderRadius: 20 },
  logoText: { fontSize: 12 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  taskContainer: { backgroundColor: '#D3D3D3', padding: 16, borderRadius: 10, marginBottom: 20 },
  taskRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  checkbox: {
    width: 20, height: 20, borderRadius: 4, borderWidth: 2,
    borderColor: '#888', marginRight: 12, backgroundColor: '#fff'
  },
  checkboxSelected: {
    backgroundColor: '#28a745', borderColor: '#28a745',
  },
  taskText: { fontSize: 16 },

  statusContainer: { marginBottom: 30, gap: 16 },
  statusButton: {
    padding: 14, borderRadius: 20, alignItems: 'center',
    borderWidth: 2, borderColor: '#999'
  },
  insetShadow: {
    backgroundColor: '#e6e6e6',
    shadowColor: '#000',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  completed: { borderColor: '#4CAF50' },
  pending: { borderColor: '#D4AF37' },
  inProgress: { borderColor: '#A9CFA5' },
  statusText: { fontWeight: 'bold', color: '#333' },

  updateButton: {
    backgroundColor: '#81AFFF', padding: 20, borderRadius: 10, alignItems: 'center',
    elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3, shadowRadius: 3,
  },
  updateButtonText: { fontSize: 20, fontWeight: 'bold', color: '#000000' },
});

export default TaskScreenUser;
