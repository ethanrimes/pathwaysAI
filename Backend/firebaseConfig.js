import { Platform } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';  // Correct import of AsyncStorage
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import getFirebaseConfigOptions from './getFirebaseConfigOptions';  // Adjust the path as needed
import { IOS_FIREBASE_CONFIG_DICTIONARY, ANDROID_FIREBASE_CONFIG_DICTIONARY } from '@env';

let firebaseApp;
let auth;

const getFirebaseConfig = () => {
  const os = Platform.OS;
  // console.log('Platform:', Platform.OS);
    if (os === 'ios') {
    return JSON.parse(IOS_FIREBASE_CONFIG_DICTIONARY);
  } else if (os === 'android') {
    return JSON.parse(ANDROID_FIREBASE_CONFIG_DICTIONARY);
  } else {
    throw new Error(`Unsupported OS: ${os}`);
  }
};

const initializeFirebase = () => {
  if (!firebaseApp) {
      const configOptions = getFirebaseConfig();
      // console.log('configOptions:', configOptions);
      firebaseApp = initializeApp(configOptions);
      
      auth = initializeAuth(firebaseApp, {
          persistence: getReactNativePersistence(AsyncStorage),
      });
  }
};

const getFirebaseApp = () => {
  if (!firebaseApp) {
      initializeFirebase();
  }
  return firebaseApp;
};

const getFirebaseAuth = () => {
  if (!auth) {
      initializeFirebase();
  }
  return auth;
};

// Initialize Firebase when this module is imported

export const firebaseClient  = getFirestore(getFirebaseApp());
export const authInstance = getFirebaseAuth();