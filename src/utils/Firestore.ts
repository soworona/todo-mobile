import { getAuth } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { FirestoreParams } from '../types/FirestoreParamas';

const getUserId = () => {
  const uid = getAuth().currentUser?.uid;
  if (!uid) throw 'No user logged in';
  return uid;
};


export  async function addToFirestore(params: FirestoreParams) {
  const uid = getUserId();
  await firestore()
    .collection('Todo')
    .doc(params.id)
    .set({
      ...params,
      uid,
    });
}

export async function getTodosFromFirestore() {
  const uid=getUserId();
  const snapshot = await firestore()
    .collection('Todo')
    .where('uid', '==', uid)
    .get()
  const todos: FirestoreParams[] = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title,
        description: data.description,
        isComplete: data.isComplete,
      };
    });
  return todos;
}


