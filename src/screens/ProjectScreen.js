import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Importar íconos

const ProjectScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>COLABORA +</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nombre del proyecto</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa el nombre del proyecto"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Descripción</Text>
                <TextInput
                    style={[styles.input, styles.multilineInput]}
                    placeholder="Ingresa la descripción del proyecto"
                    multiline
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Inicio</Text>
                <View style={styles.dateInputContainer}>
                    <TextInput
                        style={styles.dateInput}
                        placeholder="Fecha de inicio"
                    />
                    <MaterialIcons name="calendar-today" size={24} color="#007bff" />
                </View>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Finalización</Text>
                <View style={styles.dateInputContainer}>
                    <TextInput
                        style={styles.dateInput}
                        placeholder="Fecha de finalización"
                    />
                    <MaterialIcons name="calendar-today" size={24} color="#007bff" />
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.nextButton}>
                    <Text style={styles.nextButtonText}>Siguiente</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        backgroundColor: '#fff', 
        marginLeft: 8, 
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        marginLeft: 8,
        marginRight: 8, 
    },
    multilineInput: {
        height: 100,
        textAlignVertical: 'top', 
    },
    dateInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginLeft: 8, 
        marginRight: 8, 
    },
    dateInput: {
        flex: 1,
        fontSize: 16,
    },
    buttonContainer: {
        alignItems: 'flex-end', 
        marginTop: 20,
        marginRight: 8, 
    },
    nextButton: {
        backgroundColor: '#28a745', 
        padding: 12,
        borderRadius: 8,
        width: 120,
        alignItems: 'center',
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProjectScreen;