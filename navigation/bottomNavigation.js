import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons';
import AddPost from "../screens/addPost";
import SearchRideScreen from "../screens/searchRideScreen";
import AllChats from "../screens/allChats";
import ProfileScreen from "../screens/profileScreen";
import RequestManagementScreen from "../screens/requestManagementScreen";
import colors from "../utils/colors";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Search') {
                        iconName = 'search';
                        return <Ionicons name={iconName} size={size} color={color} />;
                    } else if (route.name === 'Post') {
                        iconName = 'add-circle';
                        return <Ionicons name={iconName} size={size} color={color} />;
                    } else if (route.name === 'RequestManagement') {
                        iconName = 'git-pull-request' // MaterialIcons
                        return <Ionicons name={iconName} size={size} color={color} />;
                    } else if (route.name === 'AllChat') {
                        iconName = 'message' // Ionicons
                        return <MaterialIcons name={iconName} size={size} color={color} />;
                    } else if (route.name === 'Profile') {
                        iconName = 'person'; // Ionicons
                        return <Ionicons name={iconName} size={size} color={color} />;
                    }
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.tertiary,
                tabBarShowLabel: false,
            })}
        >
            <Tab.Screen name="Search" component={SearchRideScreen} />
            <Tab.Screen name="Post" component={AddPost} />
            <Tab.Screen name="RequestManagement" component={RequestManagementScreen} />
            <Tab.Screen name="AllChat" component={AllChats} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}
