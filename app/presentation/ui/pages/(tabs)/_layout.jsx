import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'

const TabIcon =({icon,color, name ,focused})=>{
  return(
    <View>
      <Image 
        source ={icon}/>
    </View>
  )
}

const TabsLayout = () => {
  const screenOptions = {headerShown : false}
  return (
    <>
        <Tabs screenOptions={screenOptions}>
            <Tabs.Screen 
              name="home"
              options={{
                title:"Home",
                headerShown: false,
                tabBarIcon:({color,focused})=>(
                  <TabIcon/>

                )
              }}
            />

            <Tabs.Screen 
              name="profile"
              options={{
                title:"Profile",
                headerShown: false,
                tabBarIcon:({color,focused})=>(
                  <TabIcon/>

                )
              }}
            />

            <Tabs.Screen 
              name="settings"
              options={{
                title:"Settings",
                headerShown: false,
                tabBarIcon:({color,focused})=>(
                  <TabIcon/>

                )
              }}
            />

        </Tabs>
    
    </>
    
  )
}

export default TabsLayout