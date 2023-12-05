import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import useAuthenticator from '../../store/useAuthenticatorStore';

const SignInScreen = ({ setIsLogInPage: setIsLogInPage }) => {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [username, setUsername] = useState('');
    const { setAuthenticator } = useAuthenticator();

    const handleLogIn = () => {
        if (username !== '' && password !== '') {
            setAuthenticator({ isAuthenticator: true, userName: username });
        } else {
            setAuthenticator({ isAuthenticator: false, userName: '' });
        }
    };

    return (
        <>
            <Image
                source={require('../../assets/3-2-bus-picture.png')}
                style={styles.image}
            />
            <Text style={styles.title}>Sign In</Text>
            <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="User Name"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="Email Id"
                value={emailId}
                onChangeText={(text) => setEmailId(text)}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                <TouchableOpacity
                    style={[styles.logInBtn, { marginLeft: 2, backgroundColor: username !== '' && password !== '' && phoneNumber !== '' && emailId !== '' ? '#ff1a1a' : 'grey' }]}
                    onPress={handleLogIn}
                    disabled={username === '' || password === '' || phoneNumber === '' || emailId === ''}
                    aria-disabled
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.logInBtn, { marginLeft: 2, backgroundColor: '#ff1a1a' }]}
                    onPress={() => setIsLogInPage(true)}
                    disabled={false}
                    aria-disabled
                >
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        alignItems: 'center',
        padding: 16,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#ff1a1a'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        width: '100%',
    },
    logInBtn: { borderRadius: 5, height: 30, padding: 5, paddingHorizontal: 20 },
    buttonText: { color: '#ffff' },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'cover',
    },

});

export default SignInScreen;
