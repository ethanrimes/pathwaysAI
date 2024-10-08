// (Node.js file)
module.exports = function getFirebaseConfig(platform) {
    if (platform === 'ios') {
      return {
        apiKey: process.env.IOS_FIREBASE_API_KEY,
        authDomain: process.env.IOS_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.IOS_FIREBASE_PROJECT_ID,
        storageBucket: process.env.IOS_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.IOS_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.IOS_FIREBASE_APP_ID,
      };
    } else if (platform === 'android') {
      return {
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
  };