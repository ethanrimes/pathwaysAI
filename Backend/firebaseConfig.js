import { Platform } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// Import the Node.js file that returns the Firebase config based on the platform
import getFirebaseConfigOptions from './getFirebaseConfigOptions';  // Adjust the path as needed

let firebaseApp;

export const initializeFirebase = () => {
    
    const platform = Platform.OS;  // Determine the platform (iOS or Android)
    console.log('Platform:', Platform.OS);
    // Fetch the Firebase configuration from the Node.js file based on the platform
    const configOptions = getFirebaseConfigOptions(platform);    
    // Log the configuration for debugging purposes
    console.log('Firebase Config:', configOptions);

    if (!firebaseApp) {
      firebaseApp = initializeApp(configOptions);
    }

    return firebaseApp;
};

export const getFirebaseApp = () => {
  if (!firebaseApp) {
    initializeFirebase();
  }
  return firebaseApp;
};

export const db = getFirestore(getFirebaseApp());
export const auth = getAuth(getFirebaseApp());