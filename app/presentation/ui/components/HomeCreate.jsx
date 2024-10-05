import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ROUTES from '../../utils/constants/routes';
import { router } from 'expo-router';
import { getExistingPatient } from '../../utils/functions/functions';
import { useGlobalContext } from '../../../../context/GlobalProvider';





const HomeCreate = ({patients,userData}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [patientData, setPatientData] = useState(null);
  const{setSelectedItem} = useGlobalContext();

  // Mock data to simulate search result
  const mockData = {
    id: '123456789',
    name: 'John Doe',
    surname: 'Doe',
    image: 'https://via.placeholder.com/150', // placeholder image
  };

  // Function to handle search by ID
  const handleSearch = () => {
    setPatientData(getExistingPatient(patients,searchQuery));
  };

  const handleItemSelect =()=>{
    setSelectedItem(patientData)
    if(userData.userRole ===2){
      router.push(ROUTES.PATIENT_FILE)
    }else{
      router.push(ROUTES.PATIENT_DETAILS)
    }

  }

  return (
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

      <Text style={styles.title}>Create a patient file</Text>

      {/* Conditional Rendering of Search Result */}
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

        

        <View style={styles.resultContainer}>
          <TouchableOpacity style={styles.placeholderBox} onPress={()=>{router.push(ROUTES.CREATE_PATIENT)}}>
            <Icon name="plus" size={50} color="#aaa" />
            <Text style={styles.placeholderText}>Create new file</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    padding: 20,
    backgroundColor: '#ffff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: 'green',
    paddingHorizontal: 10,
    marginBottom: 20,
    elevation: 2,
    height: 30,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    borderColor: 'green',
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
