import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomSolidButton from "../../components/customSolidButton";
import colors from "../../utils/colors";
import SizedBox from "../../components/SizedBox";

export default function OnboardingScreen1({ navigation }) {
    const next = () => {
        navigation.navigate("OnboardingScreen2");
    }

    return (
        <View style={styles.container}>
            <View>
                <SizedBox height={20} />
                <Image source={require("../../assets/ob1.png")} style={{ width: 250, height: 250, resizeMode: "contain", alignSelf: "center" }} />
                <SizedBox height={20} />
                <Text style={{ color: colors.secondary, fontSize: 30, fontWeight: "800", alignSelf: "center" }}>
                    Welcome to Carpool
                </Text>
                <Text style={{ color: colors.tertiary, fontSize: 22, fontWeight: "400", alignSelf: "center" }}>
                    Your Smart Way to Commute
                </Text>
                <SizedBox height={20} />
                <Text style={{ color: colors.tertiary, fontSize: 18, alignSelf: "center", textAlign: "center" }}>
                    Discover a smarter, greener way to travel. With Carpool, you can easily find and share rides with people heading your way. Save money, reduce your carbon footprint, and make new friends along the journey.
                </Text>
                <SizedBox height={20} />
            </View>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: colors.primary, margin: 5 }} />
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: colors.tertiary, margin: 5 }} />
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: colors.tertiary, margin: 5 }} />
                </View>
                <CustomSolidButton backgroundColor={colors.primary} text="Get Started" textColor={colors.background} onPress={next} />
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