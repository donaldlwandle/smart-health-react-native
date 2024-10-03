import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native';
// Removed Icon and Voice imports
// import { useNavigation } from '@react-navigation/native'; // Uncomment if navigation is used

const CreateMedicalFile = () => {
  // State variables for form inputs
  const [purposeOfVisit, setPurposeOfVisit] = useState('');
  const [doctor, setDoctor] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [clinicalNotes, setClinicalNotes] = useState('');
  const [medicationRecords, setMedicationRecords] = useState('');
  const [diagnosticTestsResults, setDiagnosticTestsResults] = useState('');
  const [vitals, setVitals] = useState('');
  const [dischargeSummaries, setDischargeSummaries] = useState('');

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
    if (!clinicalNotes) newErrors.clinicalNotes = 'Clinical notes are required';
    if (!medicationRecords) newErrors.medicationRecords = 'Medication records are required';
    if (!diagnosticTestsResults) newErrors.diagnosticTestsResults = 'Diagnostic test results are required';
    if (!vitals) newErrors.vitals = 'Vitals are required';
    if (!dischargeSummaries) newErrors.dischargeSummaries = 'Discharge summaries are required';
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
        purposeOfVisit,
        doctor,
        diagnosis,
        clinicalNotes,
        medicationRecords,
        diagnosticTestsResults,
        vitals,
        dischargeSummaries,
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
        <Text style={styles.header}>Create Patient Medical File</Text>

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

        {/* Next Inputs without Microphone Icon */}
        <TextInput
          style={styles.largeInput}
          placeholder="Clinical Notes"
          value={clinicalNotes}
          onChangeText={setClinicalNotes}
        />
        {errors.clinicalNotes && <Text style={styles.errorText}>{errors.clinicalNotes}</Text>}

        <TextInput
          style={styles.largeInput}
          placeholder="Medication Records"
          value={medicationRecords}
          onChangeText={setMedicationRecords}
        />
        {errors.medicationRecords && <Text style={styles.errorText}>{errors.medicationRecords}</Text>}

        <TextInput
          style={styles.largeInput}
          placeholder="Diagnostic Tests Results"
          value={diagnosticTestsResults}
          onChangeText={setDiagnosticTestsResults}
        />
        {errors.diagnosticTestsResults && <Text style={styles.errorText}>{errors.diagnosticTestsResults}</Text>}

        <TextInput
          style={styles.largeInput}
          placeholder="Vitals"
          value={vitals}
          onChangeText={setVitals}
        />
        {errors.vitals && <Text style={styles.errorText}>{errors.vitals}</Text>}

        <TextInput
          style={styles.largeInput}
          placeholder="Discharge Summaries"
          value={dischargeSummaries}
          onChangeText={setDischargeSummaries}
        />
        {errors.dischargeSummaries && <Text style={styles.errorText}>{errors.dischargeSummaries}</Text>}

        {/* Create Button */}
        <TouchableOpacity style={styles.createButton} onPress={handleCreateFile}>
          <Text style={styles.buttonText}>Create</Text>
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
  largeInput: {
    height: 106,
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



