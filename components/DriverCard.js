import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from "../utils/colors";

const DriverCard = ({ source, name, from, to, amount, carTypeIcon }) => {
    return (
        <View style={styles.card}>
            <Image source={source} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.name}>{name}</Text>
                <View>
                    <Text style={styles.route}>{`To: ${from}`}</Text>
                    <Text style={styles.route}>{`From: ${to}`}</Text>
                </View>
                <Text style={styles.amount}>Ride Amount: <Text style={styles.amountValue}>${amount}</Text></Text>
            </View>
            <Icon
                name={carTypeIcon}
                type='font-awesome'
                size={24}
                color={colors.tertiary}
                containerStyle={styles.iconContainer}
            />
        </View>
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
        marginBottom: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
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
    amount: {
        fontSize: 14,
        marginTop: 5,
    },
    amountValue: {
        fontWeight: 'bold',
        color: colors.primary,
    },
    iconContainer: {
        padding: 5,
    },
});

export default DriverCard;
