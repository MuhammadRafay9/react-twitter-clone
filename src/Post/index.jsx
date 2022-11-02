
import './index.css';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApyuqNdP3Wv8twWI5Ym1D_i__VzWmTors",
  authDomain: "dbtwitter-3534c.firebaseapp.com",
  projectId: "dbtwitter-3534c",
  storageBucket: "dbtwitter-3534c.appspot.com",
  messagingSenderId: "328625877806",
  appId: "1:328625877806:web:db6d1c205084c3484800bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const Post = () =>
{
    return(

        <div>rafayssss</div>
    )

}

export default Post;