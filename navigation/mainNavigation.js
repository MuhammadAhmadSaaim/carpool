import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../screens/authentication/loginScreen";
import SplashScreen from "../screens/splashScreen";
import SignupScreen from "../screens/authentication/signupScreen";
import ForgetPasswordScreen1 from "../screens/authentication/forgetPasswordScreen1";
import ForgetPasswordScreen2 from "../screens/authentication/forgetPasswordScreen2";
import AccountVerificationScreen from "../screens/authentication/accountVerificationScreen";
import HomeScreen from "../screens/homeScreen";


const Stack = createStackNavigator();

export default function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}
                initialRouteName="AccountVerificationScreen">
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="SignupScreen" component={SignupScreen} />
                <Stack.Screen name="ForgetPasswordScreen1" component={ForgetPasswordScreen1} />
                <Stack.Screen name="ForgetPasswordScreen2" component={ForgetPasswordScreen2} />
                <Stack.Screen name="AccountVerificationScreen" component={AccountVerificationScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}