import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'
import { getAuth } from 'firebase/auth'
import { firebaseApp } from '../../../../data/remote/firebase/firebase-config'
import { TouchableOpacity } from 'react-native'

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => getAuth(firebaseApp).signOut()}>
        <Text > Sign Out</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Home