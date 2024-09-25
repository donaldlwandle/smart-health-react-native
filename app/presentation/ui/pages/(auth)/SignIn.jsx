import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView,ScrollView } from 'react-native';
import { Link,router } from 'expo-router';
import { getFirestore,setDoc,doc } from '@react-native-firebase/firestore';
import { getAuth,createUserWithEmailAndPassword } from '@react-native-firebase/auth';
import { firebaseApp } from '../../../../data/remote/firebase/firebase-config';
import * as ROUTES from '../../../utils/constants/routes';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Validation function for email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle sign-in button press
  const  handleSignIn = async(event) => {
    event.preventDefault()
    let valid = true;

    // Reset error messages
    setEmailError('');
    setPasswordError('');

    // Validate email
    if (!email) {
      setEmailError('Email is required.');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required.');
      valid = false;
    }

    // If all fields are valid, proceed with sign-in logic
    if (valid) {
      // Add sign-in logic here
      console.log('Signing in...');
      try{
        await createUserWithEmailAndPassword(
          getAuth(firebaseApp),
          email.toLowerCase(),
          password.toLowerCase()
        ).then((userCredential)=>{

          const user = userCredential.user;

          const userObject ={
            userID: user.uid,
            userNames: "registrationData.name",
            userEmail: "email",
            userPhone: "",
            userTitle: "",
            userBirthID:"",
            userWorkID:"",
            userRole:0,
            userHasAccess: false,

          }

          
          setDoc(doc(getFirestore(firebaseApp),"users",user.uid),userObject)
          .then(()=>{
            //navigate to verify account or sign in
            console.log("REACHED STORAGE SECTION")
            router.navigate(ROUTES.REGISTER)
            

          })
          .catch((error)=>{
            //set Storage execution error
            console.log("STORAGE ERROR  :  " + error)
          })
          
        })
        .catch((error)=>{
          // set Auth error here
          console.log("ACCOUNT AUTH ERROR  :  " + error)
        });

      }catch(error){
        // Set auth try error
        console.log("REGISTER ERROR  :  " + error)
      }
    }
  };

  

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView >

        <View style={styles.container}>
          <Text style={styles.title}>Sign In</Text>

          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

          {/* Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            textContentType='password'
          />
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

          {/* Reset Password Link */}
          <View style={styles.resetContainer}>
            <Text>Forgotten password?</Text>
            <TouchableOpacity onPress={() => router.navigate(ROUTES.RESET_PASSWORD)}>
              <Text style={styles.link}> Reset</Text>
            </TouchableOpacity>
          </View>

          {/* Sign In Button */}
          <View style={styles.buttonContainer}>
            <Button title="Sign In" onPress={handleSignIn} color="#66cc33" />
          </View>

          {/* Sign Up Link */}
          <View style={styles.signupContainer}>
            <Text>Don’t have an account?</Text>
            <TouchableOpacity onPress={() => router.navigate(ROUTES.REGISTER)}>
              <Text style={styles.link}> Sign Up</Text>
            </TouchableOpacity>
            
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    

  },

  safeAreaView:{
    height:"100%",
    backgroundColor: '#fff',
  },


  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
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
  },
  resetContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 16,
    backgroundColor: '#66cc33',
    borderRadius: 8,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  link: {
    color: '#66cc33',
    fontWeight: 'bold',
  },
});

export default SignIn

