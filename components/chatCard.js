import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from "../utils/colors";
import Icon from 'react-native-vector-icons/Entypo';

const ChatCard = ({ name, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Text style={styles.title}>{name}</Text>
                <Icon name="chat" size={24} color={colors.secondary} />
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
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.secondary
    },
    body: {
        fontSize: 16,
        color: colors.tertiary,
    },
});

export default ChatCard;
