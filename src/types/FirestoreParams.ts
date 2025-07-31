export type TodoFirestoreParams = {
  id: string;
  title: string;
  description: string;
  isComplete: boolean;
};

export type UserFireStoreParams = {
  uid: string;
  email: string;
  username: string;
  bio: string;
}