import firebase from 'firebase';

var config = {
    apiKey: `${process.env.REACT_APP_SECRET_CODE}`,
    authDomain: "nasa-udacity.firebaseapp.com",
    databaseURL: "https://nasa-udacity.firebaseio.com",
    projectId: "nasa-udacity",
    storageBucket: "nasa-udacity.appspot.com",
    messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGE_ID}`
  };

var fire = firebase.initializeApp(config);

export default fire;
