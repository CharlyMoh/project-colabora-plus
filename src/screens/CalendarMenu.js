import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import HomeButton from '../components/HomeButton';
const CalendarScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header con título y logo */}
            <View style={styles.header}>
                <HomeButton/>
                <Text style={styles.title}>COLABORA+</Text>
                <Text style={styles.logo}>LOGO</Text>
            </View>

            {/* Espacio para el calendario */}
            <View style={styles.calendarPlaceholder}>
                <Text style={styles.placeholderText}>Calendario aquí (API de Google)</Text>
            </View>

            {/* Espacio para "NO HAY PENDIENTES" con fondo gris */}
            <View style={styles.pendingContainer}>
                <Text style={styles.messageText}>NO HAY PENDIENTES</Text>
            </View>
        </SafeAreaView>
    );
};

// Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        marginLeft: 10, // Espacio en el borde izquierdo
        marginRight: 10, // Espacio en el borde derecho
    },
    header: {
        flexDirection:'row',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 10,
        marginTop: 10,
    },
    title: {
        marginLeft: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    logo: {
        fontSize: 18,
        color: '#888',
        marginTop: 8,
    },
    calendarPlaceholder: {
        flex: 2, // Más espacio para el calendario
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 20,
    },
    placeholderText: {
        fontSize: 16,
        color: '#888',
    },
    pendingContainer: {
        flex: 1, // Menos espacio para "NO HAY PENDIENTES"
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9D9D9', // Fondo gris
        borderRadius: 8,
        padding: 16,
    },
    messageText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#555',
    },
});

export default CalendarScreen;