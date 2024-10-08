import { getAuth } from 'firebase/auth';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { firebaseApp } from '../../../../data/remote/firebase/firebase-config';

export default function SettingsScreen({ navigation }) {

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => {
            // Logic for logging out, such as clearing authentication tokens
            getAuth(firebaseApp).signOut(); 
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingsCard}>
        {/* About Section */}
        <TouchableOpacity style={styles.settingsItem}>
          <Icon name="information-circle-outline" size={24} color="#000" />
          <Text style={styles.settingsText}>Help</Text>
          <Icon name="chevron-forward-outline" size={24} color="#000" />
        </TouchableOpacity>
        
        {/* Logout Section */}
        <TouchableOpacity style={styles.settingsItem} onPress={handleLogout}>
          <Icon name="log-out-outline" size={24} color="red" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Navigation */}    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    marginTop: 38,
  },
  settingsCard: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 20,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  settingsText: {
    flex: 1,
    fontSize: 18,
    color: '#000',
    marginLeft: 10,
  },
  logoutText: {
    flex: 1,
    fontSize: 18,
    color: 'red',
    marginLeft: 10,
  },
});
