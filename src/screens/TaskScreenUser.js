import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const TareasScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.homeButton}>
          <Text style={styles.iconText}>🏠</Text>
        </TouchableOpacity>
        <Text style={styles.title}>COLABORA +</Text>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>LOGO</Text>
        </View>
      </View>

      {/* Tareas Disponibles */}
      <Text style={styles.sectionTitle}>Tareas disponibles</Text>
      <View style={styles.taskContainer}>
        <Text style={styles.taskText}>Tarea 1</Text>
        <Text style={styles.taskText}>Tarea 2</Text>
        <Text style={styles.taskText}>Tarea 3</Text>
      </View>

      {/* Estatus */}
      <Text style={styles.sectionTitle}>Estatus</Text>
      <View style={styles.statusContainer}>
        <View style={[styles.statusBar, styles.completed]}>
          <Text style={styles.statusText}>Completado</Text>
        </View>
        <View style={[styles.statusBar, styles.pending]}>
          <Text style={styles.statusText}>Pendiente</Text>
        </View>
        <View style={[styles.statusBar, styles.inProgress]}>
          <Text style={styles.statusText}>Progreso</Text>
        </View>
      </View>

      {/* Botón Actualizar */}
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>ACTUALIZAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  homeButton: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    borderRadius: 8,
  },
  iconText: {
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoContainer: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    borderRadius: 20,
  },
  logoText: {
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  taskContainer: {
    backgroundColor: '#D3D3D3',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  taskText: {
    fontSize: 16,
    marginBottom: 8,
  },
  statusContainer: {
    backgroundColor: '#D3D3D3',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  statusBar: {
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  completed: {
    backgroundColor: '#4CAF50',
  },
  pending: {
    backgroundColor: '#D4AF37',
  },
  inProgress: {
    backgroundColor: '#A9CFA5',
  },
  statusText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  updateButton: {
    backgroundColor: '#81AFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  updateButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default TareasScreen;
