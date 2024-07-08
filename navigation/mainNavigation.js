import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import LoginScreen from "../screens/authentication/loginScreen";
import SplashScreen from "../screens/splashScreen";
import SignupScreen from "../screens/authentication/signupScreen";
import ForgetPasswordScreen1 from "../screens/authentication/forgetPasswordScreen1";
import ForgetPasswordScreen2 from "../screens/authentication/forgetPasswordScreen2";
import AccountVerificationScreen from "../screens/authentication/accountVerificationScreen";
import OnboardingScreen1 from "../screens/onboardingScreens/onboardingScreen1";
import OnboardingScreen2 from "../screens/onboardingScreens/onboardingScreen2";
import OnboardingScreen3 from "../screens/onboardingScreens/onBoardingScreen3";
import ChatScreen from "../screens/chatScreen";
import BottomTabNavigator from "../navigation/bottomNavigation";


const Stack = createStackNavigator();


export default function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="LoginScreen">
                <Stack.Screen name="SplashScreen" component={SignupScreen} />
                <Stack.Screen name="OnboardingScreen1" component={OnboardingScreen1} />
                <Stack.Screen name="OnboardingScreen2" component={OnboardingScreen2} options={{
                    gestureEnabled: true,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }} />
                <Stack.Screen name="OnboardingScreen3" component={OnboardingScreen3} options={{
                    gestureEnabled: true,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="SignupScreen" component={SignupScreen} />
                <Stack.Screen name="ForgetPasswordScreen1" component={ForgetPasswordScreen1} />
                <Stack.Screen name="ForgetPasswordScreen2" component={ForgetPasswordScreen2} />
                <Stack.Screen name="AccountVerificationScreen" component={AccountVerificationScreen} />
                <Stack.Screen name="ChatScreen" component={ChatScreen} />
                <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
