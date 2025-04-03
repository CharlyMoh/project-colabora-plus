import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AgregarIntegrantesScreen from './src/screens/ProjectScreen2';
import TaskScreenUser from './src/screens/TaskScreenUser';
import TaskScreenAdmin from './src/screens/TaskScreenAdmin';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/Settings';
import CalendarMenu from './src/screens/CalendarMenu';
import ProjectScreen from './src/screens/ProjectScreen';
import { ProyectoProvider } from './src/context/ProyectoContext'; // Asegúrate que esta línea esté
import LoginScreen from './src/screens/LoginScreen';
import { AuthProvider } from './src/context/AuthContext'; // <== nuevo
import UserHome from './src/screens/UserHome'; // Asegúrate de tener esta pantalla

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
    <ProyectoProvider> {/* <- AQUI ENVOLVEMOS TODO */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="CalendarMenu" component={CalendarMenu} />
          <Stack.Screen name="ProjectScreen" component={ProjectScreen} />
          <Stack.Screen name="ProjectScreen2" component={AgregarIntegrantesScreen} />
          <Stack.Screen name="TaskScreenUser" component={TaskScreenUser} />
          <Stack.Screen name="TaskScreenAdmin" component={TaskScreenAdmin} />
          <Stack.Screen name="UserHome" component={UserHome} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProyectoProvider>
    </AuthProvider>
  );
};

export default App;
