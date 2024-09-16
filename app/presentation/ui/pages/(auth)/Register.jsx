import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';  
import { CheckBox } from 'react-native-web';
import { Modalize } from 'react-native-modalize';  

export  function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [errors, setErrors] = useState({});
  const modalizeRef = useRef(null); 

  const validateInputs = () => {
    let newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!surname) newErrors.surname = 'Surname is required';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!password) newErrors.password = 'Password is required';
    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    // Terms and Conditions validation
    if (!termsAccepted) newErrors.termsAccepted = 'You must accept the Terms and Conditions';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleRegister = () => {
    if (validateInputs()) {
      // Prepare data for back-end interaction
      const registrationData = {
        name,
        surname,
        email,
        password,
      };

      // Back-end interaction (e.g., API call)
      console.log('Registration data:', registrationData);

      // Optionally navigate to Sign In after successful registration
      navigation.navigate('SignIn');
    }
  };

  const openTermsAndConditions = () => {
    modalizeRef.current?.open();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Register</Text>
      
      {/* Name input */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#A9A9A9"
        value={name}
        onChangeText={setName}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
      
      {/* Surname input */}
      <TextInput
        style={styles.input}
        placeholder="Surname"
        placeholderTextColor="#A9A9A9"
        value={surname}
        onChangeText={setSurname}
      />
      {errors.surname && <Text style={styles.errorText}>{errors.surname}</Text>}
      
      {/* Email input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#A9A9A9"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      
      {/* Password input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#A9A9A9"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
      
      {/* Confirm Password input */}
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#A9A9A9"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
      
      {/* Terms and Conditions */}
      <View style={styles.termsContainer}>
        <CheckBox
          value={termsAccepted}
          onValueChange={setTermsAccepted}
          style={styles.checkbox}
        />
        <TouchableOpacity onPress={openTermsAndConditions}>
          <Text style={styles.termsText}>Accept Terms and Conditions</Text>
        </TouchableOpacity>
      </View>
      {errors.termsAccepted && <Text style={styles.errorText}>{errors.termsAccepted}</Text>}
      
      {/* Register button */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      
      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text
          style={styles.signInText}
          onPress={() => navigation.navigate('SignIn')}
        >
          Sign In
        </Text>
      </Text>

      {/* Bottom Sheet for Terms and Conditions */}
      <Modalize ref={modalizeRef} snapPoint={400}>
        <ScrollView style={styles.modalContent}>
          <Text style={styles.modalTitle}>Terms and Conditions</Text>
          <Text style={styles.modalText}>
            Here are the terms and conditions you agree to...
          </Text>
          {/* You can add more detailed terms and conditions here */}
        </ScrollView>
      </Modalize>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: '#F5F5F5',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'flex-start',
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#77C043',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#A9A9A9',
    marginTop: 20,
  },
  signInText: {
    color: '#77C043',
    fontWeight: 'bold',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  termsText: {
    color: '#77C043',
    textDecorationLine: 'underline',
  },
  checkbox: {
    marginRight: 10,
  },
  modalContent: {
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#333',
  },
});