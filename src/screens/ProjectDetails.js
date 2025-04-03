import React from 'react';
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
  const { proyectos, proyectoSeleccionado } = useProyectos();
  const { rol } = useAuth();

  const proyecto = proyectos[proyectoSeleccionado];

  const renderIntegrante = ({ item }) => (
    <View style={styles.memberContainer}>
      <Text style={styles.memberName}>{item}</Text>
      <Text style={styles.memberProgress}>Progreso</Text>
    </View>
  );

  const renderTarea = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskTitle}>{item.nombre}</Text>
      <Text>{item.descripcion}</Text>
      <Text style={styles.taskDates}>Inicio: {item.fechaInicio} | Fin: {item.fechaFin}</Text>

      {/* Mostrar progreso por integrante */}
      <Text style={styles.progresoTitle}>Progreso por integrante:</Text>
      {item.progreso.map((p, i) => (
        <View key={i} style={styles.progresoRow}>
          <Text>{p.usuario}</Text>
          <Text style={styles.estado}>{p.estado}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Botón Home */}
      <TouchableOpacity
        onPress={() => navigation.navigate(rol === 'admin' ? 'Home' : 'UserHome')}
        style={styles.homeButton}
      >
        <Text style={styles.iconText}>🏠</Text>
      </TouchableOpacity>

      <Text style={styles.title}>COLABORA + Logo</Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Descripción del proyecto */}
        <View style={styles.sectionContainer}>
          <Text style={styles.subtitle}>Descripción del proyecto</Text>
          <Text style={styles.text}>Nombre: {proyecto?.nombre}</Text>
          <Text style={styles.text}>Fecha de inicio: {proyecto?.fechaInicio}</Text>
          <Text style={styles.text}>Fecha final: {proyecto?.fechaFin}</Text>
        </View>

        {/* Lista de integrantes */}
        <View style={styles.sectionContainer}>
          <Text style={styles.subtitle}>Integrantes:</Text>
          <FlatList
            data={proyecto?.integrantes || []}
            renderItem={renderIntegrante}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        {/* Lista de tareas */}
        <View style={styles.sectionContainer}>
          <Text style={styles.subtitle}>Tareas:</Text>
          <FlatList
            data={proyecto?.tareas || []}
            renderItem={renderTarea}
            keyExtractor={(item, index) => index.toString()}
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
    flexDirection: 'row', justifyContent: 'space-between',
    backgroundColor: '#e0f7fa', padding: 10,
    borderRadius: 8, marginBottom: 8,
  },
  memberName: { fontSize: 16, fontWeight: 'bold' },
  memberProgress: { fontSize: 16, color: '#00796b' },
  taskContainer: {
    backgroundColor: '#f0f8ff', padding: 10,
    borderRadius: 8, marginBottom: 12
  },
  taskTitle: { fontWeight: 'bold', fontSize: 16 },
  taskDates: { fontSize: 12, color: '#444', marginTop: 4 },
  progresoTitle: {
    fontWeight: 'bold', marginTop: 8, marginBottom: 4
  },
  progresoRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    paddingVertical: 2
  },
  estado: { fontStyle: 'italic', color: '#555' },
  homeButton: {
    position: 'absolute', top: 10, left: 10,
    backgroundColor: '#D3D3D3', padding: 10,
    borderRadius: 8, zIndex: 10
  },
  iconText: { fontSize: 20 }
});

export default ProjectDetail;
