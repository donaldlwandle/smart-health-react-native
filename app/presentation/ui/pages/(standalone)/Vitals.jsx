import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native';
// Removed Icon and Voice imports
// import { useNavigation } from '@react-navigation/native'; // Uncomment if navigation is used

const Vitals = () => {
  // State variables for form inputs
  const [temperature, setTemprature] = useState('');
  const [heartrate, setHeartrate] = useState('');
  const [resprate, setResprate] = useState('');

  // State for errors
  const [errors, setErrors] = useState({});

  // Removed speech-to-text related states and logic

  // const navigation = useNavigation(); // Uncomment if navigation is used

  // Function to handle form validation
  const validateForm = () => {
    const newErrors = {};
    if (!temperature) newErrors.temperature = 'Temperature is required';
    if (!heartrate) newErrors.heartrate = 'heart rate is required';
    if (!resprate) newErrors.resprate = 'Respiration rate is required';
  };

  // Handler for form submission
  const handleCreateFile = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set validation errors
    } else {
      // Clear errors and process the form
      setErrors({});
      const Vitals = {
        purposeOfVisit,
        doctor,
        diagnosis,
      };
      console.log('New Medical File Created', medicalFile);
      
      // Show success alert
      Alert.alert(
        'Success',
        'Patient medical file created successfully!',
        [
          {
            text: 'OK',
            // Uncomment if navigation is used
            // onPress: () => navigation.navigate('Dashboard'), // Navigate back to dashboard
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Vitals</Text>

        {/* First 3 Inputs with Validation */}
        <TextInput
          style={styles.smallInput}
          placeholder="Temperature"
          value={temperature}
          onChangeText={temperature}
        />
        {errors.temperature && <Text style={styles.errorText}>{errors.temperature}</Text>}

        <TextInput
          style={styles.smallInput}
          placeholder="Heartrate"
          value={heartrate}
          onChangeText={heartrate}
        />
        {errors.heartrate && <Text style={styles.errorText}>{errors.heartrate}</Text>}

        <TextInput
          style={styles.smallInput}
          placeholder="Respiration Rate"
          value={resprate}
          onChangeText={resprate}
        />
        {errors.resprate && <Text style={styles.errorText}>{errors.resprate}</Text>}



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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
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

export default Vitals;