import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const AgregarIntegrantesScreen = () => {
  const [nombre, setNombre] = useState('');
  const [integrantes, setIntegrantes] = useState([]);

  const agregarIntegrante = () => {
    if (nombre.trim() !== '') {
      setIntegrantes([...integrantes, nombre]);
      setNombre('');
    }
  };

  const eliminarIntegrante = (index) => {
    const nuevaLista = integrantes.filter((_, i) => i !== index);
    setIntegrantes(nuevaLista);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.homeButton}>
          <Text style={styles.iconText}>🏠</Text>
        </TouchableOpacity>
        <Text style={styles.title}>COLABORA +</Text>
      </View>

      {/* Agregar Integrantes */}
      <View style={styles.inputContainer}>
        <Text style={styles.sectionTitle}>Agregar integrantes</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre del integrante"
          value={nombre}
          onChangeText={setNombre}
        />
        <TouchableOpacity style={styles.addButton} onPress={agregarIntegrante}>
          <Text style={styles.addButtonText}>Agregar integrante</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de Integrantes */}
      <Text style={styles.sectionTitle}>Lista de integrantes agregados</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={integrantes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.listItem}>
              <Text style={styles.integranteText}>{item}</Text>
              <TouchableOpacity style={styles.deleteButton} onPress={() => eliminarIntegrante(index)}>
                <Text style={styles.deleteButtonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* Botón Finalizar */}
      <TouchableOpacity style={styles.finalButton}>
        <Text style={styles.finalButtonText}>FINALIZAR!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  homeButton: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    borderRadius: 8,
    marginRight: 16,
  },
  iconText: {
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  inputContainer: {
    backgroundColor: '#D3D3D3',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#A9A9A9',
    borderRadius: 20,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#B9FBC0',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContainer: {
    backgroundColor: '#D3D3D3',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  integranteText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#F56565',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  finalButton: {
    backgroundColor: '#00FF00',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  finalButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default AgregarIntegrantesScreen;
