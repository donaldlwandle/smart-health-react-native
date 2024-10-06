import react from 'react';
import { Stack} from 'expo-router';

import GlobalProvider from '../context/GlobalProvider';


const RootLayout =() => {
  const screenOptions = {headerShown : false}



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

