import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [postID, setPostID] = useState(null);
    const [threadID, setThreadID] = useState(null); // New state for threadID

    useEffect(() => {
        const loadStoredData = async () => {
            try {
                const storedToken = await AsyncStorage.getItem("token");
                const storedUser = await AsyncStorage.getItem("user");
                const storedPostID = await AsyncStorage.getItem("postID");
                const storedThreadID = await AsyncStorage.getItem("threadID"); // Load stored threadID
                if (storedToken) {
                    setToken(storedToken);
                }
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                }
                if (storedPostID) {
                    setPostID(storedPostID);
                }
                if (storedThreadID) {
                    setThreadID(storedThreadID);
                }
            } catch (error) {
                console.log("Error loading stored data:", error);
            } finally {
                setLoading(false);
            }
        };
        loadStoredData();
    }, []);

    const saveToken = async (token) => {
        try {
            setToken(token);
            await AsyncStorage.setItem("token", token);
        } catch (error) {
            console.log("Error saving token:", error);
        }
    };

    const clearToken = async () => {
        try {
            setToken(null);
            setUser(null);
            setPostID(null);
            setThreadID(null); // Clear threadID
            await AsyncStorage.removeItem("token");
            await AsyncStorage.removeItem("user");
            await AsyncStorage.removeItem("postID");
            await AsyncStorage.removeItem("threadID");
        } catch (error) {
            console.log("Error clearing token:", error);
        }
    };

    const saveUser = async (userData) => {
        try {
            setUser(userData);
            await AsyncStorage.setItem("user", JSON.stringify(userData));
        } catch (error) {
            console.log("Error saving user data:", error);
        }
    };

    const savePostID = async (postID) => {
        try {
            setPostID(postID);
            await AsyncStorage.setItem("postID", postID);
        } catch (error) {
            console.log("Error saving postID:", error);
        }
    };

    const saveThreadID = async (threadID) => { // New function to save threadID
        try {
            setThreadID(threadID);
            await AsyncStorage.setItem("threadID", threadID);
        } catch (error) {
            console.log("Error saving threadID:", error);
        }
    };

    const removeThreadID = async () => { // New function to remove threadID
        try {
            setThreadID(null);
            await AsyncStorage.removeItem("threadID");
        } catch (error) {
            console.log("Error removing threadID:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ token, user, saveToken, clearToken, saveUser, savePostID, saveThreadID, removeThreadID, postID, threadID, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
