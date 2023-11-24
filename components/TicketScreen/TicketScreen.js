import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const TicketScreen = ({ route, navigation }) => {
    const { cardDetails } = route?.params;
    const [randomString, setRandomString] = useState(cardDetails?.serialNo);

    useEffect(() => {
        // Assuming you want to use the cardName as the value for the QR code
        setRandomString(cardDetails.serialNo || '');
    }, [cardDetails]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {
                randomString && (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ marginBottom: 10 }}>Card Name: {cardDetails.cardName}</Text>
                        <Text style={{ marginBottom: 10 }}>Serial No: {cardDetails.serialNo}</Text>
                        <QRCode value={randomString} />
                    </View>
                )
            }
        </SafeAreaView>
    );
};

export default TicketScreen;
