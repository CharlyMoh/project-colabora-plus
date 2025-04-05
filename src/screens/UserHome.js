// UserHome.js
import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useProyectos } from '../context/ProyectoContext';
import { useAuth } from '../context/AuthContext';
import BottomNavBar from '../components/BottomNavBar';
import { useCallback } from 'react';

const UserHome = () => {
  const navigation = useNavigation();
  const { proyectos, setProyectoSeleccionado } = useProyectos();
  const { rol, usuarioActual, setRol, setUsuarioActual } = useAuth();

  useFocusEffect(
    useCallback(() => {
    }, [proyectos])
  );

  const proyectosDelUsuario = useMemo(() => {
    return proyectos.filter(p =>
      p.teammates?.some(u => u._id === usuarioActual._id)
    );
  }, [proyectos, usuarioActual]);

  const handleVerDetalles = (index) => {
    setProyectoSeleccionado(index);
    navigation.navigate('ProjectDetails');
  };

  const handleCambiarEstado = (index) => {
    setProyectoSeleccionado(index);
    navigation.navigate('TaskStatusScreen');
  };

  const handleLogout = () => {
    setRol(null);
    setUsuarioActual(null);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          COLABORA + <Text style={styles.rolText}>{rol?.toUpperCase()}</Text>
        </Text>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>LOGO</Text>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.logoutIcon}>🚪</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.projectsContainer}>
        <Text style={styles.projectsTitle}>PROYECTOS</Text>
        <ScrollView>
          <View style={styles.projectsGrid}>
            {proyectosDelUsuario.map((proyecto, index) => {
              const indiceReal = proyectos.findIndex(p => p.nombre === proyecto.nombre);
              return (
                <TouchableOpacity
                  key={indiceReal}
                  style={styles.projectCard}
                  onPress={() => handleVerDetalles(indiceReal)}
                >
                  <Text style={styles.projectName}>{proyecto.nombre}</Text>
                  <Text style={styles.projectDetails}>
                    {proyecto.teammates?.length || 0} integrante(s)
                  </Text>
                  <Text style={styles.projectDetails}>
                    {proyecto.fechaInicio} - {proyecto.fechaFin}
                  </Text>
                  <TouchableOpacity
                    style={styles.buttonDots}
                    onPress={(e) => {
                      e.stopPropagation();
                      handleCambiarEstado(indiceReal);
                    }}
                  >
                    <Text style={styles.iconText}>...</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              );
            })}
            {proyectosDelUsuario.length === 0 && (
              <Text style={{ textAlign: 'center', marginTop: 20 }}>No tienes proyectos asignados.</Text>
            )}
          </View>
        </ScrollView>
      </View>

      {/* Solo mostrar botón si es admin, omitido en UserHome por ahora */}

      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  title: { fontSize: 24, fontWeight: 'bold' },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  logoText: { fontSize: 12 },
  logoutIcon: { fontSize: 20, marginLeft: 10 },
  rolText: {
    fontSize: 12, fontWeight: 'bold', color: '#555',
    backgroundColor: '#eee', paddingHorizontal: 8,
    paddingVertical: 4, borderRadius: 8, marginLeft: 10,
  },
  projectsContainer: {
    backgroundColor: '#E0E0E0', padding: 16,
    borderRadius: 16, flex: 1
  },
  projectsTitle: {
    fontSize: 20, fontWeight: 'bold', marginBottom: 10
  },
  projectsGrid: {
    flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'
  },
  projectCard: {
    width: '48%', backgroundColor: '#A9A9A9', borderRadius: 16,
    marginBottom: 16, padding: 12, justifyContent: 'space-between',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3, shadowRadius: 3.84, elevation: 4,
  },
  projectName: {
    fontSize: 16, fontWeight: 'bold', color: '#fff', marginBottom: 4
  },
  projectDetails: {
    fontSize: 12, color: '#f2f2f2', marginBottom: 2
  },
  iconText: {
    fontSize: 18, color: '#fff', textAlign: 'center'
  },
  buttonDots: {
    borderWidth: 1, borderColor: '#fff', paddingVertical: 4,
    paddingHorizontal: 10, borderRadius: 6, alignSelf: 'flex-end'
  }
});

export default UserHome;
