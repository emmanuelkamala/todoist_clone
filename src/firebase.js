import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAw4KqL-xZ5tXJwt3kwbVGnyCY0jSOuPVE",
  authDomain: "todoist-clone-d0c51.firebaseapp.com",
  databaseURL: "https://todoist-clone-d0c51-default-rtdb.firebaseio.com",
  projectId: "todoist-clone-d0c51",
  storageBucket: "todoist-clone-d0c51.appspot.com",
  messagingSenderId: "905116515747",
  appId: "1:905116515747:web:07bd6022686d011fae6e16"
});

export { firebaseConfig as firebase };