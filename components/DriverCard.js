// DriverCard.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from "../utils/colors";

const images = {
    bike: require("../assets/bike.png"),
    hatchback: require("../assets/hatchback.png"),
    sedan: require("../assets/sedan.png"),
    jeep: require("../assets/jeep.png"),
    car: require("../assets/sedan.png"),
    cycle: require("../assets/bike.png"),
    bus: require("../assets/jeep.png"),
};

const DriverCard = ({ name, from, to, vehicleType, departureTime, arrivalTime, totalSeats, availableSeats, status, onPress }) => {
    const vehicleImage = images[vehicleType];

    return (
        <TouchableOpacity style={styles.card} onPress={() => onPress({ name, from, to, vehicleType, departureTime, arrivalTime, totalSeats, availableSeats, status })}>
            <View style={styles.details}>
                <Text style={styles.name}>{name}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.route}>{`From: ${from}`}</Text>
                    <Text style={[styles.route, { textAlign: "center" }]}>{"->"}</Text>
                    <Text style={styles.route}>{`To: ${to}`}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.time}>{`Departure: ${departureTime}`}</Text>
                    <Text style={[styles.route, { textAlign: "center" }]}>{"->"}</Text>
                    <Text style={styles.time}>{`Arrival: ${arrivalTime}`}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <View style={styles.seatsContainer}>
                            <Text style={styles.seats}>{`Available Seats: ${availableSeats} / ${totalSeats}`}</Text>
                            <Ionicons name="person-outline" size={14} color={colors.secondary} />
                        </View>
                        <Text style={styles.status}>Status: <Text style={styles.statusValue}>{status}</Text></Text>
                    </View>
                    <Image source={vehicleImage} style={styles.vehicleImage} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        marginBottom: 15,
    },
    details: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    route: {
        fontSize: 14,
        color: '#555',
    },
    time: {
        fontSize: 14,
        color: '#555',
    },
    seatsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    seats: {
        fontSize: 14,
        color: '#555',
        marginRight: 5,
    },
    status: {
        fontSize: 14,
        marginTop: 5,
    },
    statusValue: {
        fontWeight: 'bold',
        color: colors.primary,
    },
    vehicleImage: {
        width: 40,
        height: 40,
        marginTop: 5,
        resizeMode: 'contain',
    },
});

export default DriverCard;
