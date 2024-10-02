import React, { useState } from 'react';
import { StyleSheet, View, Image, SafeAreaView, ScrollView, TextInput, FlatList, Text,TouchableOpacity } from 'react-native';
import Users from '../../components/UserManage';
import { useRouter } from 'expo-router'; 
import * as ROUTES from '../../../utils/constants/routes';
import HomeCreate from '../../components/HomeCreate';
import CreatePatientFile from '../(standalone)/CreatePatientFile';


import Icon from 'react-native-vector-icons/Ionicons';
import { useGlobalContext } from '../../../../../context/GlobalProvider';
 
const usersData = [
  { id: '1', name: 'R. Wayne', role: 'Nurse', image: require('../../../../../assets/Picture.png') },
  { id: '2', name: 'W. Warren', role: 'Nurse', image: require('../../../../../assets/Warren.png') },
  // ... Will add more users here
];
export default function Dashboard() {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(usersData);
  const{initializing,userData} = useGlobalContext();

  

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = usersData.filter(user =>
      user.name.toLowerCase().includes(text.toLowerCase()) ||
      user.role.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const renderUserItem = ({ item }) => (
    <View style={styles.userCard}>
      <Image source={item.image} style={styles.userImage} />
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userRole}>{item.role}</Text>
      <TouchableOpacity style={styles.moreOptions}>
        <Icon name="ellipsis-vertical" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );

  const listHeader = () => (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../../../assets/logo.png')} style={styles.logo} />
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#A9A9A9"
        value={searchQuery}
        onChangeText={handleSearch}

      />
      
      
    </View>
  );

  if(userData && userData.userRole ==1){
    return (
      <SafeAreaView style={styles.scrollView}>
        
  
        <FlatList
          data={filteredUsers}
          renderItem={renderUserItem}
          keyExtractor={item => item.id}
          numColumns={3}
          contentContainerStyle={styles.usersList}
  
          ListHeaderComponent={listHeader}
        />
        {/* <Users/> */}
      </SafeAreaView>
    );

  }
  return (
    <SafeAreaView style={styles.scrollView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={require('../../../../../assets/logo.png')} style={styles.logo} />
          </View>
          
          <HomeCreate handlePress = {ROUTES.CREATE_PATIENT} />
        </View>
        
      </ScrollView>
      {/* <Users/> */}
    </SafeAreaView>
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
    width: 50,
    height: 50,
  },

  searchInput: {
    height: 40,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    margin: 15,
    backgroundColor: '#F5F5F5',
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
