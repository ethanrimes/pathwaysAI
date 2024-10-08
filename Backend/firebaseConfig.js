import { Platform } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// Import the Node.js file that returns the Firebase config based on the platform
// import getFirebaseConfigOptions from './getFirebaseConfigOptions';  // Adjust the path as needed
import { IOS_FIREBASE_CONFIG_DICTIONARY, ANDROID_FIREBASE_CONFIG_DICTIONARY } from '@env';

let firebaseApp;

const getFirebaseConfig = () => {
  const os = Platform.OS;
  console.log('Platform:', Platform.OS);
    if (os === 'ios') {
    return JSON.parse(IOS_FIREBASE_CONFIG_DICTIONARY);
  } else if (os === 'android') {
    return JSON.parse(ANDROID_FIREBASE_CONFIG_DICTIONARY);
  } else {
    throw new Error(`Unsupported OS: ${os}`);
  }
};


export const initializeFirebase = () => {
    // Fetch the Firebase configuration from the Node.js file based on the platform
    const configOptions = getFirebaseConfig();    
    // Log the configuration for debugging purposes
    console.log('configOptions:', configOptions);

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