
import { ActivityIndicator, View } from 'react-native';
import { Stack, useRouter, useSegments} from 'expo-router';
import { useState,useEffect } from 'react';
import { firebaseApp } from './data/remote/firebase/firebase-config';
import { getAuth } from 'firebase/auth';
import GlobalProvider from '../context/GlobalProvider';
 import ChangePassword from './presentation/ui/pages/(standalone)/ChangePassword';



const RootLayout =() => {
  const screenOptions = {headerShown : false}

  
  // // Set an initializing state whilst Firebase connects
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();
  // const router =useRouter();
  // const segments = useSegments();

  
  
  // // Handle user state changes
  // const onAuthStateChanged =(user) => {
  //   console.log("onAuthStateChanged  :  " + user)
    
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = getAuth(firebaseApp).onAuthStateChanged(onAuthStateChanged);
  //   console.log("SUBSCRIBER  :  " + subscriber)
  //   return subscriber; // unsubscribe on unmount
    
  // }, []);

  // useEffect(() => {
  //   if(initializing) return;

  //   // const inPrivateGroup = segments[0] === ('/presentation/ui/pages/(tabs)')
    
  //   if(user ){

  //     if(user.emailVerified){
  //       router.replace('/presentation/ui/pages/(tabs)')
  //     }else{
  //       router.replace('/presentation/ui/pages/(auth)/EmailVerification')
  //     }
       
  //   }else{
  //     router.replace('/presentation/ui/pages/(auth)')
  //     console.log("ROUTED OUT OF THE PRIVATE SEC")
  //   }


  // }, [user,initializing]);

  // if (initializing) 
  //   return(
  //     <View
  //       style={{
  //         alignItems:'center',
  //         justifyContent: "center",
  //         flex:1,
  //       }}
  //     >
  //       <ActivityIndicator size="Large"/>
  //     </View>
  // ) ;

  

  
  

  return (

    <GlobalProvider>
      <Stack screenOptions={screenOptions}>
        <Stack.Screen name="presentation/ui/pages/(auth)" options={screenOptions}/>
        <Stack.Screen name="presentation/ui/pages/(tabs)" options={screenOptions}/>
        <Stack.Screen name="/presentation/ui/pages/(standalone)" options={screenOptions}/>
      </Stack>

    </GlobalProvider>

    
  
  )
}

export default RootLayout

