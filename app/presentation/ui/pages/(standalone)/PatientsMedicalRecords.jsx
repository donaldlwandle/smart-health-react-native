import { router } from 'expo-router';
import React, { useState ,useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useGlobalContext } from '../../../../../context/GlobalProvider';
import * as ROUTES from '../../../utils/constants/routes';
import useFirebase from '../../../../domain/libs/fetchDataHook/useFirebase';
import { getAllPatientMedicalRecords, getAllPatientsFiles } from '../../../../data/remote/firebase/firebase-querries';
import { getBeforeFirstComma } from '../../../utils/functions/functions';


const PatientMedicalRecords = () => {
  const{selectedItem,setSelectedItem,patientsRecords,setPatientsRecords} = useGlobalContext();
  
  
  const [isLoading, setIsLoading,] = useState(false);

  useEffect(() => {
    const  fetchData = async ()=>{
      setIsLoading(true);

      try {
        const response = await getAllPatientMedicalRecords(selectedItem.birthID);
        if(response){
          setPatientsRecords([response]);
        }else{
          setPatientsRecords([{
            date: '',
            purpose: '',
            diagnosis: '',
            doctor: '',
            timestamp:'',
            purposeOfVisit:""
          }]);
        }
        
        
      } catch (error) {
        console.log("FETCH DATA, PATIENTS_MEDICAL_RECORDS :" + error.message);
        Alert.alert("Error",error.message)
        
        
      }finally{
        setIsLoading(false);
      }

    }
  

    fetchData();
    
    
    
  }, [])
  

  const [filter, setFilter] = useState('Recent');
  const [showPersonalDetails, setShowPersonalDetails] = useState(false);
  const [showMedicalHistory, setShowMedicalHistory] = useState(false);

  const medicalRecords = [
    {
      date: '2024-09-15',
      purpose: 'Emergency',
      diagnosis: 'Chest Pains',
      doctor: 'Dr. Smith',
    },
    {
      date: '2024-09-10',
      purpose: 'Check Up',
      diagnosis: 'Hypertension',
      doctor: 'Dr. Johnson',
    },
    {
      date: '2024-09-08',
      purpose: 'Follow Up',
      diagnosis: 'Fracture',
      doctor: 'Dr. Brown',
    },
    {
      date: '2024-08-25',
      purpose: 'Routine Check',
      diagnosis: 'Cold',
      doctor: 'Dr. White',
      
    },
  ];

  // Filtering logic
  const getFilteredRecords = () => {
    const currentDate = new Date();
    return patientsRecords.filter((record) => {
      const recordDate = new Date(record.timestamp);
      if (filter === 'Recent') return true; // Show all records
      //if (filter === 'Recent') {
      // const recentCutoff = new Date();
      // recentCutoff.setDate(currentDate.getDate() - 7); // Last 7 days
      // return recordDate >= recentCutoff; // Show records from the last week
      // }
      if (filter === 'Oldest') {
        const oldestCutoff = new Date();
        oldestCutoff.setDate(currentDate.getDate() - 30); // Older than 30 days
        return recordDate < oldestCutoff; // Show records older than 30 days
      }
      return true;
    });
  };

  const toggleDetails = (type) => {
    if (type === 'Personal') {
      setShowPersonalDetails(!showPersonalDetails);
    } else {
      setShowMedicalHistory(!showMedicalHistory);
    }
  };

  const handleFilterPress = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const handleItemSelect =(record)=>{
    console.log("Handle item press executed")
    setSelectedItem(record)
    router.push(ROUTES.VIEW_RECORD)
    
  }

  
  const filteredRecords = getFilteredRecords(); // Get filtered records

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Patient Medical Records</Text>

        <View style={styles.detailsBox}>
          <TouchableOpacity
            onPress={() => toggleDetails('Personal')}
            style={styles.detailsItem}>
            <Text style={styles.detailsText}>Personal Details</Text>
            <Icon name="chevron-down" size={20} color="#000" />
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity
            onPress={() => toggleDetails('Medical')}
            style={styles.detailsItem}>
            <Text style={styles.detailsText}>Medical History</Text>
            <Icon name="chevron-down" size={20} color="#000" />
          </TouchableOpacity>
          {/* Conditionally render details here based on state */}
          {showPersonalDetails && (
            <View>
              <Text style={styles.detailsContent}>{"Names : "+selectedItem.names+ " " + selectedItem.surname }</Text>
              <Text style={styles.detailsContent}>{"Contacts : "+selectedItem.contactNo}</Text>
              <Text style={styles.detailsContent}>{"Email : "+ selectedItem.email}</Text>
              <Text style={styles.detailsContent}>{"Emergency contact : "+selectedItem.emergencyContact}</Text>
              <Text style={styles.detailsContent}>{"Address : "+selectedItem.address}</Text>
              <Text style={styles.detailsContent}>{"Languages : "+selectedItem.languages}</Text>
              <Text style={styles.detailsContent}>{"Date of birth : "+selectedItem.dateOfBirth}</Text>
              <Text style={styles.detailsContent}>{"ID no : "+selectedItem.birthID}</Text>
              <Text style={styles.detailsContent}>{"Gender : "+selectedItem.gender}</Text>
              <Text style={styles.detailsContent}>{"Race : "+selectedItem.race}</Text>
              <Text style={styles.detailsContent}>{"Insurance name : "+selectedItem.insuranceName}</Text>
              <Text style={styles.detailsContent}>{"Insurance number : "+selectedItem.insuranceNo}</Text>

            </View>
          )}
          {showMedicalHistory && (
            <Text style={styles.detailsContent}>
              History of Hypertension...
            </Text>
          )}
        </View>

        <View style={styles.filterMenu}>
          {['Recent', 'Oldest'].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.filterItem,
                filter === item && styles.activeFilter,
              ]}
              onPress={() => handleFilterPress(item)}>
              <Text
                style={[
                  styles.filterText,
                  filter === item && styles.activeFilterText,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Add Medical Record Section */}
        <TouchableOpacity style={styles.addRecordContainer} onPress={()=>{router.push(ROUTES.CREATE_MEDICAL_RECORD)}}>
          <Icon name="add-circle" size={25} color="green" /> 
          <Text style={styles.addRecordText}>Create new record</Text>
        </TouchableOpacity>

        {/* Summary of Medical Records */}
        <View style={styles.recordsContainer}>
          {filteredRecords.map((record, index) => (
            <TouchableOpacity key={index} style={styles.recordItem} onPress={()=>{
              handleItemSelect(record)
            }}>
              <View style={styles.recordHeader}>
                <Text style={styles.recordDate}>{record.timestamp}</Text>
                <Text style={styles.recordPurpose}>{record.purposeOfVisit}</Text>
              </View>
              <View style={styles.recordFooter}>
                <Text style={styles.recordDiagnosis}>{record.diagnosis}</Text>
                <Text style={styles.recordDoctor}>{record.doctor}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center', // Center the title
  },
  detailsBox: {
    width: 358, // Set width to 358
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
    alignSelf: 'center', // Center the box horizontally
  },
  detailsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  detailsText: {
    fontSize: 18,
    flex: 1, // Allow text to take available space
  },
  separator: {
    height: 1,
    backgroundColor: '#D3D3D3',
  },
  detailsContent: {
    padding: 10,
    fontSize: 16,
    color: '#666',
  },
  filterMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginTop: 20,
  },
  filterItem: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    width: 82,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeFilter: {
    backgroundColor: '#000',
  },
  filterText: {
    color: '#000',
  },
  activeFilterText: {
    color: '#FFFFFF',
  },
  addRecordContainer: {
    width: 358,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
    alignSelf: 'center', // Center the box horizontally
  },
  addRecordText: {
    fontSize: 18,
    color: '#green',
    marginTop: 10,
  },
  recordsContainer: {
    marginTop: 1,
    alignSelf: 'center',
  },
  recordItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
    width: 358, // Set the width to 358
    height: 60, // Set the height to 60
  },
  recordHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  recordDate: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500', // Semi-bold text
    opacity: 0.5,
  },
  recordPurpose: {
    fontSize: 16,
    color: '#000',
    marginLeft: 7, // Space between date and purpose (1px apart)
    fontWeight: '600', // Semi-bold text
  },
  recordFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 3,
    marginLeft: 2,
  },
  recordDiagnosis: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600', // Semi-bold text
  },
  recordDoctor: {
    fontSize: 16,
    color: '#000',
    marginLeft: 7, // Space between diagnosis and doctor's name (1px apart)
    fontWeight: '500', // Semi-bold text
  },
});

export default PatientMedicalRecords;