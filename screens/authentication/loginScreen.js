import React from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import colors from "../../utils/colors";
import AuthInputField from "../../components/authInputField"
import CustomSolidButton from "../../components/customSolidButton";
import SizedBox from "../../components/SizedBox";
import mail from "../../assets/mail.png";
import pass from "../../assets/password.png";
import { useAuth } from "../authentication/authToken"


// Validation schema
const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const LoginScreen = () => {
    const navigation = useNavigation();
    const { token, user, saveToken, saveUser } = useAuth();

    const submit = async (values) => {
        try {
            const response = await fetch('https://carpool.qwertyexperts.com/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ email: values.email, password: values.password }),
            });
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                saveToken(data.result.token); // Save the token
                saveUser(data.result.user); // Save the user data
                console.log("\nToken:", token);
                console.log("\nData:", user);
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'BottomTabNavigator' }],
                });
            }
            else {
                Alert.alert('Sign In Failed', 'An error occurred. Please try again.');
                values.email = '';
                values.password = '';
            }
        } catch (error) {
            console.error('Error logging in:', error);
            Alert.alert('Login Failed', 'An error occurred. Please try again.');
        }
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={submit}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.background}>
                    <View>
                        <View style={{ paddingHorizontal: 15 }}>
                            <SizedBox height={30} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <View>
                                        <SizedBox height={30} />
                                        <Text style={{ color: colors.tertiary, fontSize: 24, fontWeight: '400' }}>
                                            Book Your
                                        </Text>
                                    </View>
                                    <Text style={{ color: colors.secondary, fontSize: 30, fontWeight: '800' }}>
                                        CARPOOL Now
                                    </Text>
                                </View>
                                <View>
                                    <Image
                                        source={require("../../assets/profileInfo.png")}
                                        style={{ width: 150, height: 150, resizeMode: 'contain' }}
                                    />
                                </View>
                            </View>

                            <SizedBox height={30} />
                            <AuthInputField
                                title="Email"
                                placeholder="Enter your email"
                                image={mail}
                                secureTextEntry={false}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                error={touched.email && errors.email}
                            />

                            <AuthInputField
                                title="Password"
                                placeholder="Enter your password"
                                image={pass}
                                secureTextEntry
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                error={touched.password && errors.password}
                            />
                            <SizedBox height={26} />
                            <CustomSolidButton
                                backgroundColor={colors.primary}
                                text="Sign In"
                                textColor={colors.background}
                                onPress={handleSubmit}
                            />
                            <SizedBox height={20} />

                            <Text
                                style={{ fontSize: 16, color: colors.secondary, textAlign: 'right' }}
                                onPress={() => navigation.navigate('ForgetPasswordScreen1')}
                            >
                                Forgot Password?
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 15 }}>
                        <Text style={{ fontSize: 16, textAlign: 'center', marginRight: 4 }}>
                            Don't have an account?
                        </Text>
                        <Text
                            style={{ fontSize: 16, textAlign: 'center', color: colors.secondary, fontWeight: '500' }}
                            onPress={() => navigation.navigate('SignupScreen')}
                        >
                            Sign Up
                        </Text>
                    </View>
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: colors.background,
    },
    errorText: {
        fontSize: 14,
        color: 'red',
        marginTop: 5,
    },
});

export default LoginScreen;
