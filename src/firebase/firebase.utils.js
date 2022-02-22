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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`)
  // retrieve user from db
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try{
      // create new user
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(err) {
      console.log('error creating user', err.message)
    }

  }
  return userRef;
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

/*
query with firestore:
misalkan terdapat collection bernama user, didalamnya terdapat sebuah document dengan id user tsb, didalamnya terdapat collection bernama cartItems, didalamnya terdapat document dengan id cartnya beserta nama barang tsb
firerebase.firestore().collection('users').doc('misalUserId').collection('cartItems').doc('misalCartItemsId')
bisa disingkat:
firerebase.firestore().doc('/users/misalUserId/cartItems/misalCartItemsId')
atau hanya mau mengakses sampai cartItems collectoin saja:
firebase.firestore().collection('/users/misalUserId/cartItems')
*/

export default firebase;
