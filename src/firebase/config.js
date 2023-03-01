// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD9tH7DDVXi5upWfQPgnqC3gl5A_3bYfY8",
    authDomain: "olx-clone-2e90e.firebaseapp.com",
    projectId: "olx-clone-2e90e",
    storageBucket: "olx-clone-2e90e.appspot.com",
    messagingSenderId: "992389452713",
    appId: "1:992389452713:web:b00f831fc16bcf40826ab8",
    measurementId: "G-N2FWDC2ZSP"
  };
  

// Initialize Firebase

export default firebase.initializeApp(firebaseConfig);