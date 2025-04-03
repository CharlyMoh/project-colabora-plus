import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useProyectos } from '../context/ProyectoContext';
import { useAuth } from '../context/AuthContext';

const AgregarIntegrantesScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { agregarProyecto } = useProyectos();
  const { usuarios } = useAuth(); // obtener usuarios

  const { nombre, descripcion, fechaInicio, fechaFin } = route.params;

  const [integrantes, setIntegrantes] = useState([]);

  const usuariosDisponibles = usuarios.filter(u => u.rol === 'user');

  const agregarIntegrante = (username) => {
    if (!integrantes.includes(username)) {
      setIntegrantes([...integrantes, username]);
    }
  };

  const eliminarIntegrante = (index) => {
    const nuevos = [...integrantes];
    nuevos.splice(index, 1);
    setIntegrantes(nuevos);
  };

  const finalizarProyecto = () => {
    const nuevoProyecto = {
      nombre,
      descripcion,
      fechaInicio,
      fechaFin,
      integrantes
    };
    agregarProyecto(nuevoProyecto);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.iconText}>🏠</Text>
        </TouchableOpacity>
        <Text style={styles.title}>COLABORA +</Text>
      </View>

      {/* Lista de usuarios disponibles */}
      <Text style={styles.sectionTitle}>Seleccionar usuarios disponibles</Text>
      <View style={styles.listContainer}>
        {usuariosDisponibles.map((user, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{user.username}</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => agregarIntegrante(user.username)}
            >
              <Text style={styles.addButtonText}>Seleccionar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Lista de Integrantes Agregados */}
      <Text style={styles.sectionTitle}>Lista de integrantes agregados</Text>
      <View style={styles.listContainer}>
        {integrantes.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{item}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => eliminarIntegrante(index)}
            >
              <Text style={styles.deleteButtonText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Botón Finalizar */}
      <TouchableOpacity style={styles.finishButton} onPress={finalizarProyecto}>
        <Text style={styles.finishButtonText}>FINALIZAR!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  homeButton: { backgroundColor: '#D3D3D3', padding: 10, borderRadius: 8, marginRight: 10 },
  iconText: { fontSize: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  listContainer: {
    backgroundColor: '#D3D3D3',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#B0F7B0',
    padding: 10,
    borderRadius: 8,
  },
  addButtonText: { fontWeight: 'bold' },
  deleteButton: {
    backgroundColor: '#f66',
    padding: 6,
    borderRadius: 6,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  finishButton: {
    backgroundColor: '#00FF00',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  finishButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AgregarIntegrantesScreen;
