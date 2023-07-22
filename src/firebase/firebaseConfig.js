import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBq97midxrdW6d7LiUB4qK3DAOGvajczXc",
  authDomain: "genz-blog.firebaseapp.com",
  databaseURL: "https://genz-blog-default-rtdb.firebaseio.com",
  projectId: "genz-blog",
  storageBucket: "genz-blog.appspot.com",
  messagingSenderId: "287919842056",
  appId: "1:287919842056:web:1fd1a4112c15621d1542bd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };
