import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, ScrollView } from 'react-native';
import Users from '../../components/UserManage';
import { useRouter } from 'expo-router'; 
import * as ROUTES from '../../../utils/constants/routes';
import HomeCreate from '../../components/HomeCreate';

 

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.scrollView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={require('../../../../../assets/logo.png')} style={styles.logo} />
          </View>
          
          <HomeCreate/>
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
});
