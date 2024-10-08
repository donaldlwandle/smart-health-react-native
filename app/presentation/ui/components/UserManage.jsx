import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';


import * as ROUTES from '../../utils/constants/routes';

const usersData = [
  { id: '1', name: 'R. Wayne', role: 'Nurse', image: require('../../../../assets/Picture.png') },
  { id: '2', name: 'W. Warren', role: 'Nurse', image: require('../../../../assets/Warren.png') },
  // ... Will add more users here
];

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(usersData);

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

  return (
    <View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#A9A9A9"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredUsers}
        renderItem={renderUserItem}
        keyExtractor={item => item.id}
        numColumns={3}
        contentContainerStyle={styles.usersList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginLeft: 10,
    marginRight:10,
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

export default Users;