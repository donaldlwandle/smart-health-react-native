import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, SafeAreaView, Alert, ActivityIndicator } from 'react-native';
import { getAuth ,sendPasswordResetEmail} from 'firebase/auth';
import { firebaseApp } from '../../../../data/remote/firebase/firebase-config';
import { router } from 'expo-router';
import { resetUserPassword } from '../../../../data/remote/firebase/firebase-querries';




const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [dbError, setDbError] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  // uses state for input validation
  const validateEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleResetPassword = async () => {

    let valid = true;

    if (!email) {
      setError('Email is required');
      valid = false;
      return;
    }
    if (!validateEmail(email)) {
      setError('Invalid email address');
      valid = false
      return;
    }

    if(valid){
      setIsLoading(true)
      try{
        await resetUserPassword(email)
        .then(() => {
          Alert.alert('Success', 'A password reset link has been sent to your email');
          router.back();
        })

      }catch (err) {
        setDbError(err.message); // Display validation error
        console.log("RESET PASSWORD ERROR, RESET PWORD PAGE :" + error.message);

      }finally{
        
        setIsLoading(false)
      }
      
      
    }  
  };

  if (isLoading) 
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
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>

      {/* Instructional Text */}
      <Text style={styles.instructionText}>Put an email you used to create your account.</Text>
      <Text style={styles.instructionText}>The link to reset your password will be sent to your email.</Text>
      
      {/* Display error message from the database */}
      {dbError ? <Text style={styles.errorText}>{dbError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setError('');  // Clear error message when typing
         
        }}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      

      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  instructionText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 12,
    marginTop: 30,
    opacity: 0.7,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
  successText: {
    color: 'green',
    marginBottom: 16,
    textAlign: 'center',
  },
   button: {
    backgroundColor: '#7BC950',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});


export default ResetPassword
