import { initializeApp } from 'firebase/app';
import 'dotenv/config';  // To load variables from .env file (in Node.js or backend)
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

import {
    REACT_APP_FIREBASE_PROJECT_ID,
    REACT_APP_FIREBASE_PRIVATE_KEY_ID,
    REACT_APP_FIREBASE_PRIVATE_KEY,
    REACT_APP_FIREBASE_CLIENT_EMAIL,
    REACT_APP_FIREBASE_CLIENT_ID,
    REACT_APP_FIREBASE_AUTH_URI,
    REACT_APP_FIREBASE_TOKEN_URI
  } from '@env';
  
  console.log('Firebase Project ID:', REACT_APP_FIREBASE_PROJECT_ID);
  console.log('Firebase Client Email:', REACT_APP_FIREBASE_CLIENT_EMAIL);
  

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  privateKeyId: REACT_APP_FIREBASE_PRIVATE_KEY_ID,
  privateKey: REACT_APP_FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Replace escaped newlines
  clientEmail: REACT_APP_FIREBASE_CLIENT_EMAIL,
  clientId: REACT_APP_FIREBASE_CLIENT_ID,
  authUri: REACT_APP_FIREBASE_AUTH_URI,
  tokenUri: REACT_APP_FIREBASE_TOKEN_URI,
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