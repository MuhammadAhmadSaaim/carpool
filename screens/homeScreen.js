import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";



const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={[styles.topRectangle, { flexDirection: "row", justifyContent: "space-between" }]}>
                <View style={{ backgroundColor: colors.background, borderRadius: 50, width: 40, height: 40, justifyContent: "center" }}>
                    <Image source={require('../assets/wallet.png')} style={{ width: 30, height: 30, resizeMode: "contain", alignSelf: "center" }} />
                </View>
                <Text style={{ fontSize: 20, color: colors.background, fontFamily: 'monospace' }}>CARPOOL</Text>
                <View style={{ backgroundColor: colors.background, borderRadius: 50, width: 40, height: 40, justifyContent: "center" }}>
                    <Image source={require('../assets/settings.png')} style={{ width: 30, height: 30, resizeMode: "contain", alignSelf: "center", marginRight: 2 }} />
                </View>
            </View>
            <View style={{ paddingHorizontal: 15 }}>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        justifyContent: 'space-between',
        paddingBottom: 10,
        backgroundColor: colors.background,
    },
    topRectangle: {
        width: '100%',
        height: 55,
        backgroundColor: colors.primary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
});


export default HomeScreen;
