
import React, { useEffect, useState } from 'react'
import { Redirect } from 'expo-router';
import { useGlobalContext } from '../context/GlobalProvider';
import { ActivityIndicator, View } from 'react-native';




export default function App()  {
  const{initializing} = useGlobalContext();

  if (initializing ) 
    return(
      <View
        style={{
          alignItems:'center',
          justifyContent: "center",
          flex:1,
        }}
      >
        <ActivityIndicator size="Large"/>
      </View>
  ) ;

  return (
    <Redirect href={"./presentation/ui/pages/(auth)"}/>
  );
  
}
