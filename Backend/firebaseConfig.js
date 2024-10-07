import { Platform } from 'react-native';
import { initializeApp } from 'firebase/app';

export function initializeFirebase() {
    let config;
    if (Platform.OS === 'ios') {
        // You'd need to create a native module to access iOSFirebaseConfig
        config = iOSFirebaseConfig.getConfig();
    } else if (Platform.OS === 'android') {
        // Android configuration
        config = { ... };
    } else {
        throw new Error('Unsupported platform');
    }
    
    return initializeApp(config);
}