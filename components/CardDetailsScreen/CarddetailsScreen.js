import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CardDetailsScreen = ({ route, navigation }) => {
    // Get the card details from the navigation params
    const { cardDetails } = route?.params;
    const handleTicketPress = () => {
        navigation.navigate('Ticket', { cardDetails: cardDetails })
    };

    const handleRechargePress = () => {
        // Implement the logic for handling the "Recharge" button press
    };

    return (
        <View style={styles.container}>
            {
                cardDetails && (
                    <>
                        <Text style={styles.cardName}>{cardDetails.cardName}</Text>
                        <Text style={styles.serialNo}>Serial No: {cardDetails.serialNo}</Text>
                        <Text style={styles.balance}>Balance: {cardDetails.balance}</Text>
                        <Text style={styles.expiryDate}>Expiry Date: {cardDetails.expiryDate}</Text>

                        {/* Add Ticket and Recharge buttons */}
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={handleTicketPress}>
                                <Text style={styles.buttonText}>Ticket</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={handleRechargePress}>
                                <Text style={styles.buttonText}>Recharge</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    serialNo: {
        fontSize: 18,
        marginBottom: 5,
    },
    balance: {
        fontSize: 18,
        marginBottom: 5,
    },
    expiryDate: {
        fontSize: 18,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#ff1a1a',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default CardDetailsScreen;
