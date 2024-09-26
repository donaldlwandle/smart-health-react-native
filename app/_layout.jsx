
import { StyleSheet, Text, View } from 'react-native';
import { Slot , Stack} from 'expo-router';
import SignIn from './presentation/ui/pages/(auth)/SignIn';
import { useState,useEffect } from 'react';
import { getAuth} from '@react-native-firebase/auth';
import { firebaseApp } from './data/remote/firebase/firebase-config';

const RootLayout =() => {

  const [initializing, setInitializing] = useState(true)
  const [authUser, setAuthUser] = useState(null);

  console.log("THE AUTH USER IS >>>> ", authUser);
  const onAuthStateChanged = (user)=>{
    console.log("onAuthStateChanged", user)
    if(user){
      
      setAuthUser(user)
    }else{
      setAuthUser(null)
    }

    if(initializing)setInitializing(false);
  }
  useEffect(() => {
    const auth = getAuth();
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged)

    return subscriber
    
  }, [authUser]);
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
