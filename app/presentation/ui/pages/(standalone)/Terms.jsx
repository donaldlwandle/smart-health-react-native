import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router'; 
//import * as ROUTES from '../../../utils/constants/routes';


const Terms = () => {
  const router = useRouter(); // Use router for navigation

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Icon name="arrow-back" size={25} color="black" />
        <Text style={styles.backText}>Back to Sign Up</Text>
      </TouchableOpacity>

      {/* Bottom sheet */}
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>Terms and Conditions</Text>
          <Text style={styles.text}>
            By registering for and using the Service, you agree to be bound by these Terms. if you disagree with any part of the terms, you may not access the Service.

You agree to provide accurate, current, and complete information during the registration process and update such information to maintain its accuracy.You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to notify us immediately of any unauthorized access or use of your account. You agree to comply with all applicable local, national, and international laws, regulations, and ethical standards related to the use of this Service, including healthcare regulations such as HIPAA and POPIA.

You agree to use the Service only for its intended purpose, which is to manage and access patient healthcare data responsibly and ethically. You agree not to:
     - Use the Service for any unlawful purpose.
     - Access or attempt to access any part of the Service that you are not authorized to access.
     - Share your account credentials with unauthorized users.
     - Upload or transmit any harmful code, virus, or other material that could damage or disrupt the Service.

We reserve the right to terminate or suspend your account immediately, without prior notice or liability, if you breach any of these Terms and Conditions. We do not guarantee that the Service will be available at all times without interruption.
          </Text>
          {/* More terms and conditions */}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  backText: {
    fontSize: 18,
    marginLeft: 10,
    color: 'black',
  },
  content: {
    height: '80%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default Terms;
