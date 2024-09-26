import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name='SignIn'
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen
          name='RegisterScreen'
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