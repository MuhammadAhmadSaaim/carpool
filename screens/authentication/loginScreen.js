import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import colors from "../../utils/colors";
import TitleInputField from "../../components/titledTextInputField";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomSolidButton from "../../components/customSolidButton";
import SizedBox from "../../components/SizedBox";
import mail from "../../assets/mail.png";
import pass from "../../assets/password.png";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const navigation = useNavigation();

    const next = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'HomeScreen' }],
        })
    }

    return (
        <View style={styles.background}>
            <View>
                <View style={styles.topRectangle}>
                    <Image source={require("../../assets/logoWhite.png")} style={{ width: 180, height: 180, resizeMode: "contain" }} />
                </View>


                <View style={{ paddingHorizontal: 15, }}>
                    <SizedBox height={30} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View>
                            <View>
                                <SizedBox height={30} />
                                <Text style={{ color: colors.tertiary, fontSize: 24, fontWeight: "400" }}>
                                    Book Your
                                </Text>
                            </View>
                            <Text style={{ color: colors.secondary, fontSize: 30, fontWeight: "800" }}>CARPOOL Now</Text>
                        </View>
                        <View>
                            <Image source={require("../../assets/profileInfo.png")} style={{ width: 150, height: 150, resizeMode: "contain" }} />
                        </View>
                    </View>

                    <SizedBox height={30} />
                    <TitleInputField title="Email" placeholder="Enter your email" image={mail} />
                    <TitleInputField title="Password" placeholder="Enter your password" image={pass} />
                    <SizedBox height={26} />
                    <CustomSolidButton backgroundColor={colors.primary} text="Sign In" textColor={colors.background} onPress={next} />
                    <SizedBox height={20} />

                    <Text style={{ fontSize: 16, color: colors.secondary, textAlign: "right" }} onPress={() => navigation.navigate("ForgetPasswordScreen1")}>Forgot Password?</Text>

                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", paddingHorizontal: 15, }}>
                <Text style={{ fontSize: 16, textAlign: "center", marginRight: 4 }}>Don't have an account?</Text>
                <Text style={{ fontSize: 16, textAlign: "center", color: colors.secondary, fontWeight: "500" }} onPress={() => navigation.navigate("SignupScreen")}>Sign Up</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "space-between",
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: colors.background,
    },
    topRectangle: {
        width: '100%',
        height: Dimensions.get("window").height / 6,
        backgroundColor: colors.primary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: colors.background,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
