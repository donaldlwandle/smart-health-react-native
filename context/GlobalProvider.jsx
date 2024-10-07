import { createContext,useContext,useState,useEffect, Children } from "react";
import { getCurrentUserData } from "../app/data/remote/firebase/firebase-querries";
import { useRouter } from "expo-router";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "../app/data/remote/firebase/firebase-config";

const GlobalContext = createContext();

export const useGlobalContext =()=> useContext(GlobalContext);

const GlobalProvider =({children})=>{

    // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [patients, setPatients] = useState([]);
  const [userData, setUserData] = useState(null);
  const [ patientsRecords,setPatientsRecords] = useState([])
  const router =useRouter();
  


   // Handle user state changes
   const onAuthStateChanged =(user) => {
    console.log("onAuthStateChanged  :  " + user)
    
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = getAuth(firebaseApp).onAuthStateChanged(onAuthStateChanged);
    console.log("SUBSCRIBER  :  " + subscriber)
    return subscriber; // unsubscribe on unmount
    
  }, []);

  useEffect(() => {
    if(initializing) return;

    // const inPrivateGroup = segments[0] === ('/presentation/ui/pages/(tabs)')
    
    if(user ){

      if(user.emailVerified){
        getCurrentUserData(user.uid)
        .then((res)=>{
            if(res){
                setUserData(res)

            }else{
                setUserData(null)
            }
            
        })

        .catch((error)=>{
            console.log("GLOBAL STATE PROVIDER, GET USER DATA" + error.message)
        })
        .finally(()=>{
            router.replace('/presentation/ui/pages/(tabs)')
        })
        
      }else{
        router.replace('/presentation/ui/pages/(auth)/EmailVerification')
      }
       
    }else{
      router.replace('/presentation/ui/pages/(auth)')
      console.log("ROUTED OUT OF THE PRIVATE SEC")
    }


  }, [user,initializing]);

    return(
        <GlobalContext.Provider
            value={{
                user,
                setUser,
                userData,
                setUserData,
                initializing,
                selectedItem,
                setSelectedItem,
                patients,
                setPatients,
                patientsRecords,
                setPatientsRecords
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider