import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const BottomNavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navBar}>
      {/* Botón de Calendario */}
      <TouchableOpacity onPress={() => navigation.navigate('CalendarMenu')}>
        <MaterialIcons name="calendar-today" size={30} color="black" />
      </TouchableOpacity>


      {/* Botón de Inicio */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <MaterialIcons name="home" size={30} color="black" />
      </TouchableOpacity>

      {/* Botón de Configuración */}
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <MaterialIcons name="settings" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    paddingVertical: 10,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});

export default BottomNavBar;
