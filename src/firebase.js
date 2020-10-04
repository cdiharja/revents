import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBDPBpA_Ps1eWGcglAHyGgRzfSfSnjmFdw",
    authDomain: "revent-course-291104.firebaseapp.com",
    databaseURL: "https://revent-course-291104.firebaseio.com",
    projectId: "revent-course-291104",
    storageBucket: "revent-course-291104.appspot.com",
    messagingSenderId: "1010192069950",
    appId: "1:1010192069950:web:52f1ae1e6592fb73eae86f"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
