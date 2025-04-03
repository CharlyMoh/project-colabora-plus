import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext'; // ✅ Asegúrate de importar esto correctamente

const LoginScreen = () => {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const { setRol } = useAuth(); // ✅ ya debería funcionar

  const handleLogin = () => {
    if (usuario === 'admin' && contrasena === '123') {
      setRol('admin');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } else if (usuario === 'user' && contrasena === '123') {
      setRol('user');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }], // 👈 Mismo Home para user y admin
      });
    } else {
      Alert.alert('Error', 'Credenciales incorrectas');
    }
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Iniciar Sesión</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          value={usuario}
          onChangeText={setUsuario}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={contrasena}
          onChangeText={setContrasena}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    width: '90%',
    maxWidth: 400,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#28a745',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default LoginScreen;
