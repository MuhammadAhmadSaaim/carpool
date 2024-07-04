import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import CustomSolidButton from "../../components/customSolidButton";
import SizedBox from "../../components/SizedBox";
import TitleInputField from "../../components/titledTextInputField";
import mail from "../../assets/mail.png";

const ForgetPasswordScreen1 = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

    const resetPassword = () => {
        navigation.navigate("ForgetPasswordScreen2");
    }

    return (
        <View style={styles.container}>
            <View>
                <SizedBox height={20} />
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Image style={{ width: 158, height: 106, marginRight: 10 }} source={require('../../assets/forgotPass.png')} />
                    <View>
                        <SizedBox height={24} />
                        <Text style={styles.title}>Forgot Password</Text>
                        <Text style={styles.subTitle}>No worries, we'll send you </Text>
                        <Text style={styles.subTitle}>instructions for reset</Text>
                    </View>
                </View>
                <SizedBox height={30} />
                <TitleInputField title="Email" placeholder="Enter your email" image={mail} />
            </View>

            <View>
                <CustomSolidButton backgroundColor={colors.primary} text="Reset Password" textColor={colors.background} onPress={resetPassword} />
                <SizedBox height={20} />
                <CustomSolidButton backgroundColor={colors.textGrey} text="Back To Sign In" textColor={colors.background} onPress={goBack} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: 'space-between',
        paddingBottom: 10,
        backgroundColor: '#fff',
    },
    imageLogo: {
        marginTop: 30,
        marginBottom: 16,
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 8,
        color: colors.secondary
    },
    subTitle: {
        fontSize: 18,
        fontWeight: '400',
        color: colors.tertiary
    },
    inputTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 14,
    },
    inputText: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        color: '#424242',
    },
    inputContainer: {
        backgroundColor: '#F9F9F9',
        height: 55,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 16,
        borderWidth: 1,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    createButton: {
        padding: 8,
        height: 55,
        backgroundColor: colors.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    socialButtonImage: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
    socialButtonText: {
        color: colors.background,
        fontSize: 14,
        fontWeight: '400',
    },
    socialButtons: {
        flexDirection: 'row',
        padding: 8,
        height: 55,
        backgroundColor: colors.tertiary,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
});


export default ForgetPasswordScreen1;
