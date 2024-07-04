import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalLine = ({ color = '#1D191D' }) => {
    return <View style={[styles.line, { backgroundColor: color }]} />;
};

const styles = StyleSheet.create({
    line: {
        position: 'relative',
        height: 1,
        marginVertical: 15,
    },
});

export default HorizontalLine;
