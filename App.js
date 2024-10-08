import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState, useEffect, createContext, useContext } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth'; // Ensure firebase/auth is correctly imported
import HomeScreen from './Screens/HomeScreen';
import AuthScreen from './Screens/AuthScreen'; // Assuming this is the screen with login and create account options
import { initializeFirebase } from './Backend/firebaseConfig';

// Initialize Firebase
initializeFirebase();

// Create Auth Context to share authentication status across the app
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// Tab Navigator (can be used in HomeScreen)
const Tab = createBottomTabNavigator();
const App = () => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Listen for authentication state changes
  useEffect(() => {
    const auth = getAuth(); // Initialize the Firebase Auth
    const unsubscribe = onAuthStateChanged(auth, (authenticatedUser) => {
      setUser(authenticatedUser);
      setLoading(false);
    });
    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    // Optionally, you could show a loading screen here while checking authentication state
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