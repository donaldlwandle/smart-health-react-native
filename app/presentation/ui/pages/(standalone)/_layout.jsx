import React from 'react'
import { Stack } from "expo-router"

const StandaloneLayout = () => {

    const screenOptions = {headerShown : false}
    return (
      <>
        <Stack screenOptions={screenOptions}>
          <Stack.Screen
            name='CreatePatientFile'
            options={screenOptions}
          />

          <Stack.Screen
            name='ChangePassword'
            options={screenOptions}
          />

          <Stack.Screen
            name='PersonalDetails'
            options={screenOptions}
          />

          <Stack.Screen
            name='PatientsMedicalRecords'
            options={screenOptions}
          />

          <Stack.Screen
            name='Terms'
            options={screenOptions}
          />

          <Stack.Screen
            name='CreateMedicalFile'
            options={screenOptions}
          />

          <Stack.Screen
            name='PatientDetails'
            options={screenOptions}
          />

          <Stack.Screen
            name='WaitingPage'
            options={screenOptions}
          />

          <Stack.Screen
            name='Vitals'
            options={screenOptions}
          />

          <Stack.Screen
            name='Treatment'
            options={screenOptions}
          />

          

          <Stack.Screen
            name='MedicalHistory'
            options={screenOptions}
          />

          
  
          
        </Stack>
      </>
      
    )
  }
  
  export default StandaloneLayout