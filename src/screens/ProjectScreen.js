import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProjectScreen = () => {
  const navigation = useNavigation();

  const handleGoHome = () => {
    navigation.navigate('Home');
  };

  const [fechaInicio, setFechaInicio] = React.useState('');
  const [fechaFin, setFechaFin] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoHome} style={styles.homeButton}>
          <Text style={styles.iconText}>🏠</Text>
        </TouchableOpacity>
        <Text style={styles.title}>COLABORA +</Text>
      </View>

      {/* Nombre del proyecto */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre del proyecto</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa el nombre del proyecto"
        />
      </View>

      {/* Descripción */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Ingresa la descripción del proyecto"
          multiline
        />
      </View>

      {/* Fecha de inicio */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Inicio</Text>
        <View style={styles.dateInputContainer}>
          <TextInput
            style={styles.dateInput}
            placeholder="DD/MM/AAAA"
            value={fechaInicio}
            onChangeText={setFechaInicio}
          />
          <MaterialIcons name="calendar-today" size={24} color="#007bff" />
        </View>
      </View>

      {/* Fecha de finalización */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Finalización</Text>
        <View style={styles.dateInputContainer}>
          <TextInput
            style={styles.dateInput}
            placeholder="DD/MM/AAAA"
            value={fechaFin}
            onChangeText={setFechaFin}
          />
          <MaterialIcons name="calendar-today" size={24} color="#007bff" />
        </View>
      </View>

      {/* Botón siguiente */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('ProjectScreen2')}
        >
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  inputContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    backgroundColor: '#fff',
    marginLeft: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginLeft: 8,
    marginRight: 8
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top'
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginLeft: 8,
    marginRight: 8
  },
  dateInput: {
    flex: 1,
    fontSize: 16
  },
  buttonContainer: {
    alignItems: 'flex-end',
    marginTop: 20,
    marginRight: 8
  },
  nextButton: {
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 8,
    width: 120,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  homeButton: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    borderRadius: 8,
    marginRight: 10
  },
  iconText: {
    fontSize: 20
  }
});

export default ProjectScreen;
