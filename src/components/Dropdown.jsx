import { Link } from "react-router-dom";
import styles from "./dropdown.module.css"
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

function Dropdown({currentView}) {

    const nodeRef = useRef(null);


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
            <li>Profile</li>
            <li>Collection</li>
            <li>Watchlist</li>
            <li>Logout</li>
        </ul>
        </CSSTransition>
    );
  }
  
  export default Dropdown;