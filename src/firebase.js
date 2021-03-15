import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyD64aaDFQUwN8JQQFl919W6VggoT9SqpPQ",
    authDomain: "todoist-56b64.firebaseapp.com",
    databaseURL: "https://todoist-56b64-default-rtdb.firebaseio.com",
    projectId: "todoist-56b64",
    storageBucket: "todoist-56b64.appspot.com",
    messagingSenderId: "834553749615",
    appId: "1:834553749615:web:64641a3834db7c55bdad9a"
});

export { firebaseConfig as firebase };