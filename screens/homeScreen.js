import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";



const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>
                OTP Verification
            </Text>
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
        backgroundColor: colors.primary,
    },
});


export default HomeScreen;
