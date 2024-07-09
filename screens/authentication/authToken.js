import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    // Function to load token and user data from AsyncStorage
    const loadAuthData = async () => {
        try {
            const storedToken = await AsyncStorage.getItem('authToken');
            const storedUser = await AsyncStorage.getItem('userData');
            if (storedToken) {
                setToken(storedToken);
            }
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error('Failed to load auth data:', error);
        }
    };

    useEffect(() => {
        loadAuthData();
    }, []);

    const saveToken = async (token) => {
        try {
            await AsyncStorage.setItem('authToken', token);
            setToken(token);
        } catch (error) {
            console.error('Failed to save token:', error);
        }
    };

    const clearToken = async () => {
        try {
            await AsyncStorage.removeItem('authToken');
            await AsyncStorage.removeItem('userData');
            setToken(null);
            setUser(null);
        } catch (error) {
            console.error('Failed to clear auth data:', error);
        }
    };

    const saveUser = async (userData) => {
        try {
            await AsyncStorage.setItem('userData', JSON.stringify(userData));
            setUser(userData);
        } catch (error) {
            console.error('Failed to save user data:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ token, user, saveToken, clearToken, saveUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
