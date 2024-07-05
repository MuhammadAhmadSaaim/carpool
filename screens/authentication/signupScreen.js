import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import colors from "../../utils/colors";
import SizedBox from "../../components/SizedBox";
import TitleInputField from "../../components/titledTextInputField";
import CustomSolidButton from "../../components/customSolidButton";
import HorizontalLine from "../../components/horizontalLine";
import mail from "../../assets/mail.png";
import pass from "../../assets/password.png";
import phone from "../../assets/messagePurple.png";
import user from "../../assets/userPurple.png";
import { useNavigation } from "@react-navigation/native";


const SignupScreen = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

    const next = () => {
        navigation.navigate("AccountVerificationScreen");
    }

    return (
        <View style={styles.background}>
            <View style={{ paddingHorizontal: 15, }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <View>
                            <SizedBox height={35} />
                            <Text style={{ color: colors.tertiary, fontSize: 24, fontWeight: "400" }}>
                                Hi There
                            </Text>
                        </View>
                        <Text style={{ color: colors.secondary, fontSize: 30, fontWeight: "800" }}>Let's Get Start</Text>
                    </View>
                    <View>
                        <Image source={require("../../assets/navigator.png")} style={{ width: 150, height: 150, resizeMode: "contain" }} />
                    </View>
                </View>
                <SizedBox height={30} />
            </View>
            <View style={styles.bottomRectangle}>
                <SizedBox height={30} />
                <TitleInputField titleColor={colors.background} title="Full Name" placeholder="E.g. Ali Nawaz" image={user} />
                <TitleInputField titleColor={colors.background} title="Email" placeholder="E.g. example12@gmail.com" image={mail} />
                <TitleInputField titleColor={colors.background} title="Phone Number" placeholder="E.g. +92 3012345678" image={phone} />
                <TitleInputField titleColor={colors.background} title="Password" placeholder="E.g. password" image={pass} />
                <SizedBox height={20} />
                <CustomSolidButton backgroundColor={colors.background} text="Continue" textColor={colors.textBlack} onPress={next} />
                <SizedBox height={20} />
                <CustomSolidButton backgroundColor={colors.textGrey} text="Back To Sign In" textColor={colors.background} onPress={goBack} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "space-between",
        paddingTop: 25,
        paddingBottom: 20,
        backgroundColor: colors.background,
    },
    bottomRectangle: {
        width: '100%',
        height: Dimensions.get("window").height,
        backgroundColor: colors.primary,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'flex-start',
        padding: 15,
    },
});

export default SignupScreen;
