import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBVMkCXNTjuMSjXEqNmQu4iXkdarZ0SneU",
  authDomain: "userinformation-15b02.firebaseapp.com",
  databaseURL: "https://userinformation-40049-default-rtdb.firebaseio.com/",
  projectId: "userinformation-15b02",
  storageBucket: "userinformation-15b02.appspot.com",
  messagingSenderId: "980968944538",
  appId: "1:980968944538:web:1b19b43934897493e44023",
  measurementId: "G-VG9MGZ3QG6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
export default firebase;



