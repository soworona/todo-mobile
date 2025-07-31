export type TodoFirestoreParams = {
  id: string;
  title: string;
  description: string;
  isComplete: boolean;
  dueDate: Date;
};

export type UserFireStoreParams = {
  uid: string;
  email: string;
  username: string;
  bio: string;
}