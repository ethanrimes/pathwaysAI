import { AppRegistry, Platform } from 'react-native';  // Import AppRegistry and Platform from React Native
import App from './App';  // Import your main App component from App.js
import { name as appName } from './app.json';  // Import the app name from app.json

// Register the main App component
AppRegistry.registerComponent(appName, () => App);

// No need to handle rootTag manually in React Native
if (Platform.OS === 'ios' || Platform.OS === 'android') {
    // Native platforms automatically handle running the application
    AppRegistry.runApplication(appName);
}

