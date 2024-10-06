import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { GlobalStyles } from './Styles/StylesGlobal';

export default function App() {
  return (
    <View style={GlobalStyles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
