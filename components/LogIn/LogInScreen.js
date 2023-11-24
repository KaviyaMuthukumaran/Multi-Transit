import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import useAuthenticator from '../../store/useAuthenticatorStore';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setAuthenticator } = useAuthenticator();

    const handleLogIn = () => {
        if (username !== '' && password !== '') {
            setAuthenticator({ isAuthenticator: true, userName: username });
        } else {
            setAuthenticator({ isAuthenticator: false, userName: '' });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log In</Text>
            <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="Username"
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
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                <TouchableOpacity
                    style={[styles.logInBtn, { backgroundColor: username !== '' && password !== '' ? '#ff1a1a' : 'grey' }]}
                    disabled={username === '' || password === ''}
                    onPress={handleLogIn}
                    aria-disabled
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.logInBtn, { marginLeft: 2, backgroundColor: username !== '' && password !== '' ? '#ff1a1a' : 'grey' }]}
                    disabled={username === '' || password === ''}
                    onPress={handleLogIn}
                    aria-disabled
                >
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
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
    buttonText: { color: '#ffff' }
});

export default LoginScreen;
