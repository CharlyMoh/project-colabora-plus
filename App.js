import {View, Text, StyleSheet} from 'react-native';
import ProjectDetail from './src/screens/ProjectDetails';
import TaskDetailAdmin from './src/screens/TaskScreenAdmin';
import CalendarScreen from './src/screens/CalendarMenu';
import ProjectScreen from './src/screens/ProjectScreen';



const App = () => {
  
  return(
    //Aqui se llaman todos los componentes a mostrar
    <CalendarScreen/>
  )
}

export default App;