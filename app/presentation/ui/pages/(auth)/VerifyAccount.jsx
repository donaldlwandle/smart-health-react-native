import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { TouchableOpacity,ScrollView, ActivityIndicator } from 'react-native';
import { View, Text, TextInput, Button, StyleSheet, Alert, SafeAreaView } from 'react-native';
import * as ROUTES from '../../../utils/constants/routes';
import { getAuth ,createUserWithEmailAndPassword,sendEmailVerification} from 'firebase/auth';
import { getFirestore,setDoc,doc } from '@react-native-firebase/firestore';
import { firebaseApp } from '../../../../data/remote/firebase/firebase-config';
import { createNewUserAccount } from '../../../../data/remote/firebase/firebase-querries';
import { Timestamp } from 'firebase/firestore';
const ValidateCode = (code) => {
  return code.trim().length > 0;
};

export const VerifyAccount = () => {
  const router = useRouter(); // Use router for navigation
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [birthID, setBirthID] = useState('');
  const [workID, setWorkID] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [surnameError, setSurnameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [birthIDError, setBirthIDError] = useState('');
  const [workIDError, setWorkIDError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [termsError, setTermsError] = useState('');
  const [dbError, setDbError] = useState(''); // State for database/back-end errors

  // Validation function for email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }

  // Handle sign-up button press
  const handleSignUp = async (event) => {
    event.preventDefault();
    let valid = true;

    // Reset error messages
    setEmailError('');
    setPasswordError('');
    setDbError(''); // Clear previous database errors

    // Validate email
    if (!email) {
      setEmailError('Email is required.');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    }

    if (!name) {
      setNameError('required.');
      valid = false;
    } 

    if (!surname) {
      setSurnameError('required.');
      valid = false;
    } 

    if (!phone) {
      setPhoneError('required.');
      valid = false;
    } else if (!isNumeric(phone)) {
      setPhoneError('Please enter a valid phone no.');
      valid = false;
    }

    if (!title) {
      setTitleError('required.');
      valid = false;
    } 

    if (!birthID) {
      setBirthIDError('required.');
      valid = false;
    } else if (!isNumeric(birthID)) {
      setBirthIDError('Please enter a valid ID.');
      valid = false;
    }else if (birthID.length != 13) {
      setBirthIDError('Please enter a valid ID.');
      valid = false;
    }

    if (!workID) {
      setWorkIDError('required.');
      valid = false;
    } 

    // Validate password
    if (!password) {
      setPasswordError('Password is required.');
      valid = false;
    } else if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      valid = false;
    }

    if (!acceptedTerms) {
      setTermsError('You must accept the terms and conditions to register');
      valid = false;
    }

    // If all fields are valid, proceed with sign-up logic
    if (valid) {

      setIsLoading(true)
      const userObject ={
        userNames: name + " "+ surname,
        userEmail: email.toLocaleLowerCase(),
        userPhone: phone,
        userTitle: title,
        userBirthID:birthID,
        userWorkID:workID,
        userRole:0,
        userHasAccess: false,
        timestamp:Timestamp.fromDate(new Date()).toDate().toLocaleString("en-ZA")

      }

      try {
        
        await createNewUserAccount(userObject, password);

      } catch (error) {
        // Set auth try error
        console.log("REGISTER ERROR, REGISTER PAGE :  " + error.message);
        setDbError("Registration failed: " + error.message );
      }finally{
        console.log('Sign-up form submitted:');
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
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Register</Text>

          {dbError ? <Text style={styles.errorText}>{dbError}</Text> : null}

          {/* Name Input */}
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

          {/* Surname Input */}
          <TextInput
            style={styles.input}
            placeholder="Surname"
            value={surname}
            onChangeText={setSurname}
          />
          {surnameError ? <Text style={styles.errorText}>{surnameError}</Text> : null}

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

          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="numeric"
            autoCapitalize="none"
          />
          {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}

          <TextInput
            style={styles.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            autoCapitalize="none"
          />
          {titleError ? <Text style={styles.errorText}>{titleError}</Text> : null}

          <TextInput
            style={styles.input}
            placeholder="ID number"
            value={birthID}
            onChangeText={setBirthID}
            keyboardType="numeric"
            autoCapitalize="none"
          />
          {birthIDError? <Text style={styles.errorText}>{birthIDError}</Text> : null}

          <TextInput
            style={styles.input}
            placeholder="Work ID"
            value={workID}
            onChangeText={setWorkID}
            
            autoCapitalize="none"
          />
          {workIDError? <Text style={styles.errorText}>{workIDError}</Text> : null}



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

          {/* Confirm Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
            textContentType='password'
          />
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

          {/* Database Error Display */}
          {dbError ? <Text style={styles.errorText}>{dbError}</Text> : null}

          {/* Terms and Conditions */}
          <View style={styles.termsContainer}>
            <TouchableOpacity onPress={() => setAcceptedTerms(!acceptedTerms)}>
              <Text>{acceptedTerms ? '☑' : '☐'} Accept the</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate(ROUTES.TERMS)}> 
              <Text style={styles.link}> terms and conditions</Text>
            </TouchableOpacity>
            <Text> to register</Text>
          </View>
          {termsError ? <Text style={styles.errorText}>{termsError}</Text> : null}

          {/* Sign Up Button */}
          <View style={styles.buttonContainer}>
            <Button title="Register" onPress={handleSignUp} color="#66cc33" />
          </View>

          {/* Sign In Link */}
          <View style={styles.signupContainer}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => router.navigate(ROUTES.SIGN_IN)}> 
              <Text style={styles.link}> Sign In</Text>
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
  safeAreaView: {
    height: '100%',
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
  termsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  link: {
    color: '#66cc33',
    fontWeight: 'bold',
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
});


export default VerifyAccount;

