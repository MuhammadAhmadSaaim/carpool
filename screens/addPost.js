import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from "../utils/colors";
import PostCreationCard from "../components/postCreationCard";
import SizedBox from "../components/SizedBox";
import ImageCard from "../components/imageCard";
import CustomSolidButton from "../components/customSolidButton";

export default function AddPost() {

    return (
        <View style={styles.container}>
            <View>
                <SizedBox height={20} />
                <Text style={{ color: colors.secondary, fontSize: 30, fontWeight: "800", alignSelf: "left" }}>
                    Create Your Ride
                </Text>
                <SizedBox height={10} />
                <Image source={require("../assets/currentLocation.png")} style={{ width: 200, height: 200, resizeMode: "contain", alignSelf: "center" }} />
                <SizedBox height={10} />
                <Text style={{ color: colors.tertiary, fontSize: 22, fontWeight: "400", alignSelf: "left" }}>
                    Enter details
                </Text>
                <SizedBox height={20} />
                <PostCreationCard />
                <SizedBox height={20} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                    <ImageCard source={require("../assets/bike.png")} width={50} height={50} size={75} />
                    <ImageCard source={require("../assets/hatchback.png")} width={60} height={60} size={75} />
                    <ImageCard source={require("../assets/sedan.png")} width={60} height={60} size={75} color={colors.primary} />
                    <ImageCard source={require("../assets/jeep.png")} width={60} height={60} size={75} />
                </View>
            </View>
            <View>
                <CustomSolidButton text="Create" backgroundColor={colors.tertiary} textColor={colors.background} />

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
        paddingBottom: 10,
        backgroundColor: colors.background,
    },
});