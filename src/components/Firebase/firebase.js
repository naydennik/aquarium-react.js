import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyC0xwPps7b-hjP76xrovtkV8XtcdZGm8vk",
  authDomain: "aquarium-a4f96.firebaseapp.com",
  databaseURL: "https://aquarium-a4f96.firebaseio.com",
  projectId: "aquarium-a4f96",
  storageBucket: "aquarium-a4f96.appspot.com",
  messagingSenderId: "369881047370",
  appId: "1:369881047370:web:e26a6380c2066a0aaa61b3",
  measurementId: "G-8MG08BDZ1E",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = (uid) => this.db.ref(`users/${uid}`);

  users = () => this.db.ref("users");
}

export default Firebase;
