import React from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import colors from "../../utils/colors";
import AuthInputField from "../../components/authInputField";
import CustomSolidButton from "../../components/customSolidButton";
import SizedBox from "../../components/SizedBox";
import pass from "../../assets/password.png";
import { useAuth } from "../authentication/authToken";

// Validation schema
const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    oldPassword: Yup.string().min(6, 'Password must be at least 6 characters').required('Old password is required'),
    newPassword: Yup.string().min(6, 'Password must be at least 6 characters').required('New password is required'),
    confirmNewPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Confirm new password is required'),
});

const ChangePasswordScreen = () => {
    const navigation = useNavigation();
    const { user, token } = useAuth();

    const submit = async (values) => {
        console.log("Submit");
        try {
            console.log("Try Block");
            const response = await fetch('https://carpool.qwertyexperts.com/api/auth/change-password', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user._id,
                    oldPassword: values.oldPassword,
                    newPassword: values.newPassword,
                    confirmNewPassword: values.confirmNewPassword
                }),
            });
            const data = await response.json();
            // console.log(data);
            if (response.ok) {
                console.log(data);
                Alert.alert('Password Changed', `Your password has been successfully changed!`);
                back();
            }
            else {
                Alert.alert('Password Change Failed', 'An error occurred. Please try again.');
                back();
            }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error:', 'An error occurred. Please try again.');
        }
    };

    const back = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: '', oldPassword: '', newPassword: '', confirmNewPassword: '' }}
                validationSchema={validationSchema}
                onSubmit={submit}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={styles.background}>
                        <View style={{ paddingHorizontal: 15, flex: 1, justifyContent: "space-between" }}>
                            <View >
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <View>
                                            <SizedBox height={35} />
                                            <Text style={{ color: colors.secondary, fontSize: 30, fontWeight: '800' }}>
                                                Change
                                            </Text>
                                        </View>
                                        <Text style={{ color: colors.tertiary, fontSize: 28, fontWeight: '400' }}>
                                            Password
                                        </Text>
                                    </View>
                                    <View>
                                        <Image
                                            source={require("../../assets/otp.png")}
                                            style={{ width: 150, height: 150, resizeMode: 'contain' }}
                                        />
                                    </View>
                                </View>
                                <SizedBox height={30} />
                                <AuthInputField
                                    title="Old Password"
                                    placeholder="Enter your old password"
                                    image={pass}
                                    secureTextEntry
                                    value={values.oldPassword}
                                    onChangeText={handleChange('oldPassword')}
                                    onBlur={handleBlur('oldPassword')}
                                    error={touched.oldPassword && errors.oldPassword}
                                />
                                <AuthInputField
                                    title="New Password"
                                    placeholder="Enter your new password"
                                    image={pass}
                                    secureTextEntry
                                    value={values.newPassword}
                                    onChangeText={handleChange('newPassword')}
                                    onBlur={handleBlur('newPassword')}
                                    error={touched.newPassword && errors.newPassword}
                                />
                                <AuthInputField
                                    title="Confirm New Password"
                                    placeholder="Confirm your new password"
                                    image={pass}
                                    secureTextEntry
                                    value={values.confirmNewPassword}
                                    onChangeText={handleChange('confirmNewPassword')}
                                    onBlur={handleBlur('confirmNewPassword')}
                                    error={touched.confirmNewPassword && errors.confirmNewPassword}
                                />
                            </View>

                            <View>
                                <CustomSolidButton
                                    backgroundColor={colors.primary}
                                    text="Change Password"
                                    textColor={colors.background}
                                    onPress={handleSubmit}
                                />
                                <SizedBox height={10} />
                                <CustomSolidButton
                                    backgroundColor={colors.tertiary}
                                    text="Back"
                                    textColor={colors.background}
                                    onPress={() => {
                                        console.log("Back button pressed");
                                        back();
                                    }}
                                />
                            </View>

                        </View>
                    </View>
                )}
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 50,
        backgroundColor: colors.background,
        paddingBottom: 10
    },
    background: {
        flex: 1,
    },
});

export default ChangePasswordScreen;
