import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// Import other Firebase services as needed

let firebaseApp;

export const initializeFirebase = () => {
    let configOptions;

    if (Platform.OS === 'ios') {
        // You'd need to create a native module to access iOSFirebaseConfig
        // config = iOSFirebaseConfig.getConfig();
        configOptions = {
            apiKey: process.env.IOS_FIREBASE_API_KEY,
            authDomain: process.env.IOS_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.IOS_FIREBASE_PROJECT_ID,
            storageBucket: process.env.IOS_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.IOS_FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.IOS_FIREBASE_APP_ID,   
        };

    } else if (Platform.OS === 'android') {
        configOptions = {
            apiKey: process.env.ANDROID_FIREBASE_API_KEY,
            authDomain: process.env.ANDROID_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.ANDROID_FIREBASE_PROJECT_ID,
            storageBucket: process.env.ANDROID_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.ANDROID_FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.ANDROID_FIREBASE_APP_ID,   
        };

    } else {
        throw new Error('Unsupported platform');
    }


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
// Export other Firebase services as needed