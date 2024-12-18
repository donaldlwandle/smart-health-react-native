import React, { useState } from 'react';
import { View, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ROUTES from '../../utils/constants/routes';
import { router } from 'expo-router';
import { getExistingPatient } from '../../utils/functions/functions';
import { useGlobalContext } from '../../../../context/GlobalProvider';

const HomeCreate = ({ patients, userData }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [patientData, setPatientData] = useState(null);
  const { setSelectedItem } = useGlobalContext();
  const [searchPerformed, setSearchPerformed] = useState(false);

  // Function to handle search by ID
  const handleSearch = () => {
    const foundPatient = getExistingPatient(patients, searchQuery);
    setPatientData(foundPatient);
    setSearchPerformed(true); // Mark that search has been performed
  };

  const handleItemSelect = () => {
    setSelectedItem(patientData);
    if (userData.userRole === 2) {
      router.push(ROUTES.PATIENT_FILE);
    } else {
      router.push(ROUTES.PATIENT_DETAILS);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Search Input */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#aaa" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search with ID number"
            value={searchQuery}
            onChangeText={setSearchQuery}
            keyboardType="numeric"
            
          />
        </View>

        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>

        {/* Conditional rendering based on role and search results */}
        {userData.userRole === 3 ? (
          <Text style={styles.title}>Manage patients files</Text>
        ) : (
          <View />
        )}

        {/* Display search results or fallback message */}
        {searchPerformed && !patientData ? (
          <View>
            <Text style={styles.noResultsText}>Sorry, no results found</Text>
          </View>
        ) : null}

        {patientData ? (
          <View style={styles.resultContainer}>
            <TouchableOpacity style={styles.placeholderBox} onPress={handleItemSelect}>
              <Image
                source={require('../../../../assets/Picture.png')}
                style={styles.profileImage}
              />
              <Text style={styles.nameText}>{patientData.names} {patientData.surname}</Text>
              <Text style={styles.idText}>{patientData.birthID}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          searchPerformed && userData.userRole === 3 && (
            <View style={styles.resultContainer}>
              <TouchableOpacity style={styles.placeholderBox} onPress={() => { router.push(ROUTES.CREATE_PATIENT); }}>
                <Icon name="plus" size={50} color="#aaa" />
                <Text style={styles.placeholderText}>Create new file</Text>
              </TouchableOpacity>
            </View>
          )
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    padding: 20,
    backgroundColor: '#ffff',
    paddingTop: 10,
  },
  searchContainer: {
    marginTop: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    borderColor: '#D3D3D3',
    paddingHorizontal: 10,
    marginBottom: 20,
    elevation: 2,
    height: 40,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    height: 40,
    paddingLeft: 10,
    margin: 15,
    backgroundColor: '#F5F5F5',
  },
  searchButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginTop: 30,
  },
  noResultsText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  resultContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 2,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  idText: {
    fontSize: 16,
    color: '#666',
  },
  placeholderBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: '100%',
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 10,
    marginBottom: 20,
  },
  placeholderText: {
    marginTop: 10,
    fontSize: 18,
    color: '#aaa',
    opacity: 0.7,
  },
});

export default HomeCreate;
