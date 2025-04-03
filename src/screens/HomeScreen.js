import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import BottomNavBar from '../components/BottomNavBar';
import { useProyectos } from '../context/ProyectoContext';
import { useAuth } from '../context/AuthContext';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { proyectos } = useProyectos();
  const { rol } = useAuth();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>
          COLABORA +{' '}
          <Text style={styles.rolText}>
            {rol === 'admin' ? 'ADMINISTRADOR' : rol === 'user' ? 'USUARIO' : ''}
          </Text>
        </Text>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>LOGO</Text>
        </View>
      </View>

      {/* Proyectos */}
      <View style={styles.projectsContainer}>
        <Text style={styles.projectsTitle}>PROYECTOS</Text>
        <ScrollView>
          <View style={styles.projectsGrid}>
            {proyectos.map((proyecto, index) => (
              <View key={index} style={styles.projectCard}>
                <Text style={styles.projectName}>{proyecto.nombre}</Text>
                <Text style={styles.projectDetails}>
                  {proyecto.integrantes.length} integrante(s)
                </Text>
                <Text style={styles.projectDetails}>
                  {proyecto.fechaInicio} - {proyecto.fechaFin}
                </Text>

                {/* Redirección basada en rol */}
                {rol === 'admin' && (
                  <TouchableOpacity onPress={() => navigation.navigate('TaskScreenAdmin')}>
                    <Text style={styles.iconText}>...</Text>
                  </TouchableOpacity>
                )}
                {rol === 'user' && (
                  <TouchableOpacity onPress={() => navigation.navigate('TaskScreenUser')}>
                    <Text style={styles.iconText}>...</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Crear Proyecto solo si eres admin */}
      {(rol === 'admin' || rol === 'user') && (
  <TouchableOpacity
    style={styles.createProjectButton}
    onPress={() => navigation.navigate('ProjectScreen')}
  >
    <Text style={styles.createProjectText}>CREAR PROYECTO</Text>
  </TouchableOpacity>
)}


      {/* Barra de navegación */}
      <BottomNavBar />
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
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoContainer: {
    width: 64,
    height: 40,
    backgroundColor: '#D3D3D3',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 12,
  },
  projectsContainer: {
    backgroundColor: '#E0E0E0',
    padding: 16,
    borderRadius: 16,
    flex: 1,
  },
  projectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  projectCard: {
    width: '48%',
    backgroundColor: '#A9A9A9',
    borderRadius: 16,
    marginBottom: 16,
    padding: 12,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 4,
  },
  createProjectButton: {
    backgroundColor: '#28a745',
    padding: 18,
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  createProjectText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  projectName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  projectDetails: {
    fontSize: 12,
    color: '#f2f2f2',
    marginBottom: 2,
  },
  rolText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555',
    backgroundColor: '#eee',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginLeft: 10,
  },
});

export default HomeScreen;
