import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import colors from "../utils/colors";
import SizedBox from "../components/SizedBox";
import { useNavigation } from '@react-navigation/native';
import { useAuth } from "../screens/authentication/authToken"


const ProfileScreen = () => {
    const navigation = useNavigation();
    const { user, clearToken } = useAuth();

    const next = () => {
        clearToken();
        navigation.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
        })
    }
    const passChange = () => {
        navigation.navigate('ChangePasswordScreen');
    }

    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 16, flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ color: colors.secondary, fontSize: 30, fontWeight: "800", alignSelf: "left" }}>
                    Profile
                </Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                    <TouchableOpacity onPress={passChange}>
                        <Image
                            source={require("../assets/settingsPurple.png")}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={next} >
                        <Image
                            source={require("../assets/logout.png")}
                            style={{ width: 30, height: 30, marginLeft: 10 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <SizedBox height={20} />
            <Image
                source={require("../assets/boyPic.png")}
                style={styles.profileImage}
            />
            <SizedBox height={20} />
            <Text style={{ color: colors.tertiary, fontSize: 30, fontWeight: 500, textAlign: "center" }}>
                {user.firstName} {user.lastName}
            </Text>
            <SizedBox height={20} />
            <ScrollView style={{ backgroundColor: colors.primary, borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 15, flex: 1 }}>

                <Text style={{ color: colors.background, fontSize: 14, textAlign: "center" }}>
                    {user.email}
                </Text>

                <SizedBox height={20} />
                <Text style={{ color: colors.background, fontSize: 16, fontWeight: "400" }}>
                    About
                </Text>
                <SizedBox height={5} />
                <View style={{ borderRadius: 10, flexDirection: "row", justifyContent: "space-between", }}>
                    <Text style={{ color: colors.background }}>
                        Hi, I'm Jane! I've been driving for carpool services for over two years. Safety and comfort are my top priorities.
                    </Text>
                </View>
                <SizedBox height={20} />
                <Text style={{ color: colors.background, fontSize: 16, fontWeight: "400" }}>
                    Experience
                </Text>
                <SizedBox height={5} />
                <View style={{ backgroundColor: colors.background, padding: 15, borderRadius: 10, flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "500", alignSelf: "center" }}>21</Text>
                        <Text style={{ fontSize: 14, color: "#526270", alignSelf: "center" }}>Driving</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "500", alignSelf: "center" }}>3</Text>
                        <Text style={{ fontSize: 14, color: "#526270", alignSelf: "center" }}>Rides Taken</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "500", alignSelf: "center" }}>2,158</Text>
                        <Text style={{ fontSize: 14, color: "#526270", alignSelf: "center" }}>Km</Text>
                    </View>
                </View>
                <SizedBox height={5} />
                <Text style={{ color: colors.background, fontSize: 16, fontWeight: "400" }}>
                    Reviews
                </Text>
                <SizedBox height={10} />
                <View style={{ backgroundColor: colors.background, padding: 15, borderRadius: 10, flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "500", alignSelf: "center" }}>Timeliness</Text>
                        <Text style={{ fontSize: 14, color: "#526270", alignSelf: "center" }}>4.9</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "500", alignSelf: "center" }}>Communication</Text>
                        <Text style={{ fontSize: 14, color: "#526270", alignSelf: "center" }}>4.2</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "500", alignSelf: "center" }}>Safety</Text>
                        <Text style={{ fontSize: 14, color: "#526270", alignSelf: "center" }}>4.7</Text>
                    </View>
                </View>
            </ScrollView>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 50,
        backgroundColor: colors.background,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        alignSelf: "center",
    },
});

export default ProfileScreen;
