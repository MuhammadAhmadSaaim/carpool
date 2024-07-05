import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import RequestCard from "../components/requestCard";
import { useNavigation } from '@react-navigation/native';
import colors from "../utils/colors";
import HorizontalLine from "../components/horizontalLine"

const RequestManagementScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ color: colors.secondary, fontSize: 30, fontWeight: "800", alignSelf: "left" }}>
                    Carpool Requests
                </Text>
                <Text style={{ color: colors.tertiary, fontSize: 16, fontWeight: "400", alignSelf: "left" }}>
                    Please review the details below and choose to accept or reject the request.
                </Text>
                <HorizontalLine color={colors.tertiary} />
                <RequestCard
                    name="John Doe"
                    source={require("../assets/girlPic.png")}
                    to="DHA Phase 7"
                    from="Lake City Lahore"

                    persons={3}
                />
                <RequestCard
                    name="Alex Benjemen"
                    source={require("../assets/boyPic.png")}
                    to="Modenl Town"
                    from="Dha"

                    persons={1} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 50,
        paddingHorizontal: 15,
    },
});

export default RequestManagementScreen;
