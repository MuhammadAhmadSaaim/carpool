import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomSolidButton = ({ backgroundColor, text, onPress, textColor }) => {
    return (
        <TouchableOpacity
            style={[styles.createButton, { backgroundColor: backgroundColor }]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    createButton: {
        padding: 8,
        height: 55,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CustomSolidButton;
