import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { router } from 'expo-router';


const HelpScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity testID='backButton' onPress={()=>{ router.back()}}>
        <Icon name="arrow-back" size={24} color="black" style={styles.backIcon} />
      </TouchableOpacity>

      <Text style={styles.header}>Help</Text>
      <Text style={styles.subHeader}>CONTACT US.</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How can we help?</Text>

        {/* Question 1 */}
        <Text style={styles.question}>Reach out to us on the following platforms:</Text>
        <Text style={styles.answer}>
          Whatsapp: Send us a message,   +27 66 252 5896.
        </Text>

        <Text style={styles.answer}>
          Call: Give us a call,   +27 66 252 5896.
        </Text>
        <Text style={styles.answer}>
          Email: Or dend us an email,   helpdesk@smarthealth.com.
        </Text>
        

      </View>

      <Text style={styles.subHeader}>Find your answers below.</Text>

      <View style={styles.section}>
  
        <Text style={styles.sectionTitle}>1. Root User</Text>

        {/* Question 1 */}
        <Text style={styles.question}>Q: How to give users such as admins and nurses access permissions?</Text>
        <Text style={styles.answer}>
          A: On your home page, search for a user in the search input, click on the user box you will be directed to the user’s details.
        </Text>
        <Text style={styles.answer}>
          Click on “edit” scroll to access and permissions section and give them access permissions depending on which user they are. e.g Admin or nurse.
        </Text>

        {/* Question 2 */}
        <Text style={styles.question}>Q: How to block a user?</Text>
        <Text style={styles.answer}>
          A: On your home page, search for a user in the search input, click on the user box you will be directed to the user’s details.
        </Text>
        <Text style={styles.answer}>
          Scroll down to the very top of the page where you give access and click on the red button titled “Block User”.
        </Text>
        
        <Text style={styles.sectionTitle}>2. Admins</Text>

         <Text style={styles.question}>Q: How to create a patient file?</Text>
        <Text style={styles.answer}>
          A: Firstly ensure that the patient's file does not exist by searching with the patient's ID number.
        </Text>
        <Text style={styles.answer}>
         if no results are return you can proceed with creating a patient's file by clicking on the "Create patient file" box and follow the prompts to create a patient file.
        </Text>

        <Text style={styles.sectionTitle}>3. Nurse</Text>

        <Text style={styles.question}>Q: How to create a patient medical record?</Text>
        <Text style={styles.answer}>
          A: Firstly search for the patient using their ID number, the patient's profile should appear even if they donot have any medical records on the system,
        </Text>
        <Text style={styles.answer}>
         Proceed to click on the result "Patient Profile" you will redirected to a page that shows a list of patient medical records. Below the menu with "Recent" and "Oldest" there is a button for creating a medical record, click on it and follow the prompts to successfully create a medical record.
        </Text>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  backIcon: {
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  subHeader: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  question: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  answer: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
});

export default HelpScreen;

