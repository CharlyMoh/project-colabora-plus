import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useProyectos } from '../context/ProyectoContext';
import { useAuth } from '../context/AuthContext';
import { eliminarProyecto } from '../services/projectService';

const ProjectDetail = () => {
  const navigation = useNavigation();
  const { proyectoSeleccionado, setProyectos, setProyectoSeleccionado } = useProyectos(); // ✅ Agregado setProyectoSeleccionado
  const { rol } = useAuth();
  const [tareas, setTareas] = useState([]);

  const [nameProject, setNameProject] = useState(proyectoSeleccionado?.nameProject || '');
  const [description, setDescription] = useState(proyectoSeleccionado?.description || '');
  const [endDate, setEndDate] = useState(proyectoSeleccionado?.endDate?.slice(0, 10) || '');

  useEffect(() => {
    if (proyectoSeleccionado?._id) {
      fetch(`http://localhost:3000/api/tasks/byProject/${proyectoSeleccionado._id}`)
        .then(res => res.json())
        .then(data => setTareas(data))
        .catch(err => console.error('Error cargando tareas:', err));
    }
  }, [proyectoSeleccionado]);

  const handleUpdate = () => {
    fetch(`http://localhost:3000/api/projects/${proyectoSeleccionado._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nameProject,
        description,
        endDate
      })
    })
      .then(res => res.json())
      .then(data => {
        Alert.alert("Proyecto actualizado");
        navigation.navigate("Home"); // ✅ CORREGIDO (era "HomeScreen")
      })
      .catch(err => {
        Alert.alert("Error al actualizar", err.message);
      });
  };

  const renderIntegrante = ({ item }) => (
    <View style={styles.memberContainer}>
      <Text style={styles.memberName}>{item.name} ({item.email})</Text>
    </View>
  );

  const renderTarea = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskTitle}>{item.tittle || item.nombre}</Text>
      <Text style={styles.taskDates}>
        Fecha límite: {item.dueDate ? new Date(item.dueDate).toLocaleDateString() : item.fechaFin}
      </Text>
      <Text style={styles.estado}>Estado: {item.state || 'Pendiente'}</Text>
      <Text>
        Asignado a: {item.progreso ? item.progreso.map(p => p.usuario?.name).join(', ') : '—'}
      </Text>
    </View>
  );

  const tareasCombinadas = [
    ...(proyectoSeleccionado?.tareas || []),
    ...tareas
  ];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")} // ✅ CORREGIDO
        style={styles.homeButton}
      >
        <Text style={styles.iconText}>🏠</Text>
      </TouchableOpacity>

      <Text style={styles.title}>COLABORA + Logo</Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.sectionContainer}>
          <Text style={styles.subtitle}>Editar proyecto</Text>

          <Text style={styles.label}>Nombre:</Text>
          <TextInput style={styles.input} value={nameProject} onChangeText={setNameProject} />

          <Text style={styles.label}>Descripción:</Text>
          <TextInput style={styles.input} value={description} onChangeText={setDescription} />

          <Text style={styles.label}>Fecha final:</Text>
          <TextInput style={styles.input} value={endDate} onChangeText={setEndDate} placeholder="AAAA-MM-DD" />

          <TouchableOpacity onPress={handleUpdate} style={styles.updateButton}>
            <Text style={styles.buttonText}>Actualizar Información</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.subtitle}>Integrantes:</Text>
          <FlatList
            data={proyectoSeleccionado?.teammates || []}
            renderItem={renderIntegrante}
            keyExtractor={(item, index) => item._id || index.toString()}
          />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.subtitle}>Tareas:</Text>
          <FlatList
            data={tareasCombinadas}
            renderItem={renderTarea}
            keyExtractor={(item, index) => item._id || index.toString()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  subtitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  label: { fontSize: 16, marginTop: 8 },
  input: {
    backgroundColor: '#fff', borderColor: '#ccc', borderWidth: 1,
    borderRadius: 6, padding: 8, marginBottom: 8
  },
  sectionContainer: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 16, marginBottom: 16, backgroundColor: '#D9D9D9'
  },
  memberContainer: {
    backgroundColor: '#e0f7fa', padding: 10,
    borderRadius: 8, marginBottom: 8,
  },
  memberName: { fontSize: 16 },
  taskContainer: {
    backgroundColor: '#f0f8ff', padding: 10,
    borderRadius: 8, marginBottom: 12
  },
  taskTitle: { fontWeight: 'bold', fontSize: 16 },
  taskDates: { fontSize: 12, color: '#444', marginTop: 4 },
  estado: { fontStyle: 'italic', color: '#555', marginTop: 4 },
  homeButton: {
    position: 'absolute', top: 10, left: 10,
    backgroundColor: '#D3D3D3', padding: 10,
    borderRadius: 8, zIndex: 10
  },
  iconText: { fontSize: 20 },
  updateButton: {
    backgroundColor: '#4CAF50', padding: 10, borderRadius: 6,
    marginTop: 10
  },
  buttonText: {
    color: '#fff', fontWeight: 'bold', textAlign: 'center'
  }
});

export default ProjectDetail;
