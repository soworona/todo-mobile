import { getAuth } from "@react-native-firebase/auth"
import { Task } from "../types/Task";
import firestore from '@react-native-firebase/firestore';

const getUserId = () => {
    const uid = getAuth().currentUser?.uid
    if(!uid) throw 'No user logged in';
    return uid;
} 

const addToFirebase = async ({tid: string, title: string, description: string, isComplete: boolean, uid: string}) => {
    const uid = getUserId();
    await firestore()
        .collection('Todo')
        .doc(tid)
        .set({tid, uid, title, description, isComplete})
}