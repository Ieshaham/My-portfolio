import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAJjKr0uTCYI9pobn_LRPpvyzli_YMZqys",
    authDomain: "contact-form-portfolio-ed2e5.firebaseapp.com",
    projectId: "contact-form-portfolio-ed2e5",
    storageBucket: "contact-form-portfolio-ed2e5.appspot.com",
    messagingSenderId: "335583547205",
    appId: "1:335583547205:web:317d758dd66c619606782c"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();

export { firestore };