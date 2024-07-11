import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator, Alert, Modal, TouchableOpacity, TextInput } from 'react-native';
import colors from "../utils/colors";
import SizedBox from "../components/SizedBox";
import SearchCard from "../components/searchCard";
import CustomSolidButton from "../components/customSolidButton";
import HorizontalLine from "../components/horizontalLine";
import DriverCard from "../components/DriverCard";
import { useAuth } from "../screens/authentication/authToken";

export default function SearchRideScreen() {
    const { user, token, savePostID } = useAuth();
    const [rides, setRides] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRide, setSelectedRide] = useState(null); // State to track selected ride
    const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility
    const [seats, setSeats] = useState(1);

    useEffect(() => {
        fetchRides();
    }, [rides]);

    const fetchRides = async () => {
        try {
            const response = await fetch('https://carpool.qwertyexperts.com/api/posts/list', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (response.ok) {
                const data = await response.json();
                setRides(data.result.data); // Assuming data is an array of ride objects
                setLoading(false);
            } else {
                setLoading(false);
                // Handle error state
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred while fetching rides. Please try again later.');

        }
    };

    const handleCardPress = (ride) => {
        setSelectedRide(ride);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedRide(null);
    };

    const handleRequest = async () => {
        // https://carpool.qwertyexperts.com/api/requests/
        try {
            const response = await fetch('https://carpool.qwertyexperts.com/api/requests/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    post: selectedRide._id,
                    seats: seats,
                }),
            });
            if (response.ok) {
                // Save the post ID to the auth context
                console.log("Requested Post ID", selectedRide._id);
                savePostID(selectedRide._id);
                Alert.alert('Success', 'Your request has been sent successfully.');
                closeModal();
            } else {
                Alert.alert('Failed', 'Seats not available.');
                // Handle error state
            }
        } catch (error) {
            Alert.alert('Error', error.message);
            // Handle error state
        }
    }

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
                    {loading ? (
                        <ActivityIndicator size="large" color={colors.primary} />
                    ) : (
                        rides.map((element) => {
                            console.log("HELOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO", element.userId._id, user._id);
                            if (element.userId._id != user._id) {
                                return (
                                    <DriverCard
                                        key={element._id}
                                        name={element.userId.firstName + " " + element.userId.lastName}
                                        from={element.from}
                                        to={element.to}
                                        vehicleType={element.vehicleType.toLowerCase()}
                                        departureTime={element.departuteTime}
                                        arrivalTime={element.arrivalTime}
                                        totalSeats={element.totalSeats}
                                        availableSeats={element.availableSeats}
                                        status={element.status}
                                        onPress={() => handleCardPress(element)}
                                    />
                                );
                            }
                        })
                    )}
                </View>
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={modalStyles.modalContainer}>
                    <View style={modalStyles.modalContent}>
                        <Text style={modalStyles.modalTitle}>Ride Request</Text>

                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={modalStyles.modalText}>{`From: ${selectedRide?.from}`}</Text>
                            <Text style={modalStyles.modalText}>{`->`}</Text>
                            <Text style={modalStyles.modalText}>{`To: ${selectedRide?.to}`}</Text>
                        </View>

                        <TextInput placeholder="Enter required seats"
                            keyboardType="numeric"
                            value={seats.toString()} // Display the current value of seats
                            onChangeText={(text) => setSeats(parseInt(text) || 1)} />


                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <TouchableOpacity style={modalStyles.closeButton} onPress={closeModal}>
                                <Text style={modalStyles.closeButtonText}>Close</Text>
                            </TouchableOpacity>
                            <View style={{ marginHorizontal: 5 }}></View>
                            <TouchableOpacity style={modalStyles.requestButton} onPress={handleRequest} >
                                <Text style={modalStyles.requestButtonText}>Request</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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

const modalStyles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 10,
    },
    closeButton: {
        flex: 1,
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: colors.tertiary,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    requestButton: {
        flex: 1,
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: colors.primary,
        borderRadius: 5,
    },
    requestButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});
