import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import Icon from 'react-native-vector-icons/MaterialIcons';

const TabIcon =({icon ,focused})=>{
  return(
    <View>
      <Icon name={icon} size={28} color={`${focused? "green":"black"}`} />
      {/* <Icon name={"person"} size={24} color="black" />
      <Icon name={"settings"} size={24} color="black" /> */}
      
    </View>
  )
}

const TabsLayout = () => {
  const screenOptions = {headerShown : false,tabBarShowLabel:false}
  return (
    <>
        <Tabs screenOptions={screenOptions}>
            <Tabs.Screen 
              name="home"
              options={{
                
                headerShown: false,
                tabBarIcon:({color,focused})=>(
                  <TabIcon  icon={"home"} focused={focused}/>

                )
              }}
            />

            <Tabs.Screen 
              name="profile"
              options={{
                
                headerShown: false,
                tabBarIcon:({color,focused})=>(
                  <TabIcon icon={"person"} focused={focused}/>

                )
              }}
            />

            <Tabs.Screen 
              name="settings"
              options={{
                
                headerShown: false,
                tabBarIcon:({color,focused})=>(
                  <TabIcon icon={"settings"} focused={focused}/>

                )
              }}
            />

        </Tabs>
    
    </>
    
  )
}

export default TabsLayout