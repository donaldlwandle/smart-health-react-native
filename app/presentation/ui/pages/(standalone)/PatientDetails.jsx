import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import for the backward arrow
import { useGlobalContext } from '../../../../../context/GlobalProvider';
import { router } from 'expo-router';

const PatientDetails = ({ navigation }) => {

  const{selectedItem} = useGlobalContext();
  const [isEditing, setIsEditing] = useState(false);


  // Form data (stored in state)
  const [idNumber, setIdNumber] = useState(selectedItem.birthID);
  const [name, setName] = useState(selectedItem.names);
  const [surname, setSurname] = useState(selectedItem.surname);
  const [gender, setGender] = useState(selectedItem.gender)
  const [insuranceName, setInsuranceName] = useState(selectedItem.insuranceName);
  const [insuranceNumber, setInsuranceNumber] = useState(selectedItem.insuranceNo);
  const [contactInfo, setContactInfo] = useState(selectedItem.contactNo+","+selectedItem.email);
  const [emergencyContact, setEmergencyContact] = useState(selectedItem.emergencyContact);

  // Function to handle saving the details (this can later be used to send data back to a database)
  const handleSave = () => {
    setIsEditing(false);

    const updatedDetails = {
      idNumber,
      name,
      surname,
      gender,
      insuranceName,
      insuranceNumber,
      contactInfo,
      emergencyContact,
    };

    // Send updatedDetails to the database here (e.g., Firebase, API call)
    console.log('Updated patient details:', updatedDetails);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.header}>
          {/* Backward Arrow */}
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>

          {/* Edit Button */}
          <TouchableOpacity
            onPress={() => (isEditing ? handleSave() : setIsEditing(true))}
            style={styles.editButton}
          >
            <Text style={styles.editButtonText}>{isEditing ? 'Save' : 'Edit'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Patient details</Text>

          {/* ID Number (non-editable) */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>ID Number</Text>
            <TextInput
              style={styles.input}
              value={idNumber}
              editable={false} // ID Number cannot be edited
              placeholder="Id number"
            />
          </View>

          {/* Name */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Names</Text>
            <TextInput
              style={styles.input}
              value={name}
              editable={isEditing}
              onChangeText={setName}
              placeholder="Names"
            />
          </View>

          {/* Surname */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Surname</Text>
            <TextInput
              style={styles.input}
              value={surname}
              editable={isEditing}
              onChangeText={setSurname}
              placeholder="Surname"
            />
          </View>

          {/* Gender */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Gender</Text>
            <TextInput
              style={styles.input}
              value={gender}
              editable={isEditing}
              onChangeText={setGender}
              placeholder="Gender"
            />
          </View>

          {/* Insurance Name */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Insurance Name</Text>
            <TextInput
              style={styles.input}
              value={insuranceName}
              editable={isEditing}
              onChangeText={setInsuranceName}
              placeholder="Insurance name"
            />
          </View>

          {/* Insurance Number */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Insurance Number</Text>
            <TextInput
              style={styles.input}
              value={insuranceNumber}
              editable={isEditing}
              onChangeText={setInsuranceNumber}
              placeholder="Insurance number"
            />
          </View>

          {/* Contact Information */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Contact Information</Text>
            <TextInput
              style={styles.input}
              value={contactInfo}
              editable={isEditing}
              onChangeText={setContactInfo}
              placeholder="Contact information"
            />
          </View>

          {/* Emergency Contact */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Emergency Contact Information</Text>
            <TextInput
              style={styles.input}
              value={emergencyContact}
              editable={isEditing}
              onChangeText={setEmergencyContact}
              placeholder="Emergency contact information"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  editButton: {
    padding: 8,
    backgroundColor: '#66cc33',
    borderRadius: 8,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
});

export default PatientDetails;