import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import ProfileDetails from '../../components/ProfileDetails';
import { useGlobalContext } from '../../../../../context/GlobalProvider';
;

export default function ProfileScreen() {

  const{initializing,userData} = useGlobalContext();


  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <ProfileDetails userData={userData} />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    marginTop: 30,
  },
});
