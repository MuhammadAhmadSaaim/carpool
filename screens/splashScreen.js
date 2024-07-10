import React, { useEffect, useRef } from 'react';
import { View, Image, Animated } from 'react-native';
import colors from "../utils/colors";
import { useNavigation } from '@react-navigation/native';
import { useAuth } from "../screens/authentication/authToken"

const SplashScreen = () => {
    const navigation = useNavigation();
    const { token, loading } = useAuth();


    const fadeAnim = useRef(new Animated.Value(0)).current;


    useEffect(() => {
        const startAnimation = () => {
            Animated.timing(
                fadeAnim,
                {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                }
            ).start(async () => {

                if (!loading) {
                    if (!token) {
                        setTimeout(() => {
                            navigation.replace('OnboardingScreen1');
                        }, 1000);
                    }
                    else {
                        setTimeout(() => {
                            navigation.replace('BottomTabNavigator');
                        }, 1000);
                    }
                }
            });
        };
        startAnimation();
    }, [fadeAnim, navigation, token, loading]);

    return (
        <View style={{ backgroundColor: colors.primary, flex: 1, justifyContent: "center" }}>
            <Animated.Image
                source={require('../assets/logoWhite.png')}
                style={{
                    width: 250,
                    height: 240,
                    alignSelf: 'center',
                    resizeMode: "contain",
                    opacity: fadeAnim
                }}
            />
        </View>
    );
};

export default SplashScreen;
