import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBKbNs3sNzniHEN_Jg5RUqvZPJLlJby66M",
  authDomain: "otlet-react.firebaseapp.com",
  projectId: "otlet-react",
  storageBucket: "otlet-react.appspot.com",
  messagingSenderId: "385390323505",
  appId: "1:385390323505:web:c7da513b5b2254cdc0f210"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app);
export const  db = getFirestore(app);
export const storage = getStorage(app);


export default app;