import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import useAuthenticator from '../../store/useAuthenticatorStore';
import useCardDetailsStore from '../../store/useCardDetailsStore';
import FontistoIcon from 'react-native-vector-icons/Fontisto';


const HomeScreen = ({ navigation }) => {
    const { setAuthenticator } = useAuthenticator();
    const cardDetails = useCardDetailsStore((state) => state.cardDetails);

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCards, setFilteredCards] = useState(cardDetails);

    const handleSearch = (text) => {
        setSearchTerm(text);
        const filteredData = cardDetails.filter(card =>
            card.cardName.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredCards(filteredData);
    };
    useEffect(() => {
        if (cardDetails) {
            setFilteredCards(cardDetails)
        }
    }, [cardDetails])

    const goToCardDetails = (item) => {
        navigation.navigate('Card Details', { cardDetails: item })
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.sectionContainer}>
                <TouchableOpacity
                    style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#ff1a1a', paddingHorizontal: 8, height: 30, borderRadius: 7, marginLeft: 3 }}>
                    <FontistoIcon name="bus-ticket" size={20} color="#fff" />
                    <Text style={{ marginLeft: 5, color: '#fff' }}>Active Ticket</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, width: '100%', padding: 15 }}>
                <View style={styles.searchContainer}>
                    <IoniconsIcon name="search" size={20} color="gray" style={styles.searchIcon} />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="gray"
                        placeholder="Search by card name"
                        value={searchTerm}
                        onChangeText={handleSearch}
                    />
                </View>
                {filteredCards.length <= 0 && <Text>No Card Name Found</Text>}
                {
                    filteredCards && (
                        <FlatList
                            data={filteredCards}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => {
                                return (<TouchableOpacity style={styles.card} onPress={() => goToCardDetails(item)}>
                                    <Text style={{ color: 'gray' }}>{item.cardName}</Text>
                                </TouchableOpacity>)
                            }}
                        />
                    )
                }
            </View>
            <View style={styles.bottomNavigation}>
                <TouchableOpacity
                    style={styles.bottomNavigationItem}>
                    <FeatherIcon name="map-pin" size={20} color="#fff" />
                    <Text style={{ marginLeft: 5, color: '#fff' }}>Map</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Add Card')}
                    style={styles.bottomNavigationItem}>
                    <IoniconsIcon name="add" size={20} color="#fff" />
                    <Text style={{ marginLeft: 5, color: '#fff' }}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setAuthenticator({ isAuthenticator: false, userName: '' })}
                    style={styles.bottomNavigationItem}>
                    <EntypoIcon name="log-out" size={20} color="#fff" />
                    <Text style={{ marginLeft: 5, color: '#fff' }}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView >
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        padding: 10,
    },
    input: {
        height: 40,
        flex: 1,
    },
    card: {
        marginBottom: 5,
        padding: 7,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: 'gray',
        width: "60%",
        borderRadius: 6
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 8,
    },
    searchIcon: {
        marginRight: 8,
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ff1a1a',
        paddingVertical: 10,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    bottomNavigationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        height: 30,
        borderRadius: 7,
    },
});

export default HomeScreen;