import React from 'react';
<<<<<<< HEAD
//import { View, Text, StyleSheet } from 'react-native';
import ProyectosScreen from './src/screens/HomeScreen';
import TareasScreen from './src/screens/TaskScreenUser';
import AgregarIntegrantesScreen from './src/screens/ProjectScreen2';
import ConfiguracionScreen from './src/screens/Settings'
const App = () => {
  return (
    //<ProyectosScreen />
    //<TareasScreen/>
    <AgregarIntegrantesScreen />
    
    //<ConfiguracionScreen/>
=======
import { View, Text, StyleSheet } from 'react-native';
import ProjectDetail from './src/screens/ProjectDetails';
import TaskDetailAdmin from './src/screens/TaskScreenAdmin';
import CalendarScreen from './src/screens/CalendarMenu';
import ProjectScreen from './src/screens/ProjectScreen';
import ProyectosScreen from './src/screens/HomeScreen';
import TareasScreen from './src/screens/TaskScreenUser';
import AgregarIntegrantesScreen from './src/screens/ProjectScreen2';
import ConfiguracionScreen from './src/screens/Settings';

const App = () => {
  return (
    <View>
      {/* Puedes renderizar varios componentes, uno por uno */}
      <CalendarScreen />
      {/* Otros componentes que quieras incluir */}
      {/* <ProyectosScreen /> */}
      {/* <TareasScreen /> */}
      {/* <AgregarIntegrantesScreen /> */}
    </View>
>>>>>>> 8ba1bb2dbeccf182cc21873fce4065a48d770f12
  );
};

export default App;
