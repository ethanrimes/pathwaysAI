import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import StylesGlobal from './Styles/stylesGlobal';

export default function App() {
  return (
    <View style={StylesGlobal.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
