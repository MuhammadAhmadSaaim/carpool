import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import CustomSolidButton from "../../components/customSolidButton";
import SizedBox from "../../components/SizedBox";
import secure from "../../assets/secure.png";


const AccountVerificationScreen = () => {
    const navigation = useNavigation();

    const next = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'HomeScreen' }],
        })
    }

    return (
        <View style={styles.container}>
            <View>
                <SizedBox height={20} />
                <Image source={require("../../assets/otp.png")} style={{ width: 200, height: 200, resizeMode: "contain", alignSelf: "center" }} />
                <SizedBox height={20} />
                <Text style={{ color: colors.secondary, fontSize: 30, fontWeight: "800", alignSelf: "center" }}>
                    OTP Verification
                </Text>
                <Text style={{ color: colors.tertiary, fontSize: 18, alignSelf: "center" }}>
                    Enter 6 digit code sent to your phone number
                </Text>
                <SizedBox height={20} />
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ height: 50, width: 50, backgroundColor: colors.tertiary, borderRadius: 10 }}></View>
                    <View style={{ height: 50, width: 50, backgroundColor: colors.tertiary, borderRadius: 10 }}></View>
                    <View style={{ height: 50, width: 50, backgroundColor: colors.tertiary, borderRadius: 10 }}></View>
                    <View style={{ height: 50, width: 50, backgroundColor: colors.tertiary, borderRadius: 10 }}></View>
                    <View style={{ height: 50, width: 50, backgroundColor: colors.tertiary, borderRadius: 10 }}></View>
                    <View style={{ height: 50, width: 50, backgroundColor: colors.tertiary, borderRadius: 10 }}></View>
                </View>
                <SizedBox height={20} />
                <Text style={{ fontSize: 16, color: colors.secondary, textAlign: "center" }}>Resend Code</Text>
            </View>
            <View>
                <CustomSolidButton backgroundColor={colors.primary} text="Confirm" textColor={colors.background} onPress={next} />
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
        alignSelf: 'center',
        paddingBottom: 10,
        backgroundColor: colors.background,
    },

});


export default AccountVerificationScreen;
