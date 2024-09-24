import { collection,addDoc } from 'firebase/firestore';

export function createUserProfile(firebase, userObject){
    addDoc(collection(firebase, "users"), userObject)
}