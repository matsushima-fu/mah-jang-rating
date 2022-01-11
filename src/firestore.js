import firebase from 'firebase' 
  const firebaseConfig = {
    apiKey: "AIzaSyChGdfMusz0SCeRN0457f0y7TEVZsvOw8o",
    authDomain: "mah-jang-rating.firebaseapp.com",
    projectId: "mah-jang-rating",
    storageBucket: "mah-jang-rating.appspot.com",
    messagingSenderId: "348695257996",
    appId: "1:348695257996:web:ffb70e7c47eb5eed872ca9"
 };
  const settings = { timestampsInSnapshots: true };
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings(settings);
  export default firebase
