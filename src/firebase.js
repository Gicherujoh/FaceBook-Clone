
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDb8GzAiZme0Rs8JApD3xg2nnezDnfJcJY",
  authDomain: "facebook-web-734dd.firebaseapp.com",
  projectId: "facebook-web-734dd",
  storageBucket: "facebook-web-734dd.appspot.com",
  messagingSenderId: "512429245031",
  appId: "1:512429245031:web:f7e564cbd68a85d9e00ac2"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
