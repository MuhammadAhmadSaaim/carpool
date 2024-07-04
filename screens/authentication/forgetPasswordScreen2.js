import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import CustomSolidButton from "../../components/customSolidButton";
import SizedBox from "../../components/SizedBox";
import secure from "../../assets/secure.png";


const ForgetPasswordScreen2 = () => {
    const navigation = useNavigation();

    const login = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
        })
    }

    return (
        <View style={styles.container}>

            <View style={{ paddingTop: 20 }}>
                <Text style={{ color: colors.secondary, fontSize: 22, fontWeight: "500" }}>
                    Verification Email Sent
                </Text>
                <SizedBox height={10} />
                <Text style={{ color: colors.tertiary, fontSize: 18 }}>
                    An email has been sent to your email address. Please check your email and follow the instructions to reset your password.
                </Text>
                <SizedBox height={40} />
                <Image source={secure} style={{ width: Dimensions.get('window').width, height: 220, resizeMode: "contain", alignSelf: "center", marginRight: 10 }} />
            </View>
            <View>
                <CustomSolidButton backgroundColor={colors.primary} text="Back To Sign In" textColor={colors.background} onPress={login} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
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
    },
    subTitle: {
        fontSize: 18,
        fontWeight: '400',
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


export default ForgetPasswordScreen2;
