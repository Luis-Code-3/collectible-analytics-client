import styles from "./dropdownTwo.module.css"
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {ReactComponent as UserIcon} from '../../icons/user-solid.svg'

function DropdownTwo({currentView, setShowDropdown}) {

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
            <li onClick={() => handleNavigate('login')}><span>{<UserIcon/>}</span><p>Log In</p></li>
            <li onClick={() => handleNavigate('signup')}><span>{<UserIcon/>}</span><p>Register</p></li>
        </ul>
        </CSSTransition>
    );
  }
  
  export default DropdownTwo;