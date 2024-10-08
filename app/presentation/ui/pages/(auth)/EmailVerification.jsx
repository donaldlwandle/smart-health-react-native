import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { getAuth ,sendEmailVerification} from 'firebase/auth';
import { firebaseApp } from '../../../../data/remote/firebase/firebase-config';
// Email validation schema using Yup
// const emailValidationSchema = Yup.object().shape({
//   email: Yup.string()
//     .email('Invalid email address')
//     .required('Email is required'),
// });

const EmailVerification = () => {
  const [error, setError] = useState('');

  const handleVerifyAccount = async () => {
    try {
      const user = getAuth(firebaseApp).currentUser;
      sendEmailVerification(user)
        .then(() => {
          Alert.alert('Success', 'A verification link has been sent to your email');
        })
        .finally(() => {
          getAuth(firebaseApp).signOut();
        });
    } catch (err) {
      setError(err.message); // Display validation error
    }
  };

  const handleVerifyCancel = async () => {
    getAuth(firebaseApp).signOut();
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Verify Account Email</Text>
          <Text style={styles.text}>We have sent a verification link to your email</Text>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <TouchableOpacity style={styles.buttonContainer} onPress={handleVerifyAccount}>
            <Text style={styles.buttonText}>Resend verification link</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={handleVerifyCancel}>
            <Text style={styles.buttonText1}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  text: {
    opacity: 0.7,
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: 'grey',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  buttonText1: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EmailVerification;
