
import { StyleSheet, Text, View } from 'react-native';
import { Slot , Stack} from 'expo-router';
import SignIn from './presentation/ui/pages/(auth)/SignIn';
import { useState,useEffect } from 'react';

const RootLayout =() => {
  

  
  const screenOptions = {headerShown : false}

  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen name="presentation/ui/pages/(auth)" options={screenOptions}/>
      <Stack.Screen name="presentation/ui/pages/(tabs)" options={screenOptions}/>
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
