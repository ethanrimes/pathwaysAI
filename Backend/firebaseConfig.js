import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import {
  REACT_APP_FIREBASE_PRIVATE_KEY, 
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID
} from '@env';

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: Platform.select({
      ios: "YOUR_IOS_APP_ID",
      android: "YOUR_ANDROID_APP_ID",
    }),
  };

REACT_APP_FIREBASE_PROJECT_ID=pathways-ai-87470
REACT_APP_FIREBASE_PRIVATE_KEY_ID=6ca80611a01bd007c94c99429987a7facd13c905
="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCrN+Fry3O1DObr\nrvNoS1PPt9LVapKQFE/XRAipLh7mVA18G0VGewccXuT8Z2rU8R1W4Ff1U+uyMS/j\n5Njt6wAYKQF+I+zFvr6eZiTZGzzyOobX2KDSuHCGw64bDh72HYxkNcM58rSscyK0\nHTCfD2NnmbQOec4euckNUrdH6FqVpzAvHw0t4xui4dqknf4F6siRPhFtKzMbr0A1\n..."
REACT_APP_FIREBASE_CLIENT_EMAIL=firebase-adminsdk-zwsmp@pathways-ai-87470.iam.gserviceaccount.com
REACT_APP_FIREBASE_CLIENT_ID=116739888688594016173
=https://accounts.google.com/o/oauth2/auth
REACT_APP_FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
  

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
export default firebaseConfig;