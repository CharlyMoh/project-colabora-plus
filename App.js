// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// // Importar todas las pantallas
// import HomeScreen from './src/screens/HomeScreen';
// import SettingsScreen from './src/screens/Settings';
// import CalendarMenu from './src/screens/CalendarMenu';
// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Settings" component={SettingsScreen} />
//         <Stack.Screen name="CalendarMenu" component={CalendarMenu} />
        
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


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

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="CalendarMenu" component={CalendarMenu} />
        <Stack.Screen name="ProjectScreen" component={ProjectScreen} />
        <Stack.Screen name="ProjectScreen2" component={AgregarIntegrantesScreen} />
        <Stack.Screen name="TaskScreenUser" component={TaskScreenUser} />
        <Stack.Screen name="TaskScreenAdmin" component={TaskScreenAdmin} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
