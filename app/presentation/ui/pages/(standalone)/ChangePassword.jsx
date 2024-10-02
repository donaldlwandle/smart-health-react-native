import React, { useState } from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you install react-native-vector-icons

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dbError, setDbError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChangePassword = () => {
    // Reset error messages
    setDbError('');
    setPasswordError('');

    // Validate passwords
    if (currentPassword === '' || newPassword === '' || confirmPassword === '') {
      setDbError('All fields are required.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError('New Password and Confirm Password must match.');
      return;
    }

    // password change logic 
  };

  return (
    <View style={styles.container}>
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.title}>Password and Security</Text>
      <Text style={styles.subtitle}>Change Your Password</Text>
      {dbError ? <Text style={styles.error}>{dbError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Current Password"
        placeholderTextColor="rgba(0, 0, 0, 0.7)" // Set placeholder color with opacity
        secureTextEntry
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="New Password"
        placeholderTextColor="rgba(0, 0, 0, 0.7)" // Set placeholder color with opacity
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="rgba(0, 0, 0, 0.7)" // Set placeholder color with opacity
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    marginTop: 16,
    fontWeight: '600', 
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 8,
    fontWeight: '600', 
    marginBottom: 20,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 358,
    borderColor: '1E1E1E',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    height: 40,
    width: 358,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
});

export default ChangePassword;