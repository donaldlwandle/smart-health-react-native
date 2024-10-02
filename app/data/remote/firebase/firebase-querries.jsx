import { collection,addDoc, setDoc,doc,getFirestore,query,where,getDocs} from "firebase/firestore";
import { firebaseApp } from "./firebase-config";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";



// Get Logged in user data from our Google cloud Firebase Firestore
export const getCurrentUserData =async(userID)=>{
    try{
        // const [{firebaseApp}] = UseStateValue();

        const q = query(collection(getFirestore(firebaseApp), "users"), where("userID", "==", userID));
        const querySnapshot = await getDocs(q);

        const [userData] = await querySnapshot.docs.map((item)=>({
            ...item.data(),
            docId:item.id

        }));

        return userData;

    }catch(error){
        console.log("GET USER DATA ERROR, FIREBASE_QUERY :" + error.message)
    };
    
}


// Create a new user account with email and password and store their profile/user data in our Google cloud Firebase Firestore
export const createNewUserAccount= async(userObject, password)=>{
    try {
        await createUserWithEmailAndPassword(
            getAuth(firebaseApp),
            userObject.userEmail,
            password
          ).then((userCredential)=>{
  
            const user = userCredential.user;
            userObject['userID']=user.uid;
  
            
            setDoc(doc(getFirestore(firebaseApp),"users",user.uid),userObject)
            .then(()=>{
              sendEmailVerification(user)
  
            })
            .catch((error)=>{
                console.log("CREATE NEW USER ACCOUNT, SEND VERIFICATION ERROR, FIREBASE_QUERY :" + error.message);
                throw new Error(error);
    
            })

            
          })
          .catch((error)=>{
            console.log("CREATE NEW USER ACCOUNT ERROR CREATE WITH EMAIL_AND_PWORD, FIREBASE_QUERY :" + error.message);
            throw new Error(error);

          })
        
    } catch (error) {
        console.log("CREATE NEW USER ACCOUNT ERROR, FIREBASE_QUERY :" + error.message);
        throw new Error(error);
    }
}

// Authenticate a returning users from our Google cloud Firebase Authentication
export const signInUser= async(email,password)=>{
    try {
        await signInWithEmailAndPassword(
            getAuth(firebaseApp),
            email.toLowerCase(),
            password
          )
        
    } catch (error) {
        console.log("SIGN IN USER ERROR, FIREBASE_QUERY :" + error.message);
        throw new Error(error);
    }
} 