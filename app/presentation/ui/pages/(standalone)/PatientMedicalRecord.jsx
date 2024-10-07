import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, BackHandler } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons including the back arrow
import { useGlobalContext } from '../../../../../context/GlobalProvider';
import { getExistingPatient } from '../../../utils/functions/functions';
import { router } from 'expo-router';

const PatientMedicalRecord = () => {

  const{selectedItem,setSelectedItem,patients} = useGlobalContext();
  // State for toggling sections
  const [activeSections, setActiveSections] = useState({
    clinicalNotes: false,
    medicationRecords: false,
    diagnosticTestResults: false,
    vital: false,
    dischargeSummaries: false,
  });


  useEffect(() => {
    const backAction = () => {
      handleBackToggle();
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  console.log("RECORD, VIEW RECORD : "+ selectedItem)

  // Function to toggle section visibility
  const toggleSection = (section) => {
    setActiveSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  const handleBackToggle =()=>{
    setSelectedItem(getExistingPatient(patients, selectedItem.patientID))
    router.back()
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.header}>
          {/* Backward Arrow */}
          <TouchableOpacity onPress={()=>{handleBackToggle()}}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Patient medical record</Text>

          {/* Single Box for All Sections */}
          <View style={styles.sectionBox}>
            {/* Vital Section */}
            <TouchableOpacity onPress={() => toggleSection('vital')} style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Vitals</Text>
              <Ionicons
                name={activeSections.vital ? 'chevron-up' : 'chevron-down'}
                size={20}
                color="black"
              />
            </TouchableOpacity>
            {activeSections.vital && (
              <View style={styles.sectionContent}>
                <Text>{"Temperature : "+ selectedItem.temperature}</Text>
                <Text>{"Heart rate : "+ selectedItem.heartRate}</Text>
                <Text>{"Respiration rate : "+ selectedItem.respRate}</Text>
              </View>
            )}

            <View style={styles.divider} />




            {/* Clinical Notes */}
            <TouchableOpacity onPress={() => toggleSection('clinicalNotes')} style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Treatment</Text>
              <Ionicons
                name={activeSections.clinicalNotes ? 'chevron-up' : 'chevron-down'}
                size={20}
                color="black"
              />
            </TouchableOpacity>
            {activeSections.clinicalNotes && (
              <View style={styles.sectionContent}>
                <Text>{"Diagnosis : "+ selectedItem.diagnosis}</Text>
                <Text>{"Prescription : "+ selectedItem.prescription}</Text>
                <Text>{"Treatment plan : "+ selectedItem.plan}</Text>
                <Text>{"Dosage instructions : "+ selectedItem.dosage}</Text>
                <Text>{"Date of treatment : "+ selectedItem.timestamp}</Text>
                <Text>{"Follow-up date : "+ selectedItem.followup}</Text>
              </View>
            )}

            <View style={styles.divider} />

            {/* Medication Records */}
            <TouchableOpacity onPress={() => toggleSection('medicationRecords')} style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Medication History</Text>
              <Ionicons
                name={activeSections.medicationRecords ? 'chevron-up' : 'chevron-down'}
                size={20}
                color="black"
              />
            </TouchableOpacity>
            {activeSections.medicationRecords && (
              <View style={styles.sectionContent}>
                <Text>{"Conditions : "+ selectedItem.conditions}</Text>
                <Text>{"Allergies : "+ selectedItem.allergies}</Text>
                <Text>{"Medication : "+ selectedItem.medication}</Text>
              </View>
            )}

            
            
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
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  container: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionBox: {
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3, // Shadow for Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // Shadow for iOS
    shadowOpacity: 0.3,
    shadowRadius: 2,
    paddingVertical: 8, // Padding inside the container
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  sectionContent: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 16, 
  },
});

export default PatientMedicalRecord;




