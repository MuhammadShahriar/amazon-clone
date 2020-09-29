import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDWmiiscrPBRxLmpJdi2SOu185FwomSaOE",
    authDomain: "clone-518d8.firebaseapp.com",
    databaseURL: "https://clone-518d8.firebaseio.com",
    projectId: "clone-518d8",
    storageBucket: "clone-518d8.appspot.com",
    messagingSenderId: "168489757582",
    appId: "1:168489757582:web:a3c9630065e227f8ee12df",
    measurementId: "G-B1RZSS4ML2",
});

const auth = firebase.auth();

export {auth }