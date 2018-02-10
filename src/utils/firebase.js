import * as firebase from 'firebase';

// Init Fireabase
const firebaseConfig = {
  apiKey: "AIzaSyDUbPfQkO2IlFjs-MJ3G10JjpL0ul_UPKg",
  authDomain: "injurator.firebaseapp.com",
  databaseURL: "https://injurator.firebaseio.com",
  projectId: "injurator",
  storageBucket: "injurator.appspot.com",
  messagingSenderId: "208068277703"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
