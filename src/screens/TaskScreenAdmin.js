import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Importar íconos

const TaskDetailAdmin = () => {
    const members = [
        { id: 1, name: 'Integrante 1' },
        { id: 2, name: 'Integrante 2' },
        { id: 3, name: 'Integrante 3' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            {/* Título */}
            <Text style={styles.title}>COLABORA + LOGO</Text>

            {/* Nombre de la tarea */}
            <View style={styles.box}>
                <Text style={styles.subtitle}>Nombre de la tarea</Text>
            </View>

            {/* Descripción */}
            <View style={styles.box}>
                <Text style={styles.subtitle}>Descripción</Text>
            </View>

            {/* Lista de integrantes */}
            <View style={styles.box}>
                <Text style={styles.subtitle}>Lista de integrantes</Text>
                {members.map((member) => (
                    <View key={member.id} style={styles.memberRow}>
                        <Text style={styles.memberName}>{member.name}</Text>
                        <TouchableOpacity style={styles.assignButton}>
                            <Text style={styles.buttonText}>Asignar</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

            {/* Inicio */}
            <View style={styles.box}>
                <Text style={styles.subtitle}>Inicio</Text>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>Fecha de inicio</Text>
                    <MaterialIcons name="calendar-today" size={24} color="#007bff" />
                </View>
            </View>

            {/* Finalización */}
            <View style={styles.box}>
                <Text style={styles.subtitle}>Finalización</Text>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>Fecha de finalización</Text>
                    <MaterialIcons name="calendar-today" size={24} color="#007bff" />
                </View>
            </View>

            {/* Botón FINALIZAR */}
            <TouchableOpacity style={styles.finishButton}>
                <Text style={styles.finishButtonText}>FINALIZAR</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

// Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        marginLeft: 10,
        marginRight: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    box: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        backgroundColor: '#D9D9D9',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    memberRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    memberName: {
        fontSize: 16,
    },
    assignButton: {
        backgroundColor: '#007bff',
        padding: 8,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dateText: {
        fontSize: 16,
    },
    finishButton: {
        backgroundColor: '#28a745',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    finishButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default TaskDetailAdmin;