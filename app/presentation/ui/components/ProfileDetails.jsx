import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PersonalDetails from '../pages/(standalone)/PersonalDetails';
import { router } from 'expo-router';
import { getUserRole } from '../../utils/functions/functions';
import * as ROUTES from '../../utils/constants/routes';


const ProfileDetails = ( {userData}) => {
  return (
    <View style={styles.container}>
     
      <View style={styles.profileContainer}>
        <Image
          source={require('../../../../assets/Picture.png')} // Profile image placeholder
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{userData.userTitle+" "+ userData.userNames}</Text>
        <Text style={styles.profileOccupation}>{getUserRole(userData.userRole)}</Text>
      </View>

      {/* Account Details Section */}
      <Text style={styles.sectionTitle}>Account Details</Text>

     
      <TouchableOpacity
        style={styles.accountItem}
        onPress={() => {
          // Navigate to Personal Details Screen
          router.push(ROUTES.USER_PROFILE_PERSONAL_DETAILS)
        }}
      >
        <View style={styles.itemContent}>
          <Icon name="person-outline" size={24} color="black" />
          <Text style={styles.itemText}>Personal details</Text>
        </View>
        <Icon name="chevron-right" size={24} color="black" />
      </TouchableOpacity>

     
      <TouchableOpacity
        style={styles.accountItem}
        onPress={() => {
          // Navigate to Password and Security Screen
          router.push('/presentation/ui/pages/(standalone)/ChangePassword')
        }}
      >
        <View style={styles.itemContent}>
          <Icon name="security" size={24} color="black" />
          <Text style={styles.itemText}>Passwords and security</Text>
        </View>
        <Icon name="chevron-right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 20,
    marginTop: 20,
    paddingTop: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 3, // for shadow on Android
    shadowColor: '#000', // for shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileOccupation: {
    fontSize: 14,
    color: '#888',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  accountItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3, // for shadow on Android
    shadowColor: '#000', // for shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default ProfileDetails;