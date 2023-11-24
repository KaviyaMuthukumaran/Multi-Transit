import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView, Button } from 'react-native';
import useCardDetailsStore from '../../store/useCardDetailsStore';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddCard = ({ navigation }) => {
    const { addCard } = useCardDetailsStore();
    const [cardName, setCardName] = useState('');
    const [serialNo, setSerialNo] = useState('');

    const handleBack = () => {
        // Handle the "Back" button click, for example, navigate to another screen
        navigation.goBack();
    };

    const handleSubmit = () => {
        // Generate a random balance between 10 and 50
        const balance = Math.floor(Math.random() * (50 - 10 + 1)) + 10;

        // Calculate the expiry date as two months from the current date
        const currentDate = new Date();
        const expiryDate = new Date(currentDate);
        expiryDate.setMonth(currentDate.getMonth() + 2);

        // Create a new card object
        const newCard = {
            cardName,
            serialNo,
            balance,
            expiryDate: `${expiryDate.getMonth() + 1}/${expiryDate.getDate()}/${expiryDate.getFullYear()}`,
        };

        // Add the new card to the store
        addCard(newCard);

        // Handle any additional logic, such as navigating to another screen
        navigation.goBack();
    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ marginTop: 80, width: '100%', padding: 20 }}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="gray"
                        placeholder="Card Name"
                        value={cardName}
                        onChangeText={(text) => setCardName(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="gray"
                        placeholder="Serial No"
                        value={serialNo}
                        onChangeText={(text) => setSerialNo(text)}
                    />
                </View>
                <View style={styles.sectionContainer}>
                    <TouchableOpacity
                        onPress={handleBack}
                        style={{ ...styles.btnStyle, marginRight: 3 }}>
                        <Ionicons name="arrow-back" size={20} color="#fff" />
                        <Text style={{ marginLeft: 5, color: '#fff' }}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={{ ...styles.btnStyle, marginLeft: 3, marginRight: 3 }}>
                        <Text style={{ marginLeft: 5, color: '#fff' }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView >
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 10,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        width: '100%',
        borderRadius: 5,
    },
    btnStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ff1a1a',
        paddingHorizontal: 8,
        height: 30,
        borderRadius: 7,
    }
});

export default AddCard;
