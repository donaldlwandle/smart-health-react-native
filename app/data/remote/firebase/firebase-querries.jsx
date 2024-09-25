import { collection,addDoc, setDoc,doc} from "@react-native-firebase/app";

export function createUserProfile(firebase, userObject ,userID){
    addDoc(collection(firebase, "users"), userObject)

    setDoc(doc(firebase,"users",userID),userObject)

}