import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBi0EKBBLtfuH8pWiXJfeIwDE9ZaZyQVPc",
  authDomain: "crwn-db-b9425.firebaseapp.com",
  projectId: "crwn-db-b9425",
  storageBucket: "crwn-db-b9425.appspot.com",
  messagingSenderId: "638303777022",
  appId: "1:638303777022:web:c1c8ecf6b99dfccc5db5af"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// choose signin with google
const provider = new firebase.auth.GoogleAuthProvider();
// options for making it pop up
provider.setCustomParameters({ prompt: 'select_account' });
// use it
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
