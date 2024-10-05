import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons including the back arrow

const PatientMedicalRecord = ({ navigation }) => {
  // State for toggling sections
  const [activeSections, setActiveSections] = useState({
    clinicalNotes: false,
    medicationRecords: false,
    diagnosticTestResults: false,
    vital: false,
    dischargeSummaries: false,
  });

  // Function to toggle section visibility
  const toggleSection = (section) => {
    setActiveSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.header}>
          {/* Backward Arrow */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Patient medical record</Text>

          {/* Single Box for All Sections */}
          <View style={styles.sectionBox}>
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
                <Text>Details about Clinical notes go here...</Text>
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
                <Text>Details about Medication History go here...</Text>
              </View>
            )}

            <View style={styles.divider} />
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
                <Text>Details about Vital go here...</Text>
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




