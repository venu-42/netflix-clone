import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmsAmcTlwv0LuAQPlUi2Or-TdpbT6fN_k",
  authDomain: "netflix-clone-b9905.firebaseapp.com",
  projectId: "netflix-clone-b9905",
  storageBucket: "netflix-clone-b9905.appspot.com",
  messagingSenderId: "164833047782",
  appId: "1:164833047782:web:629c1621d1f36a3ed07727",
  measurementId: "G-B3W0G8HYJQ",
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth} ;
export default db;