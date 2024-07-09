import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from "../utils/colors";

const PostCreationCard = ({ from, to, date, seats, onFromChange, onToChange, onSeatsChange, errors, touched }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleSeatSelect = (seat) => {
        onSeatsChange(seat);
        setModalVisible(false);
    };

    const renderSeatItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleSeatSelect(item)}>
            <Text style={styles.dropdownItem}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Icon name="location-outline" size={20} color="#000" />
                <TextInput
                    style={styles.input}
                    placeholder="From"
                    value={from}
                    onChangeText={onFromChange}
                />
                <Icon name="swap-vertical-outline" size={20} color="#000" />
            </View>
            {touched.from && errors.from && <Text style={styles.errorText}>{errors.from}</Text>}

            <View style={styles.inputContainer}>
                <Icon name="location-outline" size={20} color="#000" />
                <TextInput
                    style={styles.input}
                    placeholder="To"
                    value={to}
                    onChangeText={onToChange}
                />
            </View>
            {touched.to && errors.to && <Text style={styles.errorText}>{errors.to}</Text>}

            <View style={styles.rowItem}>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Icon name="person-outline" size={20} color={colors.tertiary} />
                    <Text style={[styles.text, { marginLeft: 15 }]}>{seats}</Text>
                </TouchableOpacity>
            </View>
            {touched.seats && errors.seats && <Text style={styles.errorText}>{errors.seats}</Text>}

            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <FlatList
                            data={[1, 2, 3, 4, 5]}
                            renderItem={renderSeatItem}
                            keyExtractor={(item) => item.toString()}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 4,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 5,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        padding: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    rowItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 5,
        color: colors.tertiary,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 200,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
    },
    dropdownItem: {
        padding: 10,
        textAlign: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        position: "relative",
        marginTop: -15,
    },
});

export default PostCreationCard;
