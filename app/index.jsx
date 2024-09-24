import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Profile from './presentation/ui/pages/(tabs)/profile';
import SignIn from './presentation/ui/pages/(auth)/SignIn';
export default function App()  {
  return (
    // <View style={styles.container}>
    //   <Text>Smart Health</Text>
    //   <StatusBar style='auto'/>
    //   <Link href="./presentation/ui/pages/(tabs)/home"> Go to Home</Link>
    // </View>

    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={{height:"100%"}}>
        <View style={styles.container}>
          <Text>Smart Health</Text>
          <StatusBar style='auto'/>
          {/* PUT  Splash Screen content here*/}
          <Link href="./presentation/ui/pages/(auth)/SignIn"> Go to Login</Link>
        </View>

      </ScrollView>
    </SafeAreaView>
    
  )
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