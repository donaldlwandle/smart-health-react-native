import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native';
import * as ROUTES from '../../../utils/constants/routes';
import { router } from 'expo-router';
import { useGlobalContext } from '../../../../../context/GlobalProvider';
import { mergeObjects } from '../../../utils/functions/functions';



const Vitals = () => {
  const{setSelectedItem,selectedItem} = useGlobalContext();
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
    return newErrors;
  };

  // Handler for form submission
  const handleNext = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set validation errors
    } else {
      //Clear errors and process the form
      setErrors({});
      const vitalsData = {
        temperature:temperature,
        heartRate:heartrate,
        respRate:resprate,
      };

      console.log('New Medical File Created', mergeObjects(selectedItem,vitalsData));
      setSelectedItem(mergeObjects(selectedItem,vitalsData))
      router.push(ROUTES.TREATMENT)
      
      
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
          onChangeText={setTemprature}
        />
        {errors.temperature && <Text style={styles.errorText}>{errors.temperature}</Text>}

        <TextInput
          style={styles.smallInput}
          placeholder="Heartrate"
          value={heartrate}
          onChangeText={setHeartrate}
        />
        {errors.heartrate && <Text style={styles.errorText}>{errors.heartrate}</Text>}

        <TextInput
          style={styles.smallInput}
          placeholder="Respiration Rate"
          value={resprate}
          onChangeText={setResprate}
        />
        {errors.resprate && <Text style={styles.errorText}>{errors.resprate}</Text>}



        {/* Create Button */}
        <TouchableOpacity style={styles.createButton} onPress={handleNext}>
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