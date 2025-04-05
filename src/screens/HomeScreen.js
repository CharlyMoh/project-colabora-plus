import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import { useProyectos } from '../context/ProyectoContext';
import BottomNavBar from '../components/BottomNavBar';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { rol } = useAuth();
  const { proyectos, setProyectos, setProyectoSeleccionado } = useProyectos();

  const obtenerProyectos = async () => {
    try {
      const response = await fetch('https://backend-colabora-plus.onrender.com/api/projects/all');
      const data = await response.json();
      setProyectos(data);
    } catch (error) {
      console.error('Error al obtener proyectos:', error);
    }
  };

  useEffect(() => {
    obtenerProyectos();
  }, []);

  const handleEliminarProyecto = (idProyecto) => {
    Alert.alert(
      "¿Eliminar proyecto?",
      "¿Estás seguro de que deseas eliminar este proyecto?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            try {
              const res = await fetch(`https://backend-colabora-plus.onrender.com/api/projects/${idProyecto}`, {
                method: 'DELETE'
              });

              if (res.ok) {
                setProyectos(prev => prev.filter(p => p._id !== idProyecto));
                Alert.alert("✅ Proyecto eliminado correctamente");
              } else {
                const data = await res.json();
                Alert.alert("❌ Error al eliminar", data?.message || "No se pudo eliminar");
              }
            } catch (error) {
              console.error("❌ Error de red:", error);
              Alert.alert("❌ Error", error.message);
            }
          }
        }
      ]
    );
  };

  const handleVerDetalles = (proyecto) => {
    setProyectoSeleccionado(proyecto);
    navigation.navigate('ProjectDetails');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>COLABORA +</Text>
        <Text style={styles.rol}>{rol === 'admin' ? 'ADMINISTRADOR' : 'USUARIO'}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {proyectos.map((proyecto, index) => (
          <View key={proyecto._id} style={styles.cardWrapper}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleVerDetalles(proyecto)}
            >
              <Text style={styles.nombre}>{proyecto.nameProject}</Text>
              <Text style={styles.descripcion}>{proyecto.description}</Text>
              <Text style={styles.fecha}>Finaliza: {new Date(proyecto.endDate).toLocaleDateString()}</Text>
              <Text style={styles.integrantes}>Integrantes: {proyecto.teammates.length}</Text>

              {rol === 'admin' && (
                <TouchableOpacity
                  style={styles.eliminarBtn}
                  onPress={() => handleEliminarProyecto(proyecto._id)}
                >
                  <Text style={styles.eliminarTexto}>🗑 Eliminar Proyecto</Text>
                </TouchableOpacity>
              )}
            </TouchableOpacity>

            {rol === 'admin' && (
              <TouchableOpacity
                style={styles.botonTareas}
                onPress={() => {
                  setProyectoSeleccionado(proyecto);
                  navigation.navigate("TaskScreenAdmin");
                }}
              >
                <Text style={styles.tresPuntos}>⋮</Text>
              </TouchableOpacity>
            )}
          </View>
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
  cardWrapper: { position: 'relative' },
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
  botonTareas: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#eee',
    padding: 6,
    borderRadius: 6,
    zIndex: 10
  },
  tresPuntos: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  eliminarBtn: {
    marginTop: 10,
    backgroundColor: '#dc3545',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  eliminarTexto: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default HomeScreen;
