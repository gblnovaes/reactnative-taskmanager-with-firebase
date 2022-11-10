import  firebase from "firebase"
import 'firebase/storage';
 
const firebaseConfig = {
  apiKey: "AIzaSyDRMcDswV-EQ2l1xm9LFuAbYFS7aCr4C-g",
  authDomain: "reactnative-taskmanager.firebaseapp.com",
  projectId: "reactnative-taskmanager",
  storageBucket: "reactnative-taskmanager.appspot.com",
  messagingSenderId: "104220184",
  appId: "1:104220184:web:5dd5e6589006305ab6656d"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

console.log(process.env.REACT_APP_ID)
export default firebase


/*const firebaseConfig = {
  apiKey: "AIzaSyDRMcDswV-EQ2l1xm9LFuAbYFS7aCr4C-g",
  authDomain: "reactnative-taskmanager.firebaseapp.com",
  projectId: "reactnative-taskmanager",
  storageBucket: "reactnative-taskmanager.appspot.com",
  messagingSenderId: "104220184",
  appId: "1:104220184:web:5dd5e6589006305ab6656d"
};*/
