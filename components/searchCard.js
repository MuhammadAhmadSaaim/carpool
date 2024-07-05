import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchCard = ({ tripDetails }) => {
    return (
        <View style={styles.cardContainer}>
            {tripDetails.map((detail, index) => (
                <View key={index} style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Icon name={detail.icon} size={24} color={detail.color} />
                    </View>
                    <Text style={styles.text}>{detail.text}</Text>
                    <TouchableOpacity style={styles.closeButton}>
                        <Icon name="close" size={20} color="#000" />
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    iconContainer: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    text: {
        flex: 1,
        fontSize: 16,
    },
    closeButton: {
        padding: 5,
    },
});

export default SearchCard;
