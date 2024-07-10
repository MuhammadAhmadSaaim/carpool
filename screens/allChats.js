import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import TitleInputField from "../components/titledTextInputField";
import colors from "../utils/colors";
import search from "../assets/search.png";
import ChatCard from "../components/chatCard";
import HorizontalLine from "../components/horizontalLine";
import SizedBox from "../components/SizedBox";
import { useNavigation } from '@react-navigation/native';

const AllChats = ({ postId }) => {
    const navigation = useNavigation();

    const openChat = () => {
        navigation.navigate('ChatScreen');
    }

    return (
        <View style={styles.container}>
            <TitleInputField title="Search" placeholder="Search for a chat" image={search} titleColor={colors.secondary} />
            <HorizontalLine color={colors.secondary} />
            <SizedBox height={10} />
            <ScrollView>
                <ChatCard name="John Doe" onPress={openChat} />
                <ChatCard name="Jane Smith" onPress={openChat} />
                <ChatCard name={postId} onPress={openChat} />
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
});

export default AllChats;
