import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useFirebase =(workFunction) =>{

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const  fetchData = async ()=>{
        setIsLoading(true);
  
        try {
          const response = await workFunction();
          setData(response);
          
        } catch (error) {
          console.log("FETCH DATA, USE_FIREBASE HOOK :" + error.message);
          Alert.alert("Error",error.message)
          
          
        }finally{
          setIsLoading(false);
        }
  
      }
    
  
      fetchData();
      
    }, [])
  
    return {data, isLoading,setData};

}

export default useFirebase;