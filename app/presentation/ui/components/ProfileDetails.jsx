import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileDetails = () => {
  return (
    <View style={styles.profileContainer}>
      {/* Profile Card */}
      <View style={styles.profileCard}>
        <Image 
          source={require('../../../../assets/Picture.png')} 
          style={styles.profileImage} 
        />
        <Text style={styles.profileName}>Intial. Surname</Text>
        <Text style={styles.profileRole}>Occupation</Text>
      </View>

      {/* Account Details */}
      <View style={styles.accountDetails}>
        <AccountItem title="Personal details" icon="person-outline" />
        <AccountItem title="Passwords and security" icon="shield-outline" />
      </View>
    </View>
  );
};

const AccountItem = ({ title, icon }) => {
  return (
    <TouchableOpacity style={styles.accountItem}>
      <Icon name={icon} size={24} color="#000" />
      <Text style={styles.accountText}>{title}</Text>
      <Icon name="chevron-forward-outline" size={24} color="#000" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    marginVertical: 20,
  },
  profileCard: {
    alignItems: 'center',
    marginVertical: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  profileRole: {
    fontSize: 18,
    color: '#A9A9A9',
  },
  accountDetails: {
    marginVertical: 20,
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
  },
  accountText: {
    flex: 1,
    fontSize: 18,
    color: '#000',
    marginLeft: 10,
  },
});

export default ProfileDetails;
