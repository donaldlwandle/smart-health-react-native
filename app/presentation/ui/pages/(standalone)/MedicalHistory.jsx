import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native';
// Removed Icon and Voice imports
// import { useNavigation } from '@react-navigation/native'; // Uncomment if navigation is used

const MedicalHistory = () => {
  // State variables for form inputs
  const [conditions, setConditions] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medication, setMedication] = useState('');

  // Removed speech-to-text related states and logic

  // const navigation = useNavigation(); // Uncomment if navigation is used

  // Handler for form submission
  const handleCreateFile = () => {
    // Simulate form submission
    const medicalFile = {
      conditions,
      allergies,
      medication,
    };

    console.log('New Medical History Created', medicalFile);

    // Show success alert
    Alert.alert(
      'Success',
      'Patient medical history created successfully!',
      [
        {
          text: 'OK',
          // Uncomment if navigation is used
          // onPress: () => navigation.navigate('Dashboard'), // Navigate back to dashboard
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Medical History</Text>

        {/* Input Fields */}
        <TextInput
          style={styles.smallInput}
          placeholder="Current conditions"
          value={conditions}
          onChangeText={setConditions} // Use setConditions to update state
        />

        <TextInput
          style={styles.smallInput}
          placeholder="Allergies"
          value={allergies}
          onChangeText={setAllergies} // Use setAllergies to update state
        />

        <TextInput
          style={styles.smallInput}
          placeholder="Current medication"
          value={medication}
          onChangeText={setMedication} // Use setMedication to update state
        />

        {/* Create Button */}
        <TouchableOpacity style={styles.createButton} onPress={handleCreateFile}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 20,
    backgroundColor: '#FFFFF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  smallInput: {
    height: 38,
    width: 358,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  createButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MedicalHistory;

