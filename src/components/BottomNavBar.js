import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const BottomNavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => navigation.navigate('CalendarEvents')}>
  <MaterialIcons name="calendar-today" size={30} color="black" />
</TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <MaterialIcons name="home" size={30} color="black" />
      </TouchableOpacity>

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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  }
});

export default BottomNavBar;
