import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskDetailAdmin = () => {
    const members = [
        { id: 1, name: 'Member 1' },
        { id: 2, name: 'Member 2' },
        { id: 3, name: 'Member 3' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>COLABORA + LOGO</Text>
            
            <View style={styles.box}>
                <Text style={styles.subtitle}>Task Name</Text>
            </View>

            
            <View style={styles.box}>
                <Text style={styles.subtitle}>Description</Text>
            </View>

            
            <View style={styles.box}>
                <Text style={styles.subtitle}>List of Members</Text>
                {members.map((member) => (
                    <View key={member.id} style={styles.memberRow}>
                        <Text style={styles.memberName}>{member.name}</Text>
                        <TouchableOpacity style={styles.assignButton}>
                            <Text style={styles.buttonText}>Assign</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

            
            <View style={styles.box}>
                <Text style={styles.subtitle}>Start Date</Text>
                <Text style={styles.subtitle}>End Date</Text>
            </View>

            
            <TouchableOpacity style={styles.finishButton}>
                <Text style={styles.finishButtonText}>FINISH</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
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
    finishButton: {
        backgroundColor: '#28a745', 
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