// store.js
import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const usePersistedStore = create((set) => ({
    isAuthenticator: false,
    userName: '',
    setAuthenticator: async (value) => {
        set({ isAuthenticator: value.isAuthenticator });
        set({ userName: value.userName });
        // Save to AsyncStorage
        try {
            await AsyncStorage.setItem('isAuthenticator', JSON.stringify({ isAuthenticator: value }));
        } catch (error) {
            console.error('Error saving state to AsyncStorage:', error);
        }
    },
}));

// Load initial state from AsyncStorage
AsyncStorage.getItem('isAuthenticator')
    .then((storedState) => {
        if (storedState) {
            const storedStateParse = JSON.parse(storedState)
            usePersistedStore.setState(storedStateParse.isAuthenticator);
        }
    })
    .catch((error) => console.error('Error loading state from AsyncStorage:', error));

export default usePersistedStore;


