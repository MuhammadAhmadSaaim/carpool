import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, ActivityIndicator } from 'react-native';
import RequestCard from "../components/requestCard";
import { useNavigation } from '@react-navigation/native';
import colors from "../utils/colors";
import HorizontalLine from "../components/horizontalLine";
import { useAuth } from "../screens/authentication/authToken";
import { useState, useEffect } from 'react';

const RequestManagementScreen = () => {
    const { user, token, savePostID } = useAuth();
    const [requests, setRequests] = useState([]);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRequests();
    }, [requests]);

    const fetchRequests = async () => {
        try {
            const response = await fetch('https://carpool.qwertyexperts.com/api/requests/list', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (response.ok) {
                const data = await response.json();
                setRequests(data.result.data);
                setLoading(false);
            } else {
                Alert.alert('Error', 'An error occurred while fetching requests. Please try again later.');
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred. Please try again later.');
        }
    };

    const handleAccept = async (requestId) => {
        try {
            const response = await fetch(`https://carpool.qwertyexperts.com/api/posts/${requestId}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: 'Booked' }),
            });
            if (response.ok) {
                console.log("ALi ko accept krna hai ", requestId);
                Alert.alert('Success', 'Request accepted successfully.');
                navigation.navigate('AllChat');
            } else {
                Alert.alert('Error', 'An error occurred while accepting the request. Please try again later.');
            }
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const handleReject = () => {
        // Logic for rejecting the request
        console.log(`request rejected`);
    };

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color={colors.primary} />
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.title}>Carpool Requests</Text>
                    <Text style={styles.subtitle}>
                        Please review the details below and choose to accept or reject the request.
                    </Text>
                    <HorizontalLine color={colors.tertiary} />
                    {requests.map((request) => {
                        if (request.post.status === "Available" && request.post.userId === user._id)
                            return (
                                <RequestCard
                                    key={request.post._id}
                                    name={request.from.firstName + " " + request.from.lastName}
                                    source={require("../assets/boyPic.png")}
                                    to={request.post.to}
                                    from={request.post.from}
                                    persons={request.seats}
                                    accept={() => handleAccept(request.post._id)}
                                    reject={() => handleReject()}
                                />);
                    })}
                </ScrollView>
            )}
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
    title: {
        color: colors.secondary,
        fontSize: 30,
        fontWeight: "800",
        alignSelf: "flex-start",
    },
    subtitle: {
        color: colors.tertiary,
        fontSize: 16,
        fontWeight: "400",
        alignSelf: "flex-start",
    },
});

export default RequestManagementScreen;