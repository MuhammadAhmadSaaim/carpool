import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import TitleInputField from "../components/titledTextInputField";
import colors from "../utils/colors";
import HorizontalLine from "../components/horizontalLine";
import SizedBox from "../components/SizedBox";
import { useNavigation } from '@react-navigation/native';

const RequestManagementScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        paddingHorizontal: 15,
    },
});

export default RequestManagementScreen;
