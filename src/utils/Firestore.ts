import { getAuth } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const getUserId = () => {
  const uid = getAuth().currentUser?.uid;
  if (!uid) throw 'No user logged in';
  return uid;
};

type FirestoreParams = {
  tid: string;
  title: string;
  description: string;
  isComplete: boolean;
};

export default async function addToFirestore(params: FirestoreParams) {
  const uid = getUserId();
  await firestore()
    .collection('Todo')
    .doc(params.tid)
    .set({
      ...params,
      uid,
    });
}
