import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PostCreationCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Icon name="location-outline" size={20} color="#000" />
                <TextInput style={styles.input} placeholder="From" />
                <Icon name="swap-vertical-outline" size={20} color="#000" />
            </View>
            <View style={styles.inputContainer}>
                <Icon name="location-outline" size={20} color="#000" />
                <TextInput style={styles.input} placeholder="To" />
            </View>
            <View style={styles.rowContainer}>
                <View style={styles.rowItem}>
                    <Icon name="calendar-outline" size={20} color="#000" />
                    <Text style={styles.text}>Today</Text>
                </View>
                <View style={styles.rowItem}>
                    <Icon name="person-outline" size={20} color="#000" />
                    <Text style={styles.text}>3</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 4,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 5,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        padding: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    rowItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 5,
    },
});

export default PostCreationCard;
