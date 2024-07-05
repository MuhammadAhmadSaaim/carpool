import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import colors from "../utils/colors";
import PostCreationCard from "../components/postCreationCard";
import SizedBox from "../components/SizedBox";
import SearchCard from "../components/searchCard";
import CustomSolidButton from "../components/customSolidButton";
import HorizontalLine from "../components/horizontalLine";
import DriverCard from "../components/DriverCard";

export default function SearchRideScreen() {

    const tripDetails = [
        { icon: 'adjust', text: 'Trip to 2464 Royal', color: colors.primary },
        { icon: 'location-on', text: '160 Brooklyn Botanic Garden', color: colors.tertiary },
    ];

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <SizedBox height={20} />
                    <Text style={{ color: colors.secondary, fontSize: 30, fontWeight: "800", alignSelf: "center" }}>
                        Find a ride
                    </Text>
                    <SizedBox height={10} />
                    <Image source={require("../assets/find.png")} style={{ width: 150, height: 150, resizeMode: "contain", alignSelf: "center" }} />
                    <SizedBox height={10} />
                    <Text style={{ color: colors.tertiary, fontSize: 22, fontWeight: "400", alignSelf: "left" }}>
                        Enter details
                    </Text>
                    <SizedBox height={20} />
                    <SearchCard tripDetails={tripDetails} />
                    <SizedBox height={20} />
                    <CustomSolidButton text="Search" backgroundColor={colors.primary} textColor={colors.background} />
                    <SizedBox height={10} />
                    <HorizontalLine color={colors.tertiary} />
                    <SizedBox height={10} />
                </View>
                <View>
                    <Text style={{ color: colors.tertiary, fontSize: 22, fontWeight: "400", alignSelf: "left" }}>
                        Available Rides
                    </Text>
                    <SizedBox height={20} />
                    <DriverCard
                        source={require("../assets/boyPic.png")}
                        name='Andrea Gomes'
                        from='2464 Royal Mint'
                        to='160 Broklyn Botanic'
                        amount='12'
                        carTypeIcon='car'
                        seatsAvailable={3}
                    />
                    <DriverCard
                        source={require("../assets/girlPic.png")}
                        name='Andrea Gomes'
                        from='2464 Royal Mint'
                        to='160 Broklyn Botanic'
                        amount='12'
                        carTypeIcon='motorcycle'
                        seatsAvailable={1}
                    />
                </View>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'flex-start',
        paddingBottom: 10,
        backgroundColor: colors.background,
    },
});