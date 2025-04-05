import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert ,Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';

const ProjectScreen = () => {
  const navigation = useNavigation();
  const { usuarioActual } = useAuth();

  const [usuarios, setUsuarios] = useState([]);
  const [nombreProyecto, setNombreProyecto] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [integrantesSeleccionados, setIntegrantesSeleccionados] = useState([]);

  useEffect(() => {
    fetch('https://backend-colabora-plus.onrender.com/api/users/all')
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(err => console.error("Error cargando usuarios:", err));
  }, []);

  const toggleUsuario = (id) => {
    setIntegrantesSeleccionados(prev =>
      prev.includes(id) ? prev.filter(uid => uid !== id) : [...prev, id]
    );
  };

  const handleCrearProyecto = async () => {
    if (isNaN(Date.parse(fechaFin))) {
      Alert.alert('Fecha inválida', 'Por favor ingresa una fecha válida en formato YYYY-MM-DD');
      return;
    }
  
    try {
      const response = await fetch('https://backend-colabora-plus.onrender.com/api/projects/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nameProject: nombreProyecto,
          description: descripcion,
          userInCharge: usuarioActual.name,
          teammates: [...integrantesSeleccionados],
          state: 'Activo',
          endDate: fechaFin
        })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        if (Platform.OS === 'web') {
          alert('Proyecto creado exitosamente');
          navigation.navigate('Home'); // Redirección directa en web
        } else {
          Alert.alert('Éxito', 'Proyecto creado exitosamente', [
            {
              text: 'Aceptar',
              onPress: () => navigation.navigate('Home')
            }
          ]);
        }
      } else {
        Alert.alert('Error', data.error || 'Error al crear el proyecto');
      }
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
      alert('Error de conexión con el servidor');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nuevo Proyecto</Text>
      <TextInput style={styles.input} placeholder="Nombre del proyecto" value={nombreProyecto} onChangeText={setNombreProyecto} />
      <TextInput style={styles.input} placeholder="Descripción" value={descripcion} onChangeText={setDescripcion} />
      <TextInput style={styles.input} placeholder="Fecha fin (YYYY-MM-DD)" value={fechaFin} onChangeText={setFechaFin} />

      <Text style={styles.subtitle}>Selecciona integrantes:</Text>
      {usuarios.map(usuario => (
        <TouchableOpacity
          key={usuario._id}
          style={[styles.userItem, integrantesSeleccionados.includes(usuario._id) && styles.selectedUser]}
          onPress={() => toggleUsuario(usuario._id)}
        >
          <Text>{usuario.name} ({usuario.email})</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.button} onPress={handleCrearProyecto}>
        <Text style={styles.buttonText}>Crear Proyecto</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  subtitle: { fontSize: 16, marginVertical: 10 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 12, marginBottom: 10
  },
  userItem: {
    padding: 10, borderWidth: 1, borderColor: '#ccc',
    borderRadius: 8, marginBottom: 8
  },
  selectedUser: {
    backgroundColor: '#cce5ff', borderColor: '#3399ff'
  },
  button: {
    backgroundColor: '#28a745', padding: 14,
    borderRadius: 8, alignItems: 'center', marginTop: 20
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});

export default ProjectScreen;
