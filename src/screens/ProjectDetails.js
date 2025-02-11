import { SafeAreaView, View, Text, FlatList} from "react-native";
import { StyleSheet } from "react-native";


const ProjectDetail = () => {
    //Visual components of project screen
    return (
        <View style={styles.container}> 
            <Text style= {styles.tittle}>Colabora + logo</Text>
            <Text style= {styles.subtittle}>Descripcion del proyecto</Text>
            <Text style= {styles.text}>Descripcion del proyecto</Text>
            <Text style= {styles.text}>Fecha de inicio:</Text>
            <Text style= {styles.text}>Fecha final:</Text>
            <Text style= {styles.subtittle}>Integrantes:</Text>
                <View style={styles.table} > 
                    <View style= {styles.header}>
                    <Text style={styles.headerCell}> Programa</Text>
                    <Text style={styles.headerCell}> Progreso</Text>
                    <Text> Programa</Text>
                    </View>
                </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16, 
        backgroundColor: '#fff'
    },
    tittle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16
    },
    subtittle: {
        fontSize: 24,
        fontWeight: '16',
        marginTop: 16,
        marginBottom: 8
    },
    text: {
        fontSize: 16,
        marginBottom: 8
    },
    table:{
        marginTop: 16
    },
    header: {
        flexDirection: 'row',
        borderBottomWidth: '#000',
        paddingBottom : 8
    },
    headerCell:{
        flex:1,
        fontWeight: 'bold',
        fontSize: 16
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 8
    },
    cell: {
        flex:1,
        fontSize:16
    }
})

export default ProjectDetail;
