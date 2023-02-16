import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBJHCcgGs2KkqQHTb9RvBGHTpm3_jmKqa8",
  authDomain: "henry-proyecto-final.firebaseapp.com",
  projectId: "henry-proyecto-final",
  storageBucket: "henry-proyecto-final.appspot.com",
  messagingSenderId: "369942252501",
  appId: "1:369942252501:web:4ada59d8b296eb2e9ecb5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app