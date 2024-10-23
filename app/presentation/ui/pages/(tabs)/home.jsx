import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, SafeAreaView, ScrollView, TextInput, FlatList, Text,TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import Users from '../../components/UserManage';
import { Redirect, router, useRouter } from 'expo-router'; 
import * as ROUTES from '../../../utils/constants/routes';
import HomeCreate from '../../components/HomeCreate';
import CreatePatientFile from '../(standalone)/CreatePatientFile';


import Icon from 'react-native-vector-icons/Ionicons';
import { useGlobalContext } from '../../../../../context/GlobalProvider';
import { getAllPatientsFiles, getAllUsers } from '../../../../data/remote/firebase/firebase-querries';
import useFirebase from '../../../../domain/libs/fetchDataHook/useFirebase';
import { getUserRole } from '../../../utils/functions/functions';

 

export default function Dashboard() {

  const{initializing,userData,setSelectedItem,setPatients,patients} = useGlobalContext();
  const {data: users, isLoading,setData:setUsers} = useFirebase(getAllUsers)
  const {data: patientsData} = useFirebase(getAllPatientsFiles)


  useEffect(() => {
    setPatients(patientsData);
    setFilteredUsers(users)
  }, [patientsData],[users]);
  
  console.log("USERS DATA, HOME/DASHBOARD :" + users);
  console.log("PATIENTS DATA, HOME/DASHBOARD :" + patientsData);
  

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([users]);
  

  
  // set all loaded patients to global context
  
  

  


  

  

  

  const handleSearch = () => {
    
    const filtered = filteredUsers.filter(user =>
      user.userNames.toLowerCase().includes(searchQuery) ||
      user.userWorkID.toLowerCase().includes(searchQuery)
    );
    setFilteredUsers(filtered);
  };

  const handlePressItem =(item) =>{
    if(userData.userRole ==1){

      setSelectedItem(item)
      router.push(ROUTES.USER_DETAILS)
    }else{
      router.push(ROUTES.PATIENT_FILE)
    }
    
  }

  const renderUserItem = ({ item }) => (
    <TouchableOpacity style={styles.userCard} onPress={()=>{
      handlePressItem(item)
    }}>
      <Image source={require('../../../../../assets/Picture.png')} style={styles.userImage} />
      <Text style={styles.userName}>{item.userNames}</Text>
      <Text style={styles.userRole}>{getUserRole(item.userRole)}</Text>
      <TouchableOpacity style={styles.moreOptions}>
        <Icon name="ellipsis-vertical" size={20} color="#000" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const listHeader = () => (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../../../assets/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          
          value={searchQuery}
          
          
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Icon name="search" size={20} color="#aaa" />
        </TouchableOpacity>
      </View>


    </View>
  );

  if (isLoading) 
    return(
      <View
        style={{
          alignItems:'center',
          justifyContent: "center",
          flex:1,
        }}
      >
        <ActivityIndicator size="Large"/>
      </View>
  ) ;

  if(userData && userData.userRole ==1){
    return (
      <SafeAreaView style={styles.scrollView}>
        
  
        <FlatList
          data={filteredUsers}
          renderItem={renderUserItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={styles.usersList}
  
          ListHeaderComponent={listHeader}
        />
        {/* <Users/> */}
      </SafeAreaView>
    );

  }

  if(userData && userData.userRole >1 ){
    return (
      <SafeAreaView style={styles.scrollView}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Image source={require('../../../../../assets/logo.png')} style={styles.logo} />
            </View>
            <HomeCreate patients={patients} userData={userData} />
            
            
          </View>
          
        </ScrollView>
        {/* <Users/> */}
      </SafeAreaView>
    );
  }

  return (
    <Redirect href={ROUTES.WAITING_PAGE}/>
  );



}

const styles = StyleSheet.create({
  scrollView:{
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  logo: {
    width: 30,
    height: 30,
    marginTop: 30,
  },
  searchContainer: {
    //display: 'flex',
    marginTop: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    borderColor: '#D3D3D3',
    padding: 1,
    justifyContent: 'space-between',
    marginBottom: 20,
    elevation: 2,
    //height: 40,
  },
  searchInput: {
    marginTop: 1,
    ///height: 40,
    width: "80%",
    backgroundColor: '#F5F5F5',
    padding: 5,
    borderColor: 'none',
  },
  searchIcon: {
    marginRight: 10,
  },
  usersList: {
    paddingHorizontal: 10,
  },
  userCard: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  userRole: {
    fontSize: 14,
    color: '#A9A9A9',
  },
  moreOptions: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
