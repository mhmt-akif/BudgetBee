import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import {
  useFonts,
  Sora_600SemiBold,
  Sora_700Bold,
} from '@expo-google-fonts/sora';
import { BottomNavigator } from './navigation/BottomTabBarNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    Sora_600SemiBold,
    Sora_700Bold,
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <NavigationContainer>
      <BottomNavigator/>
    </NavigationContainer>
  );
}
