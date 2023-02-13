import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXjAePpCgOsdHyQuq_XyynuxE5c0jiF-U",
  authDomain: "discalculiaepn-e2330.firebaseapp.com",
  projectId: "discalculiaepn-e2330",
  storageBucket: "discalculiaepn-e2330.appspot.com",
  messagingSenderId: "29123173748",
  appId: "1:29123173748:web:cadd979a36c0b5cf73e021",
};
// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore and get a reference to the service
export const db = getFirestore(app);
