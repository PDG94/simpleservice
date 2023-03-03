import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBJHCcgGs2KkqQHTb9RvBGHTpm3_jmKqa8",
  authDomain: "henry-proyecto-final.firebaseapp.com",
  projectId: "henry-proyecto-final",
  storageBucket: "henry-proyecto-final.appspot.com",
  messagingSenderId: "369942252501",
  appId: "1:369942252501:web:4ada59d8b296eb2e9ecb5c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

export async function uploadFile(file, uid) {
  if (!file) {
    return "https://firebasestorage.googleapis.com/v0/b/henry-proyecto-final.appspot.com/o/users%2Fimagen_2023-02-25_173305172.png?alt=media&token=9ec2b9fe-7c1c-40ad-b466-6761c9bf3c7a";
  }
  const storageRef = ref(storage, `users/${uid}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}

export async function uploadCardFile(file, uuid) {
  if (!file) {
    return null;
  }
  const storageRef = ref(storage, `services/${uuid}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}
