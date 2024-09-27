import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer,StackRouter } from '@react-navigation/native'
import { Stack } from 'expo-router'

const screenOptions = {headerShown : false}

export const SignedInStack = () => {
  return (
    <Stack  screenOptions={screenOptions}>
      
      <Stack.Screen name="presentation/ui/pages/(tabs)" options={screenOptions}/>
    </Stack>
    
  )
}

export const SignedOutStack = () => {
  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen name="presentation/ui/pages/(auth)" options={screenOptions}/>
    </Stack>
    
  )
}

