import { collection,addDoc, setDoc,doc,getFirestore,query,where,getDocs, updateDoc} from "firebase/firestore";
import { firebaseApp } from "./firebase-config";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { removeObjectByPropertyValue } from "../../utils/utils";



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
        throw new Error(error)
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


// Create a patient file data in our Google cloud Firebase Firestore
export const createNewPatientFile= async(patientObject)=>{
    try {
        await setDoc(doc(getFirestore(firebaseApp),"patients",patientObject.birthID),patientObject)
    
        
    } catch (error) {
        console.log("CREATE PATIENT FILE ERROR, FIREBASE_QUERY :" + error.message);
        throw new Error(error);
    }
}

// Create a patient file data in our Google cloud Firebase Firestore
export const createNewMedicalRecord= async(recordObject)=>{
    try {
        await addDoc(collection(getFirestore(firebaseApp),"records"),recordObject)
    
        
    } catch (error) {
        console.log("CREATE NEW MEDICAL RECORD ERROR, FIREBASE_QUERY :" + error.message);
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

// Reset a returning users password from our Google cloud Firebase Authentication
export const resetUserPassword= async(email)=>{
    try {
        await sendPasswordResetEmail(getAuth(firebaseApp), email)
        
    } catch (error) {
        console.log("RESET PASSWORD ERROR, FIREBASE_QUERY :" + error.message);
        throw new Error(error);
    }
} 

// get all users  from our Google cloud Firebase Firestore
export const getAllUsers= async()=>{
    try {
        const q = query(collection(getFirestore(firebaseApp), "users"));
        const querySnapshot = await getDocs(q);

        const usersData = await querySnapshot.docs.map(doc=>({
            id:doc.id,
            ...doc.data()

        }));

        return removeObjectByPropertyValue( usersData);
        
    } catch (error) {
        console.log("GET ALL USERS, FIREBASE_QUERY :" + error.message);
        throw new Error(error);
    }
}


// get all patients  from our Google cloud Firebase Firestore
export const getAllPatientsFiles= async()=>{
    try {
        const q = query(collection(getFirestore(firebaseApp), "patients"));
        const querySnapshot = await getDocs(q);

        const patientsData = await querySnapshot.docs.map(doc=>({
            id:doc.id,
            ...doc.data()

        }));

        return patientsData;
        
    } catch (error) {
        console.log("GET ALL PATIENTS, FIREBASE_QUERY :" + error.message);
        throw new Error(error);
    }
}

// get all patients Medical files  from our Google cloud Firebase Firestore
export const getAllMedicalFiles= async()=>{
    try {
        const q = query(collection(getFirestore(firebaseApp), "patients"));
        const querySnapshot = await getDocs(q);

        const patientsData = await querySnapshot.docs.map(doc=>({
            id:doc.id,
            ...doc.data()

        }));

        return patientsData;
        
    } catch (error) {
        console.log("GET ALL PATIENTS, FIREBASE_QUERY :" + error.message);
        throw new Error(error);
    }
}

// Get patient medical records by their birthID from our Google cloud Firebase Firestore
export const getAllPatientMedicalRecords =async(patientID)=>{
    try{
        // const [{firebaseApp}] = UseStateValue();

        const q = query(collection(getFirestore(firebaseApp), "records"), where("patientID", "==", patientID));
        const querySnapshot = await getDocs(q);

        const recordsData = await querySnapshot.docs.map((item)=>({
            ...item.data(),
            docId:item.id

        }));

        return recordsData;

    }catch(error){
        console.log("GET A PATIENT MEDICAL RECORDS ERROR, FIREBASE_QUERY :" + error.message)
        throw new Error(error)
    };
    
}

// set user access roles and permissions Google cloud Firebase Firestore
export const setUserAccessPermission= async(userID, roleID)=>{
    try {

        const userRef = doc(getFirestore(firebaseApp), "users", userID);

        // Set the "userRole" field of the user to 'roleID'
        await updateDoc(userRef, {
        userRole: roleID
        });
        
    } catch (error) {
        console.log("UPDATE USER ROLES ERROR, FIREBASE_QUERY :" + error.message);
        throw new Error(error);
    }
}

// set user access roles and permissions Google cloud Firebase Firestore
export const updateUserSystemAccess= async(userID,access)=>{
    try {

        const userRef = doc(getFirestore(firebaseApp), "users", userID);

        // Set the "userRole" field of the user to 'roleID'
        await updateDoc(userRef, {
        userHasAccess: access
        });
        
    } catch (error) {
        console.log("UPDATE USER ACCESS ERROR, FIREBASE_QUERY :" + error.message);
        throw new Error(error);
    }
}