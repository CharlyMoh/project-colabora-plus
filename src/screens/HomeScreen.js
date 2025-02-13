import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import BottomNavBar from '../components/BottomNavBar';


const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>COLABORA +</Text>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>LOGO</Text>
        </View>
      </View>

      {/* Proyectos */}
      <View style={styles.projectsContainer}>
        <Text style={styles.projectsTitle}>PROYECTOS</Text>
        <ScrollView>
          <View style={styles.projectsGrid}>
            {[...Array(8)].map((_, index) => (
              <View key={index} style={styles.projectCard}>
                <TouchableOpacity>
                  <Text style={styles.iconText}>...</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Crear Proyecto */}
      <TouchableOpacity style={styles.createProjectButton} onPress={() => navigation.navigate('ProjectScreen')} >
        <Text style={styles.createProjectText}>CREAR PROYECTO</Text>
        <View style={styles.plusIconContainer}>
          <Text style={styles.iconText}>+</Text>
        </View>
      </TouchableOpacity>

      {/* Barra de navegación en la parte inferior */}
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
    flex: 1, // Para ocupar espacio correctamente y evitar solapamientos
  },
  projectsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  projectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  projectCard: {
    width: '48%',
    height: 96,
    backgroundColor: '#A9A9A9',
    borderRadius: 16,
    marginBottom: 16,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 8,
  },
  createProjectButton: {
    backgroundColor: '#E0E0E0',
    padding: 16,
    borderRadius: 16,
    marginTop: 16,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  createProjectText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  plusIconContainer: {
    backgroundColor: '#3A7DFF',
    padding: 8,
    borderRadius: 50,
  },
});

export default HomeScreen;
