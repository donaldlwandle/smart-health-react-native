import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ResetPassword } from "./(auth)/ResetPassword";
import { VerifyAccount } from "./(auth)/VerifyAccount";
import { SignIn } from "./(auth)/SignIn";
import { RegisterScreen } from "./(auth)/Register";
// import Register from './(auth)';
// import ResetPassword from './(auth)';
// import VerifyAccount from './(auth)';

const Stack = 
createNativeStackNavigator();

const App = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="SignIn">

                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{title: 'SignIn'}}
                />
                
                
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{title: 'Register'}}
                />
                
                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPassword}
                    options={{title: 'RestPassword'}}
                />

                <Stack.Screen
                    name="VerifyAccount"
                    component={VerifyAccount}
                    options={{title: 'VerifyAccount'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App


