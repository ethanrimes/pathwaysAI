import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, View, Text } from 'react-native';
import CreateAccountScreen from './Screens/CreateAccountScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import { StatusBar } from 'expo-status-bar';
import StylesGlobal from './Styles/stylesGlobal';

import React, { useState, useEffect, createContext, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthScreen from './Screens/AuthScreen';  // Authentication flow
import { onAuthStateChanged } from 'firebase/auth';  // Assuming you are using Firebase for authentication
import { auth } from './firebaseConfig';  // Your Firebase configuration

// Create an Auth Context
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
// Tab Navigator
const Tab = createBottomTabNavigator();

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authenticatedUser) => {
      setUser(authenticatedUser);
      setLoading(false);
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    // Optionally, you could show a loading screen here
    return null;
  }

  return (
    <AuthContext.Provider value={{ user }}>
      <NavigationContainer>
        {user ? <HomeScreen /> : <AuthScreen />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;






