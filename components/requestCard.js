import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from "../utils/colors";
import SizedBox from "../components/SizedBox";


const RequestCard = ({ name, source, to, from, persons, accept, reject }) => {
    return (
        <View style={styles.card}>
            <SizedBox height={10} />
            <Image source={source} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", paddingHorizontal: 10 }}>
                <Text style={{ textAlign: 'center', }}>{from} </Text>
                <Text style={{ textAlign: 'center', }}>{"->"}</Text>
                <Text style={{ textAlign: 'center', }}> {to}</Text>
            </View>
            <Text style={{ textAlign: 'center', }}>Passengers: {persons}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.acceptButton} onPress={accept}>
                    <Text style={{ color: colors.background, padding: 10, textAlign: "center" }}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rejectButton} onPress={reject}>
                    <Text style={{ color: colors.background, padding: 10, textAlign: "center" }}>Reject</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        justifyContent: 'flex-start',
        marginVertical: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 10,
        alignSelf: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    acceptButton: {
        flex: 1,
        borderBottomLeftRadius: 8,
        backgroundColor: colors.primary,
    },
    rejectButton: {
        flex: 1,
        borderBottomRightRadius: 8,
        backgroundColor: colors.tertiary,
    },
});

export default RequestCard;
