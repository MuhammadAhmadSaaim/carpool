import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import colors from "../utils/colors";

const ImageCard = ({ source, size, width, height, color }) => {
    return (
        <View style={[styles.card, { width: size, height: size, backgroundColor: color || colors.background }]}>
            <Image source={source} style={{ width: width, height: height, borderRadius: 10, resizeMode: "cover" }} />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 5,
    },
});

export default ImageCard;
