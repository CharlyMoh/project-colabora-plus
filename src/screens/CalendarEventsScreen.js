import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useAuth } from '../context/AuthContext';

const CalendarEventsScreen = () => {
  const { usuarioActual } = useAuth();
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);

  const obtenerEventos = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/calendars/byUser/${usuarioActual.id}`);
      const data = await res.json();
      setEventos(data);
    } catch (error) {
      console.error("Error al obtener eventos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerEventos();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Cargando eventos...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Eventos del Calendario</Text>
      {eventos.length === 0 ? (
        <Text>No hay eventos registrados</Text>
      ) : (
        eventos.map((evento) => (
          <View key={evento._id} style={styles.card}>
            <Text style={styles.nombre}>{evento.title}</Text>
            <Text>{evento.description}</Text>
            <Text>Inicio: {new Date(evento.startDate).toLocaleString()}</Text>
            <Text>Fin: {new Date(evento.endDate).toLocaleString()}</Text>
            <Text>Estado: {evento.status}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12
  },
  nombre: { fontSize: 16, fontWeight: 'bold' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }
});

export default CalendarEventsScreen;
