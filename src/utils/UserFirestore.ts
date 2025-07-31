import { getAuth } from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore';
import { UserFireStoreParams } from "../types/FirestoreParams";


const getCurrentUser = () => {
 const user = getAuth().currentUser?.uid;
   if (!user) throw 'No user logged in';
  return user; 
}

export async function addUserToFirestore(params: UserFireStoreParams){
    const uid = getCurrentUser();
    await firestore()
        .collection('users')
        .doc(uid)
        .set(params);
}