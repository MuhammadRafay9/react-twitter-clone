import logo from '../logo.svg';
import './Content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment,faRetweet,faHeart,faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'

let Content = (props) => {
  return (
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
  );
}

export default Content;