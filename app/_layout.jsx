
import { StyleSheet, Text, View } from 'react-native';
import { Slot , Stack} from 'expo-router';
import SignIn from './presentation/ui/pages/(auth)/SignIn';

const RootLayout =() => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown : false}}/>
      <Stack.Screen name="presentation/ui/pages/(auth)" options={{headerShown : false}}/>
      <Stack.Screen name="presentation/ui/pages/(tabs)" options={{headerShown : false}}/>
    </Stack>
  )
}

export default RootLayout

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
