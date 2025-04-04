import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import BottomNavBar from '../components/BottomNavBar';

const CalendarMenu = () => {
  const navigation = useNavigation();
  const { usuarioActual } = useAuth();
  const [eventos, setEventos] = useState([]);

  const obtenerEventos = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/calendars/byUser/${usuarioActual.id}`);
      const data = await res.json();
      setEventos(data);
    } catch (error) {
      console.error('Error al obtener eventos:', error);
    }
  };

  useEffect(() => {
    obtenerEventos();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.titulo}>{item.title}</Text>
      <Text style={styles.descripcion}>{item.description}</Text>
      <Text style={styles.fecha}>
        📅 {new Date(item.startDate).toLocaleDateString()} → {new Date(item.endDate).toLocaleDateString()}
      </Text>
      {item.projectId && <Text style={styles.detalle}>🔗 Proyecto relacionado</Text>}
      {item.taskId && <Text style={styles.detalle}>📌 Tarea asignada</Text>}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Botón para volver */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.backButtonText}>← Volver</Text>
      </TouchableOpacity>

      <Text style={styles.tituloPrincipal}>📅 Mis Eventos</Text>

      <FlatList
        data={eventos}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={<Text style={styles.vacio}>No hay eventos registrados</Text>}
      />

      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  backButton: {
    marginBottom: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#4CAF50', // 💚 color visible
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    zIndex: 999 // Asegura que esté encima
  },
  
  backButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  tituloPrincipal: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  lista: {
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  descripcion: {
    fontSize: 14,
    marginBottom: 4,
  },
  fecha: {
    fontSize: 12,
    color: '#555',
    marginBottom: 4,
  },
  detalle: {
    fontSize: 12,
    color: '#777',
  },
  vacio: {
    marginTop: 20,
    fontStyle: 'italic',
    color: '#888',
    textAlign: 'center',
  },
});

export default CalendarMenu;
