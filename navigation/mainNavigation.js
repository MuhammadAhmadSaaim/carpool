import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import LoginScreen from "../screens/authentication/loginScreen";
import SplashScreen from "../screens/splashScreen";
import SignupScreen from "../screens/authentication/signupScreen";
import ForgetPasswordScreen1 from "../screens/authentication/forgetPasswordScreen1";
import ForgetPasswordScreen2 from "../screens/authentication/forgetPasswordScreen2";
import AccountVerificationScreen from "../screens/authentication/accountVerificationScreen";
import HomeScreen from "../screens/homeScreen";
import OnboardingScreen1 from "../screens/onboardingScreens/onboardingScreen1";
import OnboardingScreen2 from "../screens/onboardingScreens/onboardingScreen2";
import OnboardingScreen3 from "../screens/onboardingScreens/onBoardingScreen3";
import AddPost from "../screens/addPost";
import SearchRideScreen from "../screens/searchRideScreen"
import ChatScreen from "../screens/chatScreen";
import AllChats from "../screens/allChats";
import ProfileScreen from "../screens/profileScreen";
import RequestManagementScreen from "../screens/requestManagementScreen";

const Stack = createStackNavigator();

export default function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="AllChats"
            >
                <Stack.Screen name="SplashScreen" component={OnboardingScreen1} />
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
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="AddPost" component={AddPost} />
                <Stack.Screen name="SearchRideScreen" component={SearchRideScreen} />
                <Stack.Screen name="ChatScreen" component={ChatScreen} />
                <Stack.Screen name="AllChats" component={AllChats} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen name="RequestManagementScreen" component={RequestManagementScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
