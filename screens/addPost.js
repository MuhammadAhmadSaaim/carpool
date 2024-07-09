import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from 'formik';
import * as Yup from 'yup';
import colors from "../utils/colors";
import PostCreationCard from "../components/postCreationCard";
import SizedBox from "../components/SizedBox";
import ImageCard from "../components/imageCard";
import CustomSolidButton from "../components/customSolidButton";
import { useAuth } from "../screens/authentication/authToken";
import { useNavigation } from '@react-navigation/native';

const validationSchema = Yup.object().shape({
    from: Yup.string().required('From location is required'),
    to: Yup.string().required('To location is required'),
    seats: Yup.number().min(1, 'At least 1 seat is required').required('Number of seats is required'),
    departureTime: Yup.date().required('Departure time is required'),
    arrivalTime: Yup.date().required('Arrival time is required'),
});

export default function AddPost() {
    const { token } = useAuth();
    const navigation = useNavigation();

    const [departureTime, setDepartureTime] = useState(new Date());
    const [arrivalTime, setArrivalTime] = useState(new Date());
    const [showDepartureTimePicker, setShowDepartureTimePicker] = useState(false);
    const [showArrivalTimePicker, setShowArrivalTimePicker] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);

    const handleCarTypeSelection = (carType) => {
        setSelectedCar(carType === selectedCar ? null : carType);
    };

    const renderImageCard = (source, carType) => (
        <TouchableOpacity
            onPress={() => handleCarTypeSelection(carType)}
            style={styles.imageCardContainer}
        >
            <ImageCard source={source} width={60} height={60} size={75} color={selectedCar === carType ? colors.primary : colors.background} />
        </TouchableOpacity>
    );

    const onDepartureTimeChange = (event, selectedTime) => {
        const currentTime = selectedTime || departureTime;
        setShowDepartureTimePicker(Platform.OS === 'ios');
        setDepartureTime(currentTime);
        handleBlur('departureTime')();
    };

    const onArrivalTimeChange = (event, selectedTime) => {
        const currentTime = selectedTime || arrivalTime;
        setShowArrivalTimePicker(Platform.OS === 'ios');
        setArrivalTime(currentTime);
        handleBlur('arrivalTime')();
    };

    const handleSubmit = async (values) => {
        console.log("inside handleSubmit");
        try {
            const response = await fetch('https://carpool.qwertyexperts.com/api/posts/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    from: values.from,
                    to: values.to,
                    totalSeats: values.seats,
                    departureTime: values.departureTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
                    arrivalTime: values.arrivalTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
                    vehicleType: selectedCar
                }),
            });
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'BottomTabNavigator' }],
                });
            }
            else {
                Alert.alert('Post Not Created', 'An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            Alert.alert('Post Creation Failed', 'An error occurred. Please try again.');
        }
    };


    return (
        <Formik
            initialValues={{ from: '', to: '', seats: 1, departureTime: departureTime, arrivalTime: arrivalTime, selectedCar: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleChange, handleSubmit, setFieldValue, values, errors, touched }) => (
                <View style={styles.container}>
                    <View>
                        <SizedBox height={20} />
                        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                            <View>
                                <Text style={styles.titleText}>
                                    Create Your
                                </Text>
                                <Text style={styles.titleText}>
                                    Ride
                                </Text>
                            </View>
                            <Image source={require("../assets/currentLocation.png")} style={styles.imageStyle} />
                        </View>
                        <SizedBox height={10} />
                        <Text style={styles.detailsText}>
                            Enter details
                        </Text>
                        <SizedBox height={20} />
                        <View>
                            <PostCreationCard
                                from={values.from}
                                to={values.to}
                                seats={values.seats}
                                onFromChange={handleChange('from')}
                                onToChange={handleChange('to')}
                                onSeatsChange={(value) => handleChange('seats')(value.toString())}
                                errors={errors}
                                touched={touched}
                            />
                            <SizedBox height={20} />
                            <View style={styles.pickerContainer}>
                                <View style={styles.rowContainer}>
                                    <Text style={styles.pickerText}>
                                        Select Departure Time:
                                    </Text>
                                    <TouchableOpacity onPress={() => setShowDepartureTimePicker(true)} style={styles.timePickerButton}>
                                        <Text style={styles.timePickerText}>
                                            {departureTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </Text>
                                        <Image source={require("../assets/down.png")} style={styles.arrowImage} />
                                    </TouchableOpacity>
                                </View>
                                {showDepartureTimePicker && (
                                    <DateTimePicker
                                        value={departureTime}
                                        mode="time"
                                        is24Hour={true}
                                        display="default"
                                        onChange={(event, selectedTime) => {
                                            onDepartureTimeChange(event, selectedTime);
                                            setFieldValue('departureTime', selectedTime);
                                        }}
                                    />
                                )}
                                {errors.departureTime && touched.departureTime ? (
                                    <Text style={styles.errorText}>{errors.departureTime}</Text>
                                ) : null}
                                <View style={styles.rowContainer}>
                                    <Text style={styles.pickerText}>
                                        Select Arrival Time:
                                    </Text>
                                    <TouchableOpacity onPress={() => setShowArrivalTimePicker(true)} style={styles.timePickerButton}>
                                        <Text style={styles.timePickerText}>
                                            {arrivalTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </Text>
                                        <Image source={require("../assets/down.png")} style={styles.arrowImage} />
                                    </TouchableOpacity>
                                </View>
                                {showArrivalTimePicker && (
                                    <DateTimePicker
                                        value={arrivalTime}
                                        mode="time"
                                        is24Hour={true}
                                        display="default"
                                        onChange={(event, selectedTime) => {
                                            onArrivalTimeChange(event, selectedTime);
                                            setFieldValue('arrivalTime', selectedTime);
                                        }}
                                    />
                                )}
                                {errors.arrivalTime && touched.arrivalTime ? (
                                    <Text style={styles.errorText}>{errors.arrivalTime}</Text>
                                ) : null}
                            </View>
                            <SizedBox height={10} />
                        </View>
                        <SizedBox height={10} />
                        <View style={styles.carTypeContainer}>
                            {renderImageCard(require("../assets/bike.png"), 'bike')}
                            {renderImageCard(require("../assets/hatchback.png"), 'hatchback')}
                            {renderImageCard(require("../assets/sedan.png"), 'sedan')}
                            {renderImageCard(require("../assets/jeep.png"), 'jeep')}
                        </View>
                        {errors.selectedCar && touched.selectedCar ? (
                            <Text style={{
                                color: 'red',
                                fontSize: 12,
                                position: "relative",
                            }}>{errors.selectedCar}</Text>
                        ) : null}
                    </View>
                    <View>
                        <CustomSolidButton onPress={handleSubmit} text="Create" backgroundColor={colors.tertiary} textColor={colors.background} />
                    </View>
                </View>
            )}
        </Formik>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'space-between',
        paddingBottom: 10,
        backgroundColor: colors.background,
    },
    titleText: {
        color: colors.secondary,
        fontSize: 30,
        fontWeight: "800",
        alignSelf: "flex-start",
    },
    imageStyle: {
        width: 150,
        height: 150,
        resizeMode: "contain",
        alignSelf: "center",
    },
    detailsText: {
        color: colors.tertiary,
        fontSize: 22,
        fontWeight: "400",
        alignSelf: "flex-start",
    },
    pickerContainer: {
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 4,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    pickerText: {
        color: colors.tertiary,
        fontSize: 14,
        fontWeight: "400",
    },
    timePickerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 4,
        borderRadius: 10,
    },
    timePickerText: {
        marginRight: 4,
        color: colors.tertiary,
        fontSize: 16,
    },
    arrowImage: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        alignSelf: "center",
    },
    carTypeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    imageCardContainer: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.background,
    },
});
