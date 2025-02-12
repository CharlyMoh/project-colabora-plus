import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const CalendarScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>COLABORA+</Text>
                <Text style={styles.logo}>LOGO</Text>
            </View>

            <View style={styles.messageContainer}>
                <Text style={styles.messageText}>NO HAY PENDIENTES</Text>
            </View>

            
            <View style={styles.calendarPlaceholder}>
                <Text style={styles.placeholderText}>Calendario aquí (API de Google)</Text>
            </View>
        </SafeAreaView>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    logo: {
        fontSize: 18,
        color: '#888',
        marginTop: 8,
    },
    messageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#555',
    },
    calendarPlaceholder: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        width: '100%',
        marginBottom: 20,
    },
    placeholderText: {
        fontSize: 16,
        color: '#888',
    },
});

export default CalendarScreen;