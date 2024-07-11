import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Alert, Text } from 'react-native';
import TitleInputField from "../components/titledTextInputField";
import colors from "../utils/colors";
import search from "../assets/search.png";
import ChatCard from "../components/chatCard";
import HorizontalLine from "../components/horizontalLine";
import SizedBox from "../components/SizedBox";
import { useNavigation } from '@react-navigation/native';
import { useAuth } from "../screens/authentication/authToken";

const AllChats = () => {
    const navigation = useNavigation();
    const { user, token, postID, saveThreadID, threadID } = useAuth();
    const [Chat, setChat] = useState([]);
    const [loading, setLoading] = useState(true);
    const [otherUser, setOtherUser] = useState(null);

    useEffect(() => {
        if (postID) {
            fetchChat(postID);
        } else {
            setLoading(false);
        }
    }, [postID]);

    useEffect(() => {
        if (otherUser) {
            fetchUser(otherUser);
        }
    }, [otherUser]);

    const fetchChat = async (postID) => {
        try {
            const response = await fetch(`https://carpool.qwertyexperts.com/api/thread/show/${postID}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Chat fetched successfully");
                setChat(data.result);
                setOtherUser(data.result.userB);
                setLoading(false);
                saveThreadID(data.result._id);
            } else {
                Alert.alert('Error', 'An error occurred while fetching Chat. Please try again later.');
                setLoading(false);
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred. Please try again later.');
            setLoading(false);
        }
    };

    const fetchUser = async (userID) => {
        try {
            const response = await fetch(`https://carpool.qwertyexperts.com/api/user/show/${userID}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (response.ok) {
                console.log("User fetched successfully");
                const data = await response.json();
                setOtherUser(data.result.firstName);
            } else {
            }
        } catch (error) {

        }
    };

    const openChat = () => {
        navigation.navigate('ChatScreen');
    };

    return (
        <View style={styles.container}>
            <TitleInputField title="Search" placeholder="Search for a chat" image={search} titleColor={colors.secondary} />
            <HorizontalLine color={colors.secondary} />
            <SizedBox height={10} />
            <ScrollView>
                {loading ? (
                    <Text>Loading...</Text>
                ) : postID === null ? (
                    <Text style={styles.subtitle}>
                        Chat doesn't exist yet.
                    </Text>
                ) : (
                    <ChatCard key={Chat._id} name={otherUser} onPress={openChat} />
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15,
    },
    subtitle: {
        color: colors.tertiary,
        fontSize: 16,
        fontWeight: "400",
        alignSelf: "center",
    },
});

export default AllChats;
