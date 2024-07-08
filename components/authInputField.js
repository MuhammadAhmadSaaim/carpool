import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import colors from "../utils/colors";

const AuthInputField = ({
    title,
    titleColor = colors.primary,
    placeholder,
    image,
    secureTextEntry,
    value,
    onChangeText,
    onBlur,
    error
}) => {
    return (
        <View>
            <Text style={[styles.inputTitle, { color: titleColor }]}>{title}</Text>
            <View style={[styles.inputContainer, error && styles.inputError]}>
                <TextInput
                    style={styles.inputText}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    autoCapitalize="none"
                    value={value}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                />
                <Image style={styles.socialButtonImage} source={image} />
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>}
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
    inputError: {
        borderColor: 'red',
    },
    socialButtonImage: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
    errorText: {
        fontSize: 10,
        color: 'red',
        position: "relative",
        top: -15
    },
});

export default AuthInputField;
