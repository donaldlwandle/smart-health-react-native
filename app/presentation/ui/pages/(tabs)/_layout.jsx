import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'

const TabsLayout = () => {
  const screenOptions = {headerShown : false}
  return (
    <>
        <Tabs screenOptions={screenOptions}>
            <Tabs.Screen 
            name="home"
            />

        </Tabs>
    
    </>
    
  )
}

export default TabsLayout