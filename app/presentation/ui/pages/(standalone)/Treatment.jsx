import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native';
import * as ROUTES from '../../../utils/constants/routes';
import { useGlobalContext } from '../../../../../context/GlobalProvider';
import { mergeObjects } from '../../../utils/functions/functions';
import { router } from 'expo-router';



const Treatment = () => {
  const{setSelectedItem,selectedItem} = useGlobalContext();
  // State variables for form inputs
  const [diagnosis, setDiagnosis] = useState('');
  const [prescription, setPresciption] = useState('');
  const [plan, setPlan] = useState('');
  const [dosage, setDosage] = useState('');
  const [followup, setFollowup] = useState('');

  // State for errors
  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!diagnosis) newErrors.diagnosis = 'Diagnosis is required';
    if (!prescription) newErrors.prescription = 'Prescription is required';
    if (!plan) newErrors.plan = 'Plan is required /or write N/A';
    if (!dosage) newErrors.dosage = 'Dosage instruction is required';
    if (!followup) newErrors.followup = 'Follow-up date is required /or write N/A';
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
      const treatmentDetails = {
        diagnosis:  diagnosis,
        prescription:prescription,
        plan:plan,
        dosage:dosage,
        followup:followup,
      };

      console.log('New Medical File Created', mergeObjects(selectedItem,treatmentDetails));
      setSelectedItem(mergeObjects(selectedItem,treatmentDetails))
      router.push(ROUTES.HISTORY)

      // Show success alert
      
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Treatment</Text>

        {/* Input Fields with validation */}
        <TextInput
          style={[styles.smallInput, errors.diagnosis && styles.inputError]}
          placeholder="Diagnosis"
          value={diagnosis}
          onChangeText={setDiagnosis}
        />
        {errors.diagnosis && <Text style={styles.errorText}>{errors.diagnosis}</Text>}

        <TextInput
          style={[styles.smallInput, errors.prescription && styles.inputError]}
          placeholder="Prescription"
          value={prescription}
          onChangeText={setPresciption}
        />
        {errors.prescription && <Text style={styles.errorText}>{errors.prescription}</Text>}

        <TextInput
          style={[styles.smallInput, errors.plan && styles.inputError]}
          placeholder="Plan"
          value={plan}
          onChangeText={setPlan}
        />
        {errors.plan && <Text style={styles.errorText}>{errors.plan}</Text>}

        <TextInput
          style={[styles.smallInput, errors.dosage && styles.inputError]}
          placeholder="Dosage Instruction"
          value={dosage}
          onChangeText={setDosage}
        />
        {errors.dosage && <Text style={styles.errorText}>{errors.dosage}</Text>}

        <TextInput
          style={[styles.smallInput, errors.followup && styles.inputError]}
          placeholder="Follow Up date"
          value={followup}
          onChangeText={setFollowup}
        />
        {errors.followup && <Text style={styles.errorText}>{errors.followup}</Text>}

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

export default Treatment;




