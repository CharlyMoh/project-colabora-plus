import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useProyectos } from '../context/ProyectoContext';
import { useAuth } from '../context/AuthContext';

const ProjectDetail = () => {
  const navigation = useNavigation();
  const { proyectoSeleccionado } = useProyectos();
  const { rol } = useAuth();
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    if (proyectoSeleccionado?._id) {
      fetch(`http://localhost:3000/api/tasks/byProject/${proyectoSeleccionado._id}`)
        .then(res => res.json())
        .then(data => setTareas(data))
        .catch(err => console.error('Error cargando tareas:', err));
    }
  }, [proyectoSeleccionado]);

  const renderIntegrante = ({ item }) => (
    <View style={styles.memberContainer}>
      <Text style={styles.memberName}>{item.name} ({item.email})</Text>
    </View>
  );

  const renderTarea = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskTitle}>{item.tittle}</Text>
      <Text style={styles.taskDates}>Fecha límite: {new Date(item.dueDate).toLocaleDateString()}</Text>
      <Text style={styles.estado}>Estado: {item.state}</Text>
      <Text>Asignado a: {item.assignedUser?.name} ({item.assignedUser?.email})</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(rol === 'admin' ? 'Home' : 'UserHome')}
        style={styles.homeButton}
      >
        <Text style={styles.iconText}>🏠</Text>
      </TouchableOpacity>

      <Text style={styles.title}>COLABORA + Logo</Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.sectionContainer}>
          <Text style={styles.subtitle}>Descripción del proyecto</Text>
          <Text style={styles.text}>Nombre: {proyectoSeleccionado?.nameProject}</Text>
          <Text style={styles.text}>
            Fecha de inicio: {new Date(proyectoSeleccionado?.creationDate).toLocaleDateString()}
          </Text>
          <Text style={styles.text}>
            Fecha final: {new Date(proyectoSeleccionado?.endDate).toLocaleDateString()}
          </Text>
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
            data={tareas}
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
  text: { fontSize: 16, marginBottom: 8 },
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
  iconText: { fontSize: 20 }
});

export default ProjectDetail;
