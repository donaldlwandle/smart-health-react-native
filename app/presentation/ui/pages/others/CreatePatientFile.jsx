import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView, Alert } from 'react-native';

const CreatePatientFile = () => {
  // Form state variables
  const [idNumber, setIdNumber] = useState('');
  const [names, setNames] = useState('');
  const [surname, setSurname] = useState('');
  const [gender, setGender] = useState('');
  const [insuranceName, setInsuranceName] = useState('');
  const [insuranceNumber, setInsuranceNumber] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');

  // Error state variables
  const [errors, setErrors] = useState({});

  // Function to validate form inputs
  const validateForm = () => {
    let validationErrors = {};

    if (!idNumber.trim()) {
      validationErrors.idNumber = "ID number is required.";
    }

    if (!names.trim()) {
      validationErrors.names = "Name is required.";
    }

    if (!surname.trim()) {
      validationErrors.surname = "Surname is required.";
    }

    if (!gender.trim()) {
      validationErrors.gender = "Gender is required.";
    }

    if (!insuranceName.trim()) {
      validationErrors.insuranceName = " required.";
    }

    if (!insuranceNumber.trim() || isNaN(insuranceNumber)) {
      validationErrors.insuranceNumber = "Insurance number must be numeric.";
    }

    if (!contactInfo.trim()) {
      validationErrors.contactInfo = "Contact information is required.";
    }

    if (!emergencyContact.trim()) {
      validationErrors.emergencyContact = "Emergency contact information is required.";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  // Function to handle form submission
  const handleCreate = () => {
    // Validate the form
    if (!validateForm()) {
      return; // Do not proceed if validation fails
    }else{

      //Check if the patient doest exist first

      //then proccedw
    }

    const newPatient = {
      idNumber,
      names,
      surname,
      gender,
      insuranceName,
      insuranceNumber,
      contactInfo,
      emergencyContact,
    };

    console.log("New Patient File Created", newPatient);

    // Navigate back to the dashboard or patient list
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={[styles.input, errors.idNumber && { borderColor: 'red' }]}
        placeholder="Id number"
        value={idNumber}
        onChangeText={setIdNumber}
      />
      {errors.idNumber && <Text style={styles.errorText}>{errors.idNumber}</Text>}

      <TextInput
        style={[styles.input, errors.names && { borderColor: 'red' }]}
        placeholder="Names"
        value={names}
        onChangeText={setNames}
      />
      {errors.names && <Text style={styles.errorText}>{errors.names}</Text>}

      <TextInput
        style={[styles.input, errors.surname && { borderColor: 'red' }]}
        placeholder="Surname"
        value={surname}
        onChangeText={setSurname}
      />
      {errors.surname && <Text style={styles.errorText}>{errors.surname}</Text>}

      <TextInput
        style={[styles.input, errors.gender && { borderColor: 'red' }]}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Insurance name"
        value={insuranceName}
        onChangeText={setInsuranceName}
      />
      
      <TextInput
        style={[styles.input, errors.insuranceNumber && { borderColor: 'red' }]}
        placeholder="Insurance number"
        value={insuranceNumber}
        onChangeText={setInsuranceNumber}
        keyboardType="numeric"
      />
      {errors.insuranceNumber && <Text style={styles.errorText}>{errors.insuranceNumber}</Text>}

      <TextInput
        style={[styles.input, errors.contactInfo && { borderColor: 'red' }]}
        placeholder="Contact information"
        value={contactInfo}
        onChangeText={setContactInfo}
      />
      {errors.contactInfo && <Text style={styles.errorText}>{errors.contactInfo}</Text>}

      <TextInput
        style={[styles.input, errors.emergencyContact && { borderColor: 'red' }]}
        placeholder="Emergency contact information"
        value={emergencyContact}
        onChangeText={setEmergencyContact}
      />
      {errors.emergencyContact && <Text style={styles.errorText}>{errors.emergencyContact}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F8F8F8',
    flexGrow: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: '#F5F5F5',
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#7BC950',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default CreatePatientFile;
