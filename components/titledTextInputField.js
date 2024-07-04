import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import colors from "../utils/colors";

const TitleInputField = ({ title, titleColor, placeholder, image }) => {
    return (
        <View>
            <Text style={[styles.inputTitle, { color: titleColor }]}>{title}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder={placeholder}
                    secureTextEntry
                />
                <Image style={styles.socialButtonImage} source={image} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10,
    },
    inputText: {
        flex: 1,
        backgroundColor: colors.background,
        color: colors.tertiary,
    },
    inputContainer: {
        backgroundColor: colors.background,
        height: 55,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 16,
        borderWidth: 1,
    },
    socialButtonImage: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
});

export default TitleInputField;
