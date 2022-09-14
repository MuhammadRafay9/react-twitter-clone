import logo from '../logo.svg';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell,faHome,faHashtag,faEnvelope,faBookmark,faList,faUser,faDotCircle,faEllipsisH} from '@fortawesome/free-solid-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'

let Sidebar = (props) => {
  return (
    <div className="Sidebar">
            <div className="Logo"><FontAwesomeIcon icon={faTwitter} /></div>
        <ul className="List">

            <li><button className='btn'><span className='Icon'><FontAwesomeIcon icon={faHome} />      </span> <span className='Text'> Home       </span></button></li>
            <li><button className='btn'><span className='Icon'><FontAwesomeIcon icon={faHashtag} />   </span> <span className='Text'> Explore    </span></button></li>
            <li><button className='btn'><span className='Icon'><FontAwesomeIcon icon={faBell} />      </span> <span className='Text'> Notifications </span></button></li>
            <li><button className='btn'><span className='Icon'><FontAwesomeIcon icon={faEnvelope} />   </span> <span className='Text'> Messages   </span></button></li>
            <li><button className='btn'><span className='Icon'><FontAwesomeIcon icon={faBookmark} />  </span> <span className='Text'> Bookmarks </span></button></li>
            <li><button className='btn'><span className='Icon'><FontAwesomeIcon icon={faList} />      </span> <span className='Text'> Lists         </span></button></li>
            <li><button className='btn'><span className='Icon'><FontAwesomeIcon icon={faUser} />      </span> <span className='Text'> Profiles      </span></button></li>
            <li><button className='btn'><span className='Icon'><FontAwesomeIcon icon={faEllipsisH} /> </span> <span className='Text'> More     </span></button></li>
            <li className='Twitter'><button className='btn-twitter'>Twitter   </button></li>
        </ul>
        <div className="Footer">

            <div className="Profile">
                <div className='img'>
                <img className="Profileimg" src={props.profileImg} />
                </div>
                <div className='detail'>
                <span className="name">{props.name}</span>
                <span className="userName">{props.userName}</span>
                </div>
                <div className='dot'>
                <span className='Icon'><FontAwesomeIcon icon={faEllipsisH} /> </span>
                </div>
                


            </div>

        </div>
    </div>
  );
}

export default Sidebar;