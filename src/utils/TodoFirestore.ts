import { getAuth } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { TodoFirestoreParams } from '../types/FirestoreParams';

const getUserId = () => {
  const uid = getAuth().currentUser?.uid;
  if (!uid) throw 'No user logged in';
  return uid;
};


export  async function addToFirestore(params: TodoFirestoreParams) {
  const uid = getUserId();
  await firestore()
    .collection('todos')
    .doc(params.id)
    .set({
      ...params,
      uid,
    });
}

export async function getTodosFromFirestore() {
  const uid=getUserId();
  const snapshot = await firestore()
    .collection('todos')
    .where('uid', '==', uid)
    .get()
  const todos: TodoFirestoreParams[] = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title,
        description: data.description,
        isComplete: data.isComplete,
        dueDate: data.dueDate
      };
    });
  return todos;
}

export async function deleteTodoFromFirestore(id: string) {
  const uid=getUserId()
  await firestore()
  .collection('todos')
  
  .doc(id)
  .delete()
}

export async function updateTodoInFirestore(id: string) {
  const uid=getUserId()
  const todoRef=firestore().collection('todos').doc(id)
  const doc= await todoRef.get()
  const todo=doc.data()
    if(todo)
    await todoRef.update({isComplete:!todo.isComplete})
}
