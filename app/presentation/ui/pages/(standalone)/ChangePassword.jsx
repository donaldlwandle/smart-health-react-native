import React, { useState } from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you install react-native-vector-icons
import { useGlobalContext } from '../../../../../context/GlobalProvider';
import { router } from 'expo-router';
import { resetUserPassword } from '../../../../data/remote/firebase/firebase-querries';
import { getAuth } from 'firebase/auth';
import { firebaseApp } from '../../../../data/remote/firebase/firebase-config';


const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dbError, setDbError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const{userData} = useGlobalContext();

  const handleChangePassword = async() => {
    // Reset error messages
    if(userData){
      setIsLoading(true)
      try{
        await resetUserPassword(userData.userEmail)
        .then(() => {
          Alert.alert('Success', 'A password reset link has been sent to your email');
          getAuth(firebaseApp).signOut(); ;
        })

      }catch (err) {
        setDbError(err.message); // Display validation error
        console.log("RESET PASSWORD ERROR, CHANGE PWRD PAGE :" + error.message);

      }finally{
        
        setIsLoading(false)
      }
      
      
    }
  };

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

  return (
    <View style={styles.container}>
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{ router.back()}}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.title}>Change Your Passowrd</Text>
      <Text style={styles.subtitle}>A link will be sent to your email address to change your password</Text>
      
      
      {dbError ? <Text style={styles.errorText}>{dbError}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    marginTop: 16,
    fontWeight: '600', 
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 8,
    fontWeight: '600', 
    opacity: 0.7,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    height: 40,
    width: 358,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  }
});

export default ChangePassword;
