import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBXteCd08dBOKq58COo2vBoebqXSPLvHZI",
  authDomain: "ashrafjp-92ff0.firebaseapp.com",
  projectId: "ashrafjp-92ff0",
  storageBucket: "ashrafjp-92ff0.firebasestorage.app",
  messagingSenderId: "188148570700",
  appId: "1:188148570700:web:70697210cf0985d9a172e9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
