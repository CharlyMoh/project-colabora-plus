import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useProyectos } from '../context/ProyectoContext';
import { useAuth } from '../context/AuthContext';

const UserHome = () => {
  const navigation = useNavigation();
  const { proyectos } = useProyectos();
  const { rol } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          COLABORA + <Text style={styles.rolText}>{rol?.toUpperCase()}</Text>
        </Text>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>LOGO</Text>
        </View>
      </View>

      <View style={styles.projectsContainer}>
        <Text style={styles.projectsTitle}>PROYECTOS</Text>
        <ScrollView>
          <View style={styles.projectsGrid}>
            {proyectos.map((proyecto, index) => (
              <View key={index} style={styles.projectCard}>
                <Text style={styles.projectName}>{proyecto.nombre}</Text>
                <Text style={styles.projectDetails}>
                  {proyecto.integrantes.length} integrante(s)
                </Text>
                <Text style={styles.projectDetails}>
                  {proyecto.fechaInicio} - {proyecto.fechaFin}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('TaskScreenUser')}>
                  <Text style={styles.iconText}>...</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // copia los estilos de HomeScreen
});

export default UserHome;
