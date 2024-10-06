import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native';
import * as ROUTES from '../../../utils/constants/routes';
import { useGlobalContext } from '../../../../../context/GlobalProvider';
import { convertFirebaseTimestampToStringDateTime } from '../../../utils/functions/functions';
import { getFirestore, Timestamp } from 'firebase/firestore';
import { firebaseApp } from '../../../../data/remote/firebase/firebase-config';

const CreateMedicalFile = () => {
  const{setSelectedItem,selectedItem} = useGlobalContext();

  // State variables for form inputs
  const [purposeOfVisit, setPurposeOfVisit] = useState('');
  const [doctor, setDoctor] = useState('');
  const [diagnosis, setDiagnosis] = useState('');


  // State for errors
  const [errors, setErrors] = useState({});

  // Removed speech-to-text related states and logic

  // const navigation = useNavigation(); // Uncomment if navigation is used

  // Function to handle form validation
  const validateForm = () => {
    const newErrors = {};
    if (!purposeOfVisit) newErrors.purposeOfVisit = 'Purpose of visit is required';
    if (!doctor) newErrors.doctor = 'Doctor is required';
    if (!diagnosis) newErrors.diagnosis = 'Diagnosis is required';
    
    return newErrors;
  };

  // Handler for form submission
  const handleNext = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set validation errors
    } else {
      // Clear errors and process the form
      setErrors({});
      const medicalFile = {
        purposeOfVisit:purposeOfVisit,
        doctor:doctor,
        diagnosis:diagnosis,
        patientID:selectedItem.birthID,
        timestamp:Timestamp.fromDate(new Date()).toDate().toLocaleString("en-ZA")
        
      };
      console.log('New Medical File Created', medicalFile);

      setSelectedItem(medicalFile)

      router.push(ROUTES.VITALS)
      // Show success alert
      // Alert.alert(
      //   'Success',
      //   'Patient medical file created successfully!',
      //   [
      //     {
      //       text: 'OK',
      //       // Uncomment if navigation is used
      //       // onPress: () => navigation.navigate('Dashboard'), // Navigate back to dashboard
      //     },
      //   ],
      //   { cancelable: false }
      // );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Create new patient record</Text>

        {/* First 3 Inputs with Validation */}
        <TextInput
          style={styles.smallInput}
          placeholder="Purpose of Visit"
          value={purposeOfVisit}
          onChangeText={setPurposeOfVisit}
        />
        {errors.purposeOfVisit && <Text style={styles.errorText}>{errors.purposeOfVisit}</Text>}

        <TextInput
          style={styles.smallInput}
          placeholder="Doctor"
          value={doctor}
          onChangeText={setDoctor}
        />
        {errors.doctor && <Text style={styles.errorText}>{errors.doctor}</Text>}

        <TextInput
          style={styles.smallInput}
          placeholder="Diagnosis"
          value={diagnosis}
          onChangeText={setDiagnosis}
        />
        {errors.diagnosis && <Text style={styles.errorText}>{errors.diagnosis}</Text>}


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

export default CreateMedicalFile;
