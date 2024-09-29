import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import ProfileDetails from '../../components/ProfileDetails';
;

export default function ProfileScreen() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <ProfileDetails />
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
