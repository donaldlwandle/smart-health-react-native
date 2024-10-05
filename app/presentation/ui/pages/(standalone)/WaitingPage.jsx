import React from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import for the backward arrow
import { getAuth } from 'firebase/auth';
import { firebaseApp } from '../../../../data/remote/firebase/firebase-config';
const WaitingPage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Backward Arrow */}
      <TouchableOpacity onPress={() => getAuth(firebaseApp).signOut()}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text>Exit</Text>
      </TouchableOpacity>
      
      <ScrollView contentContainerStyle={styles.container}>
        
        <Text style={styles.header}>Hi there !</Text>
        <Text style={styles.text}>Contact your supervisor to give you access to patient files.</Text>
        <Text style={styles.text}>See you in the next phase.</Text>
        
        {/* Centered Image */}
        <View style={styles.imageContainer}>
          <Image source={require('../../../../../assets/logo.png')} style={styles.logo} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    margin:40,
    
  },
  container: {
    flexGrow: 1,
    
    padding: 20,
    backgroundColor: '#FFFFF',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
    opacity: 0.7,
  },
  imageContainer: {
    marginVertical: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  logo: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain', 
  },
});

export default WaitingPage;




