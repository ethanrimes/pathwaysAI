import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';  // Assuming you have LoginScreen component
import CreateAccountScreen from './CreateAccountScreen';  // Assuming you have CreateAccountScreen component



const AuthScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Pathways AI!</Text>
      <Button title="Sign In" onPress={() => navigation.navigate('LoginScreen')} />
      <Button title="Create Account" onPress={() => navigation.navigate('CreateAccountScreen')} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
export default AuthScreen;