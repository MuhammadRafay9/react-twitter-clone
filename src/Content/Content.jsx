import logo from '../logo.svg';
import './Content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment,faRetweet,faHeart,faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
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

let Content = (props) => {
  return (
      <div>
        
    <div className="Content">
      <div className='Post'>
          <span><img className='img' src={props.profileImg}/></span>  
          <div className='Profile'>
            <span className='name'>{props.name}</span>
            <span className='username'>{props.userName}</span>
 
            
          </div>

          <div className='PostContent'>
                     {props.postConent}
                     <img className='Postimg' src={props.postImg} />
          </div>
          <div className='Icons'>

            <FontAwesomeIcon icon={faComment} />
            <FontAwesomeIcon icon={faRetweet} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
              
          </div>
      </div>  
    </div>
        </div>
  );
}

export default Content;