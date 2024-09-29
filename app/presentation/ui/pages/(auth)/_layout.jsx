import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {

  const screenOptions = {headerShown : false}
  return (
    <>
      <Stack screenOptions={screenOptions}>
        <Stack.Screen
          name='SignIn'
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen
          name='EmailVerification'
          options={{
            headerShown:false
          }}
        />    


        

        <Stack.Screen
          name='ResetPassword'
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen
          name='VerifyAccount'
          options={{
            headerShown:false
          }}
        />
      </Stack>
    </>
    // <View>
    //   <Text>AuthLayout</Text>
    // </View>
  )
}

export default AuthLayout