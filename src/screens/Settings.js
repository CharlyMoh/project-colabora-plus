import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import HomeButton from '../components/HomeButton';

const ConfiguracionScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}> 
      <HomeButton />
        <Text style={styles.title}>COLABORA +</Text>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>LOGO</Text>
        </View>
      </View>

      {/* Notificaciones */}
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>Notificaciones</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={'#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
        />
      </View>

      {/* Botón Cerrar Sesión */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  homeButton: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    borderRadius: 8,
  },
  iconText: {
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoContainer: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    borderRadius: 20,
  },
  logoText: {
    fontSize: 12,
  },
  notificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  notificationText: {
    fontSize: 18,
  },
  logoutButton: {
    backgroundColor: '#F56565',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default ConfiguracionScreen;
