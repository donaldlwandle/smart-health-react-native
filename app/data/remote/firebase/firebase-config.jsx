
import { initializeApp } from "firebase/app";
import { initializeAuth,getAuth,getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

  const firebaseConfig = {
    apiKey: "AIzaSyBK2ALL9Wd9g5YlGUZLhL5aAE5_hSuPQK0",
    authDomain: "smart-health-ae1cb.firebaseapp.com",
    projectId: "smart-health-ae1cb",
    storageBucket: "smart-health-ae1cb.appspot.com",
    messagingSenderId: "576186942286",
    appId: "1:576186942286:web:8d12a691d62917621c941f",
    measurementId: "G-V31RSG4KL5"
  };

  

export const firebaseApp = initializeApp(firebaseConfig);

initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

