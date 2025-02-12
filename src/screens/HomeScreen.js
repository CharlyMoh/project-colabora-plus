import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const ProyectosScreen = () => {
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
            <View style={styles.projectCard}>
              <TouchableOpacity>
                <Text style={styles.iconText}>...</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.projectCard}>
              <TouchableOpacity>
                <Text style={styles.iconText}>...</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.projectCard}>
              <TouchableOpacity>
                <Text style={styles.iconText}>...</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.projectCard}>
              <TouchableOpacity>
                <Text style={styles.iconText}>...</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.projectCard}>
              <TouchableOpacity>
                <Text style={styles.iconText}>...</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.projectCard}>
              <TouchableOpacity>
                <Text style={styles.iconText}>...</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.projectCard}>
              <TouchableOpacity>
                <Text style={styles.iconText}>...</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.projectCard}>
              <TouchableOpacity>
                <Text style={styles.iconText}>...</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Crear Proyecto */}
      <TouchableOpacity style={styles.createProjectButton}>
        <Text style={styles.createProjectText}>CREAR PROYECTO</Text>
        <View style={styles.plusIconContainer}>
          <Text style={styles.iconText}>+</Text>
        </View>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text style={styles.iconText}>📅</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.iconText}>⚙️</Text>
        </TouchableOpacity>
      </View>
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
  bottomNav: {
    backgroundColor: '#D3D3D3',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: 16,
  },
  iconText: {
    fontSize: 20,
    color: 'white',
  },
});

export default ProyectosScreen;
