import firebase from 'firebase';

const config = {
  apiKey: `${process.env.REACT_APP_SECRET_CODE}`,
  authDomain: 'nasa-udacity.firebaseapp.com',
  databaseURL: 'https://nasa-udacity.firebaseio.com',
  projectId: 'nasa-udacity',
  storageBucket: 'nasa-udacity.appspot.com',
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGE_ID}`
};

const fire = firebase.initializeApp(config);

export default fire;
