import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useProyectos } from '../context/ProyectoContext';
import { useAuth } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

const TaskStatusScreen = () => {
  const { proyectos, setProyectos, proyectoSeleccionado } = useProyectos();
  const { usuarioActual } = useAuth();
  const navigation = useNavigation();

  const proyecto = proyectos[proyectoSeleccionado];

  const cambiarEstado = (indexTarea, nuevoEstado) => {
    const nuevosProyectos = [...proyectos];
    const progresos = nuevosProyectos[proyectoSeleccionado].tareas[indexTarea].progreso;

    nuevosProyectos[proyectoSeleccionado].tareas[indexTarea].progreso = progresos.map(p =>
      p.usuario === usuarioActual ? { ...p, estado: nuevoEstado } : p
    );

    setProyectos(nuevosProyectos);
  };

  const renderTarea = ({ item, index }) => {
    const progresoUsuario = item.progreso.find(p => p.usuario === usuarioActual);

    return (
      <View style={styles.tareaContainer}>
        <Text style={styles.titulo}>{item.nombre}</Text>
        <Text>{item.descripcion}</Text>
        <Text style={styles.fecha}>Inicio: {item.fechaInicio} | Fin: {item.fechaFin}</Text>

        <Text style={styles.estadoActual}>Estado actual: {progresoUsuario?.estado}</Text>

        <View style={styles.botones}>
          <TouchableOpacity style={styles.boton} onPress={() => cambiarEstado(index, 'Pendiente')}>
            <Text>Pendiente</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => cambiarEstado(index, 'En progreso')}>
            <Text>En progreso</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => cambiarEstado(index, 'Completado')}>
            <Text>Completado</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  if (!proyecto) {
    return (
      <View style={styles.container}>
        <Text>No hay proyecto seleccionado</Text>
        <TouchableOpacity style={styles.volver} onPress={() => navigation.goBack()}>
          <Text style={styles.volverText}>Volver</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const tareasDelUsuario = proyecto.tareas.filter(t =>
    t.progreso.some(p => p.usuario === usuarioActual)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cambiar Estado de Tareas</Text>
      <FlatList
        data={tareasDelUsuario}
        renderItem={renderTarea}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
      <TouchableOpacity style={styles.volver} onPress={() => navigation.goBack()}>
        <Text style={styles.volverText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: {
    fontSize: 20, fontWeight: 'bold', marginBottom: 16, textAlign: 'center'
  },
  tareaContainer: {
    backgroundColor: '#e6f2ff', padding: 12, borderRadius: 10,
    marginBottom: 16
  },
  titulo: { fontWeight: 'bold', fontSize: 16, marginBottom: 4 },
  fecha: { fontSize: 12, color: '#555', marginBottom: 4 },
  estadoActual: { fontStyle: 'italic', marginBottom: 8 },
  botones: { flexDirection: 'row', justifyContent: 'space-around' },
  boton: {
    backgroundColor: '#d9d9d9', padding: 8,
    borderRadius: 6, minWidth: 90, alignItems: 'center'
  },
  volver: {
    marginTop: 20,
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 10,
    alignSelf: 'center',
    minWidth: 100,
    alignItems: 'center'
  },
  volverText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default TaskStatusScreen;
