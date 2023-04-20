import styles from "./dropdown.module.css"
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {ReactComponent as UserIcon} from '../../icons/user-solid.svg'
import {ReactComponent as WatchIcon} from '../../icons/eye-solid.svg'
import {ReactComponent as CollectionIcon} from '../../icons/plus-solid.svg'
import {ReactComponent as LogoutIcon} from '../../icons/circle-xmark-solid.svg'

function Dropdown({currentView, setShowDropdown}) {

    const nodeRef = useRef(null);
    const navigate = useNavigate();

    const handleNavigate = (url) => {
        navigate(`/${url}`)
        setShowDropdown();
    }


    return (
        <CSSTransition
        nodeRef={nodeRef}
      in={currentView}
      unmountOnExit
      timeout={100}
      classNames={{
        enter: styles.fadeEnter,
        enterActive: styles.fadeEnterActive,
        exit: styles.fadeExit,
        exitActive: styles.fadeExitActive,
      }}
    >
        <ul ref={nodeRef} className={styles.dropdown}>
            <li onClick={() => handleNavigate('')}><span>{<UserIcon/>}</span><p>Profile</p></li>
            <li onClick={() => handleNavigate('collection')}><span>{<CollectionIcon/>}</span><p>Collection</p></li>
            <li onClick={() => handleNavigate('watchlist')}><span>{<WatchIcon/>}</span><p>Watchlist</p></li>
            <li onClick={() => handleNavigate('')}><span>{<LogoutIcon/>}</span><p>Logout</p></li>
        </ul>
        </CSSTransition>
    );
  }
  
  export default Dropdown;