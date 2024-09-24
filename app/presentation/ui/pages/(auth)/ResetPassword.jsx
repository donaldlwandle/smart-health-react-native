import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

// Email validation schema using Yup
// const emailValidationSchema = Yup.object().shape({
//   email: Yup.string()
//     .email('Invalid email address')
//     .required('Email is required'),
// });



const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');


  // uses state for input validation
  const isInvalid =  email === '' 
  || !email.includes("@") || !email.includes(".")  ;

  const handleResetPassword = async () => {
    try {

      
      // await emailValidationSchema.validate({ email });
      // Proceed with the password reset (API call or logic here)
      Alert.alert('Success', 'A password reset link has been sent to your email');
    } catch (err) {
      setError(err.message); // Display validation error
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rest password</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <View style={styles.buttonContainer}>
        <Button title="Reset" onPress={handleResetPassword} disabled={isInvalid} color="#66cc33" />
      </View>
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
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 16,
    backgroundColor: '#66cc33',
    borderRadius: 8,
  },
});

export default ResetPassword
