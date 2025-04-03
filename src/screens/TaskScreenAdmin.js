import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useProyectos } from '../context/ProyectoContext';

const TaskScreenAdmin = () => {
  const navigation = useNavigation();
  const { agregarTareaAProyecto, proyectoSeleccionado, proyectos } = useProyectos();

  const [nombreTarea, setNombreTarea] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const handleFinalizar = () => {
    if (proyectoSeleccionado === null || proyectoSeleccionado === undefined) {
      alert('No hay proyecto seleccionado');
      return;
    }

    const integrantes = proyectos[proyectoSeleccionado].integrantes || [];

    const nuevaTarea = {
      nombre: nombreTarea,
      descripcion,
      fechaInicio,
      fechaFin,
      progreso: integrantes.map(usuario => ({ usuario, estado: 'Pendiente' }))
    };

    agregarTareaAProyecto(proyectoSeleccionado, nuevaTarea);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
          <Text style={styles.iconText}>🏠</Text>
        </TouchableOpacity>
        <Text style={styles.header}>COLABORA + LOGO</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Nombre de la tarea</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre de la tarea"
          value={nombreTarea}
          onChangeText={setNombreTarea}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={[styles.input, styles.multiline]}
          placeholder="Escribe la descripción de la tarea"
          value={descripcion}
          onChangeText={setDescripcion}
          multiline
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Inicio</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          value={fechaInicio}
          onChangeText={setFechaInicio}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Finalización</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          value={fechaFin}
          onChangeText={setFechaFin}
        />
      </View>

      <TouchableOpacity style={styles.finalizarButton} onPress={handleFinalizar}>
        <Text style={styles.finalizarButtonText}>FINALIZAR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  headerContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  homeButton: { backgroundColor: '#D3D3D3', padding: 10, borderRadius: 8, position: 'absolute', left: 0 },
  iconText: { fontSize: 20 },
  header: { fontSize: 20, fontWeight: 'bold' },
  section: { backgroundColor: '#D3D3D3', padding: 16, borderRadius: 10, marginBottom: 16 },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  input: { backgroundColor: '#fff', padding: 10, borderRadius: 8 },
  multiline: { height: 100, textAlignVertical: 'top' },
  finalizarButton: { backgroundColor: '#28a745', padding: 18, borderRadius: 10, alignItems: 'center' },
  finalizarButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default TaskScreenAdmin;