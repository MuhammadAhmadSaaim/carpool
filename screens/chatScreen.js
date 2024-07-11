import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { GiftedChat, Bubble, Time, InputToolbar, Send } from 'react-native-gifted-chat';
import { Appbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from "../utils/colors";
import { useNavigation } from '@react-navigation/native';
import { useAuth } from "../screens/authentication/authToken";

const ChatScreen = () => {
    const [messages, setMessages] = useState([]);

    const { user, token, threadID } = useAuth();
    const navigation = useNavigation();

    useEffect(() => {
        fetchMessageLists();
    }, [messages]);

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
        postMessage(messages);
    }, []);

    const fetchMessageLists = async () => {
        try {
            const response = await fetch(`https://carpool.qwertyexperts.com/api/message/list/${threadID}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (response.ok) {
                const data = await response.json();
                const messages = data.result.data.map(msg => ({
                    _id: msg._id,
                    text: msg.message,
                    createdAt: new Date(msg.createdAt),
                    user: {
                        _id: msg.userFrom._id,
                        name: `${msg.userFrom.firstName} ${msg.userFrom.lastName}`,
                        avatar: msg.userFrom.profilePicture,
                    },
                }));
                setMessages(messages);
            } else {
                Alert.alert('Error', 'An error occurred while fetching messages. Please try again later.');
            }
        } catch (error) {
            console.error('Error fetching messages', error);
            Alert.alert('Error', error.message);
        }
    };

    const postMessage = async (newMessages) => {
        try {
            const message = newMessages[0]; // Take the first message from the array
            const response = await fetch('https://carpool.qwertyexperts.com/api/message/', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ thread: threadID, message: message.text }),
            });
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                fetchMessageLists();
            } else {
                console.error('Error posting message');
            }
        } catch (error) {
            console.error('Error posting message', error);
            Alert.alert('Error', error.message);
        }
    };

    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                textStyle={{
                    left: {
                        color: 'white',
                    },
                    right: {
                        color: 'white',
                    },
                }}
                wrapperStyle={{
                    left: {
                        backgroundColor: colors.tertiary,
                    },
                    right: {
                        backgroundColor: colors.primary,
                    },
                }}
            />
        );
    };

    const renderTime = (props) => {
        return (
            <Time
                {...props}
                timeTextStyle={{
                    left: {
                        color: 'white',
                    },
                    right: {
                        color: 'white',
                    },
                }}
            />
        );
    };

    const renderInputToolbar = (props) => {
        return (
            <InputToolbar
                {...props}
                containerStyle={styles.inputToolbarContainer}
                primaryStyle={styles.inputToolbarPrimary}
            />
        );
    };

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View style={styles.sendingContainer}>
                    <Ionicons name="send" size={26} color={colors.tertiary} />
                </View>
            </Send>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Chat" />
                <Appbar.Action icon="dots-vertical" onPress={() => { }} />
            </Appbar.Header>
            <GiftedChat
                messages={messages}
                onSend={(messages) => onSend(messages)}
                user={{
                    _id: user._id, // Replace hardcoded ID with user._id
                }}
                renderAvatar={null}
                renderUsernameOnMessage={false}
                renderBubble={renderBubble}
                renderTime={renderTime}
                renderInputToolbar={renderInputToolbar}
                renderSend={renderSend}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputToolbarContainer: {
        borderTopWidth: 0,
        margin: 8,
        borderRadius: 8,
        elevation: 2,
        backgroundColor: 'white',
    },
    inputToolbarPrimary: {
        alignItems: 'center',
    },
    sendingContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ChatScreen;
