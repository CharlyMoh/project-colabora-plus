import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import { useProyectos } from '../context/ProyectoContext';
import BottomNavBar from '../components/BottomNavBar';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { usuarioActual, rol } = useAuth();
  const { proyectos, setProyectos, setProyectoSeleccionado } = useProyectos();

  const obtenerProyectos = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/projects/all');
      const data = await response.json();
      setProyectos(data);
    } catch (error) {
      console.error('Error al obtener proyectos:', error);
    }
  };

  useEffect(() => {
    obtenerProyectos();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>COLABORA +</Text>
        <Text style={styles.rol}>{rol === 'admin' ? 'ADMINISTRADOR' : 'USUARIO'}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {proyectos.map((proyecto, index) => (
          <TouchableOpacity
            key={proyecto._id}
            style={styles.card}
            onPress={() => {
              setProyectoSeleccionado(proyecto); // GUARDAR PROYECTO SELECCIONADO
              navigation.navigate('ProjectDetails');
            }}
          >
            <Text style={styles.nombre}>{proyecto.nameProject}</Text>
            <Text style={styles.descripcion}>{proyecto.description}</Text>
            <Text style={styles.fecha}>Finaliza: {new Date(proyecto.endDate).toLocaleDateString()}</Text>
            <Text style={styles.integrantes}>Integrantes: {proyecto.teammates.length}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {rol === 'admin' && (
        <TouchableOpacity
          style={styles.botonCrear}
          onPress={() => navigation.navigate('ProjectScreen')}
        >
          <Text style={styles.botonTexto}>CREAR PROYECTO</Text>
        </TouchableOpacity>
      )}

      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2', padding: 16 },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    marginBottom: 10,
  },
  logo: { fontSize: 20, fontWeight: 'bold' },
  rol: { fontSize: 14, backgroundColor: '#ddd', padding: 6, borderRadius: 8 },
  scroll: { paddingBottom: 160 },
  card: {
    backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 12,
    elevation: 3,
  },
  nombre: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  descripcion: { fontSize: 14, marginBottom: 4 },
  fecha: { fontSize: 12, color: '#777' },
  integrantes: { fontSize: 12, color: '#555', marginTop: 4 },
  botonCrear: {
    backgroundColor: '#28a745',
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 80,
  },
  botonTexto: { color: 'white', fontWeight: 'bold' },
});

export default HomeScreen;
