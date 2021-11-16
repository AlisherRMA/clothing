import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCMZdGFDHoIIPtLfHN6ySb_8T8YyHU4Oc8",
  authDomain: "clothing-db-17c76.firebaseapp.com",
  projectId: "clothing-db-17c76",
  storageBucket: "clothing-db-17c76.appspot.com",
  messagingSenderId: "285145875568",
  appId: "1:285145875568:web:fe5a7a88cb7edf898920b5",
  measurementId: "G-4WSB2K9L1X",
};

export const createUserProfileDocument = async (userAuth, ...additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    console.log({ userAuth });
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    console.log({ additionalData });

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
