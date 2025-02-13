import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';

const ProjectDetail = () => {
    const members = [
        { id: '1', name: 'Integrante 1', progress: 'Progreso' },
        { id: '2', name: 'Integrante 2', progress: 'Progreso' },
        { id: '3', name: 'Integrante 3', progress: 'Progreso' },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.memberContainer}>
            <Text style={styles.memberName}>{item.name}</Text>
            <Text style={styles.memberProgress}>{item.progress}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>COLABORA + Logo</Text>

            {/* Recuadro para la descripción del proyecto */}
            <View style={styles.sectionContainer}>
                <Text style={styles.subtitle}>Descripción del proyecto</Text>
                <Text style={styles.text}>Nombre proyecto</Text>
                <Text style={styles.text}>Fecha de inicio:</Text>
                <Text style={styles.text}>Fecha final:</Text>
            </View>

            {/* Recuadro para la tabla de integrantes */}
            <View style={styles.sectionContainer}>
                <Text style={styles.subtitle}>Integrantes:</Text>
                <FlatList
                    data={members}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginBlockStart: 20,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    text: {
        fontSize: 16,
        marginBottom: 8,
    },
    sectionContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        marginLeft:16,
        marginRight: 16,
        backgroundColor: '#D9D9D9'
    },
    memberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e0f7fa',
        padding: 10,
        borderRadius: 8,
        marginBottom: 8,
    },
    memberName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    memberProgress: {
        fontSize: 16,
        color: '#00796b', 
    },
});

export default ProjectDetail;