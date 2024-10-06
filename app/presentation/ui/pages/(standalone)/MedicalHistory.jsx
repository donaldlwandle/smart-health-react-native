import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native';

const MedicalHistory = () => {
  // State variables for form inputs
  const [conditions, setConditions] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medication, setMedication] = useState('');

  // State for errors
  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!conditions) newErrors.conditions = 'Current conditions are required/or Write N/A';
    if (!allergies) newErrors.allergies = 'Allergies are required/or Write N/A';
    if (!medication) newErrors.medication = 'Current medication is required/or write N/A';
    return newErrors;
  };

  // Handler for form submission
  const handleCreateFile = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set validation errors
    } else {
      // Clear errors and process the form
      setErrors({});
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
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Medical History</Text>

        {/* Input Fields with validation */}
        <TextInput
          style={[styles.smallInput, errors.conditions && styles.inputError]}
          placeholder="Current conditions"
          value={conditions}
          onChangeText={setConditions}
        />
        {errors.conditions && <Text style={styles.errorText}>{errors.conditions}</Text>}

        <TextInput
          style={[styles.smallInput, errors.allergies && styles.inputError]}
          placeholder="Allergies"
          value={allergies}
          onChangeText={setAllergies}
        />
        {errors.allergies && <Text style={styles.errorText}>{errors.allergies}</Text>}

        <TextInput
          style={[styles.smallInput, errors.medication && styles.inputError]}
          placeholder="Current medication"
          value={medication}
          onChangeText={setMedication}
        />
        {errors.medication && <Text style={styles.errorText}>{errors.medication}</Text>}

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
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
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

