import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, TouchableOpacity, Image, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserDetails = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [email] = useState('Wade.Warren@icloud.com');
  const [workId] = useState('11006356889');
  const [permissions, setPermissions] = useState('Access to patient medical files');

  // Toggle Edit/Save 
  const toggleEditMode = () => {
    setIsEditable(!isEditable);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        {/* Back Icon */}
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="black" style={styles.backIcon} />
        </TouchableOpacity>

        {/* Edit/Save Button */}
        <TouchableOpacity onPress={toggleEditMode} style={styles.editButtonContainer}>
          <Text style={styles.editButtonText}>{isEditable ? 'Save' : 'Edit'}</Text>
        </TouchableOpacity>
      </View>

      {/* User Profile Card */}
      <View style={styles.profileCard}>
        {/* Profile Image */}
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with actual image URL or local asset
          style={styles.profileImage}
        />
        <Text style={styles.userName}>W. Warren</Text>
        <Text style={styles.userRole}>Nurse</Text>
      </View>

      {/* Email Field (Non-editable) */}
      <Text style={styles.label}>Email address</Text>
      <TextInput
        style={styles.input}
        value={email}
        editable={false}
      />

      {/* Work ID Field (Non-editable) */}
      <Text style={styles.label}>Work ID</Text>
      <TextInput
        style={styles.input}
        value={workId}
        editable={false}
      />

      {/* Access and Permissions Dropdown */}
      <Text style={styles.label}>Access and Permissions</Text>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={permissions}
          style={[styles.dropdown, isEditable ? styles.editableDropdown : styles.nonEditableDropdown]}
          enabled={isEditable} // Only enable dropdown when in Edit mode
          onValueChange={(itemValue) => setPermissions(itemValue)}
        >
          <Picker.Item label="None" value="None" />
          <Picker.Item label="Access to patient files" value="Access to patient files" />
          <Picker.Item label="Access to patient medical files" value="Access to patient medical files" />
        </Picker>
        {/* Dropdown Icon */}
        {isEditable && <Icon name="arrow-drop-down" size={24} color="gray" style={styles.dropdownIcon} />}
      </View>

      {/* Block User Button */}
      <TouchableOpacity style={styles.blockButton}>
        <Text style={styles.blockButtonText}>Block User</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backIcon: {
    marginBottom: 20,
  },
  editButtonContainer: {
    backgroundColor: '#28A745', // Green color for the Edit/Save button background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  editButtonText: {
    fontSize: 16,
    color: '#FFFFFF', // White color for the button text
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 2, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userRole: {
    fontSize: 16,
    color: '#6C757D',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderColor: 'rgba(30, 30, 30, 0.03)', 
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
  },
  dropdown: {
    flex: 1,
    paddingLeft: 10,
    color: '#000',
  },
  editableDropdown: {
    backgroundColor: '#FFF',
  },
  nonEditableDropdown: {
    backgroundColor: '#F5F5F5',
  },
  dropdownIcon: {
    paddingRight: 10,
  },
  blockButton: {
    backgroundColor: '#DC3545', // Red color for Block User
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  blockButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserDetails;

