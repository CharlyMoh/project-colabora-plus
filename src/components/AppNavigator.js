import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Importar todas las pantallas
import HomeScreen from './screens/HomeScreen';
import ProjectDetail from './screens/ProjectDetail';
import ProjectScreen from './screens/ProjectScreen';
import AgregarIntegrantesScreen from './screens/AgregarIntegrantesScreen';
import CalendarScreen from './screens/CalendarScreen';
import ConfiguracionScreen from './screens/ConfiguracionScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} /> {/* <- Aquí el cambio */}
        <Stack.Screen name="UserHome" component={UserHome} /> 
        <Stack.Screen name="ProjectDetail" component={ProjectDetail} />
        <Stack.Screen name="ProjectScreen" component={ProjectScreen} />
        <Stack.Screen name="AgregarIntegrantesScreen" component={AgregarIntegrantesScreen} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        <Stack.Screen name="ConfiguracionScreen" component={ConfiguracionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
