import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Profile from './presentation/ui/pages/(tabs)/profile';
import SignIn from './presentation/ui/pages/(auth)/SignIn';
import RootLayout from './_layout';
import auth from '@react-native-firebase/auth';




export default function App() {

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <Redirect href={"./presentation/ui/pages/(auth)"}/>
    );
  }

  return (
    <Redirect href={"./presentation/ui/pages/(tabs)"}/>
  );
  


  // return (
  //   // <View style={styles.container}>
  //   //   <Text>Smart Health</Text>
  //   //   <StatusBar style='auto'/>
  //   //   <Link href="./presentation/ui/pages/(tabs)/home"> Go to Home</Link>
  //   // </View>
  
    

  //   // <SafeAreaView style={styles.safeAreaView}>
  //   //   <ScrollView contentContainerStyle={{height:"100%"}}>
  //   //     <View style={styles.container}>
  //   //       <Text>Smart Health</Text>
  //   //       <StatusBar style='auto'/>
  //   //       {/* PUT  Splash Screen content here*/}
  //   //       <Link href="./presentation/ui/pages/(auth)/SignIn"> Go to Login</Link>
  //   //     </View>

  //   //   </ScrollView>
  //   // </SafeAreaView>
    
  // )
}



const styles = StyleSheet.create({
    container:{
        display:"flex",
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        width:"100%",
        minHeight:"85vh",
        paddingHorizontal:4

    },

    safeAreaView:{
      height:"100%"
    }
})