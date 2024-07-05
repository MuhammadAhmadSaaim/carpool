import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat, Bubble, Time, InputToolbar, Send } from 'react-native-gifted-chat';
import { Appbar, TextInput, Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from "../utils/colors";
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                },
            },
            {
                _id: 2,
                text: 'Hi React Native, how can you assist me today?',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'Developer',
                },
            },
            {
                _id: 3,
                text: 'I can help you with your development questions. Feel free to ask me anything.',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                },
            },
            {
                _id: 4,
                text: 'Great! I have a question about state management.',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'Developer',
                },
            },
        ]);
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
    }, []);

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
                        backgroundColor: colors.primary,
                    },
                    right: {
                        backgroundColor: colors.tertiary,
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
                    _id: 1,
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
