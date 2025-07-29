Pimport { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const FIREBASE_APP = initializeApp();
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
