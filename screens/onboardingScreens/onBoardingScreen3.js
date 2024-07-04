import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomSolidButton from "../../components/customSolidButton";
import colors from "../../utils/colors";
import SizedBox from "../../components/SizedBox";

export default function OnboardingScreen2({ navigation }) {
    const next = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
        }
        )
    }

    return (
        <View style={styles.container}>
            <View>
                <SizedBox height={20} />
                <Image source={require("../../assets/ob3.png")} style={{ width: 250, height: 250, resizeMode: "contain", alignSelf: "center" }} />
                <SizedBox height={20} />
                <Text style={{ color: colors.secondary, fontSize: 30, fontWeight: "800", alignSelf: "center" }}>
                    Safe and Secure
                </Text>
                <Text style={{ color: colors.tertiary, fontSize: 22, fontWeight: "400", alignSelf: "center" }}>
                    Your Safety is Our Priority
                </Text>
                <SizedBox height={20} />
                <Text style={{ color: colors.tertiary, fontSize: 18, alignSelf: "center", textAlign: "center" }}>
                    Your security is important to us. All users are verified, and you can review and rate your experiences. Plus, in-app messaging allows you to communicate securely without sharing personal information.
                </Text>
                <SizedBox height={20} />
            </View>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: colors.primary, margin: 5 }} />
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: colors.primary, margin: 5 }} />
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: colors.primary, margin: 5 }} />
                </View>
                <CustomSolidButton backgroundColor={colors.primary} text="Join Now" textColor={colors.background} onPress={next} />
            </View>
        </View>
    );
}

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