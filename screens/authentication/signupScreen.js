import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import colors from "../../utils/colors";
import SizedBox from "../../components/SizedBox";
import AuthInputField from "../../components/authInputField"
import CustomSolidButton from "../../components/customSolidButton";
import HorizontalLine from "../../components/horizontalLine";
import mail from "../../assets/mail.png";
import pass from "../../assets/password.png";
import user from "../../assets/userPurple.png";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';

const SignupScreen = () => {
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [formattedDate, setFormattedDate] = useState("");

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        dateOfBirth: Yup.date().required('Date of Birth is required')
    });

    const goBack = () => {
        navigation.goBack();
    };


    const onChange = (event, selectedDate, setFieldValue) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
        // Format date to mm-dd-yyyy
        const formatted = `${currentDate.getMonth() + 1}-${currentDate.getDate()}-${currentDate.getFullYear()}`;
        setFormattedDate(formatted);
        setFieldValue('dateOfBirth', formatted); // Update Formik field value
    };

    const handleSubmit = async (values) => {
        try {
            const formattedDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
            const response = await fetch('https://carpool.qwertyexperts.com/api/auth/sign-up', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password,
                    dob: formattedDate
                }),
            });
            const data = await response.json();
            if (response.ok) {
                navigation.navigate("AccountVerificationScreen");
            }
            else {
                Alert.alert('Sign Up Failed', 'An error occurred. Please try again.');
                values.email = '';
                values.password = '';
            }
        } catch (error) {
            console.error('Error signing up:', error);
            Alert.alert('Sign Up Failed', 'An error occurred. Please try again.');
        }
    };

    return (
        <View style={styles.background}>
            <View style={{ paddingHorizontal: 15 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <SizedBox height={35} />
                        <Text style={{ color: colors.tertiary, fontSize: 24, fontWeight: "400" }}>
                            Hi There
                        </Text>
                        <Text style={{ color: colors.secondary, fontSize: 30, fontWeight: "800" }}>
                            Let's Get Start
                        </Text>
                    </View>
                    <Image source={require("../../assets/navigator.png")} style={{ width: 150, height: 150, resizeMode: "contain" }} />
                </View>
                <SizedBox height={20} />
            </View>
            <View style={styles.bottomRectangle}>
                <Formik
                    initialValues={{ firstName: '', lastName: '', email: '', password: '', dateOfBirth: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
                        <>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <SizedBox height={10} />
                                <AuthInputField
                                    titleColor={colors.background}
                                    title="First Name"
                                    placeholder="E.g. Ali "
                                    image={user}
                                    onChangeText={handleChange('firstName')}
                                    onBlur={handleBlur('firstName')}
                                    value={values.firstName}
                                />
                                {touched.firstName && errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}

                                <AuthInputField
                                    titleColor={colors.background}
                                    title="Last Name"
                                    placeholder="E.g. Nawaz"
                                    image={user}
                                    onChangeText={handleChange('lastName')}
                                    onBlur={handleBlur('lastName')}
                                    value={values.lastName}
                                />
                                {touched.lastName && errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}

                                <AuthInputField
                                    titleColor={colors.background}
                                    title="Email"
                                    placeholder="E.g. example12@gmail.com"
                                    image={mail}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                />
                                {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                                <AuthInputField
                                    titleColor={colors.background}
                                    title="Password"
                                    placeholder="E.g. password"
                                    image={pass}
                                    secureTextEntry
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                />
                                {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                                <Text style={[styles.inputTitle, { color: colors.background }]}>Date of Birth</Text>
                                <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text style={styles.datePickerButtonText}>
                                            {formattedDate ? formattedDate : "E.g. 26/08/2002"}
                                        </Text>
                                        <Image style={styles.socialButtonImage} source={require("../../assets/down.png")} />
                                    </View>
                                </TouchableOpacity>
                                {touched.dateOfBirth && errors.dateOfBirth && <Text style={styles.errorText}>{errors.dateOfBirth}</Text>}
                                {showDatePicker && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={date}
                                        mode="date"
                                        display="default"
                                        onChange={(event, selectedDate) => onChange(event, selectedDate, setFieldValue)}
                                    />
                                )}
                            </ScrollView>
                            <HorizontalLine color={colors.background} />
                            <View>
                                <SizedBox height={20} />
                                <CustomSolidButton
                                    backgroundColor={colors.background}
                                    text="Continue"
                                    textColor={colors.textBlack}
                                    onPress={handleSubmit}
                                />
                                <SizedBox height={10} />
                                <CustomSolidButton
                                    backgroundColor={colors.textGrey}
                                    text="Back To Sign In"
                                    textColor={colors.background}
                                    onPress={goBack}
                                />
                            </View>
                        </>
                    )}
                </Formik>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "space-between",
        paddingTop: 25,
        backgroundColor: colors.background,
    },
    bottomRectangle: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.primary,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 15,
        paddingBottom: 10,
    },
    inputTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10,
    },
    datePickerButton: {
        backgroundColor: colors.background,
        height: 55,
        padding: 15,
        borderRadius: 10,
        textAlign: "left",
        justifyContent: 'center', // Center the text vertically
    },
    datePickerButtonText: {
        color: colors.tertiary,
        fontSize: 14,
    },
    socialButtonImage: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
        marginBottom: 10,
    },
});

export default SignupScreen;
