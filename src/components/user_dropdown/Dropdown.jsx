import styles from "./dropdown.module.css"
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

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
            <li onClick={() => handleNavigate('')}>Profile</li>
            <li onClick={() => handleNavigate('collection')}>Collection</li>
            <li onClick={() => handleNavigate('watchlist')}>Watchlist</li>
            <li onClick={() => handleNavigate('')}>Logout</li>
        </ul>
        </CSSTransition>
    );
  }
  
  export default Dropdown;