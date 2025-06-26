import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA_fd83iVAbmlfK3pZXb9ThoAOyuqqLTsg",
  authDomain: "myfirstproject-8f99a.firebaseapp.com",
  projectId: "myfirstproject-8f99a",
  storageBucket: "myfirstproject-8f99a.appspot.com", 
  messagingSenderId: "547717708524",
  appId: "1:547717708524:web:72e1601533e2aca4a9c3c9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
