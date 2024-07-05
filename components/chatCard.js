import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from "../utils/colors";

const ChatCard = ({ name, text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.body}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginBottom: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: colors.secondary
    },
    body: {
        fontSize: 16,
        color: colors.tertiary,
    },
});

export default ChatCard;
