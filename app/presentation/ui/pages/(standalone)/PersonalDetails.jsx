import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PersonalDetails = () => {
  const [firstName, setFirstName] = useState('Wayne');
  const [lastName, setLastName] = useState('Johnson');
  const [occupation, setOccupation] = useState('Superintendent');
  const [email, setEmail] = useState('Wade.Warren@icloud.com');
  const [workId, setWorkId] = useState('223456779');

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <TouchableOpacity>
        <Icon name="arrow-back" size={24} color="black" style={styles.backIcon} />
      </TouchableOpacity>

      {/* Page Title */}
      <Text style={styles.pageTitle}>Personal details</Text>

      {/* First Name Field */}
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        editable={false}
      />

      {/* Last Name Field */}
      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        editable={false}
      />

      {/* Occupation Field */}
      <Text style={styles.label}>Occupation</Text>
      <TextInput
        style={styles.input}
        value={occupation}
        onChangeText={setOccupation}
        editable={false}
      />

      {/* Email Address Field */}
      <Text style={styles.label}>Email address</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        editable={false}
      />

      {/* Work ID Field */}
      <Text style={styles.label}>Work ID</Text>
      <TextInput
        style={styles.input}
        value={workId}
        onChangeText={setWorkId}
        editable={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 20,
  },
  backIcon: {
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderColor: 'rgba(30, 30, 30, 0.03)', 
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
});

export default PersonalDetails;