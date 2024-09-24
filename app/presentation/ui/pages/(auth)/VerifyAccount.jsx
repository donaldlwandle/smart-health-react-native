import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';


const ValidateCode = (code) => {
  return code.trim().length > 0;
};

export const VerifyAccount = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleVerify = () => {
    if (validateCode(code)) {
      //back-end(e.g., API call)
      Alert.alert('Success', 'Your account has been verified.');
    } else {
      setError('Verification code is required');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Your Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter verification code"
        value={code}
        onChangeText={setCode}
        keyboardType="default"
        autoCapitalize="none"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <View style={styles.buttonContainer}>
        <Button title="Verify" onPress={handleVerify} color="#66cc33" />
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

export default ValidateCode

