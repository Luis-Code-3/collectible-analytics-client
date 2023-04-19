import { Link } from "react-router-dom";
import styles from './navbar.module.css'
import Dropdown from "../user_dropdown/Dropdown";
import { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import {ReactComponent as UserIcon} from "../../icons/user-solid.svg"

function Navbar() {

  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(true);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  }

  const inputRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputRef.current.value) {
      return
    }
    const searchValue = inputRef.current.value;
    navigate(`/search?q=${searchValue}`);
    inputRef.current.value = '';
  }



    return (
      <nav className={styles.navbarContainer}>
        <div className={styles.logo}></div>
        <Link to={'/'} className={styles.logoTitle}>CollectData</Link>
        <form onSubmit={handleSubmit} className={styles.formSearch}>
          <input ref={inputRef} className={styles.searchBar}></input>
        </form>
        {
          user ?
            <>
            {/* <div className={styles.specDiv} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <div className={styles.dropLink}>Blog</div>
              <Dropdown currentView = {showDropdown} />
            </div> */}
            <div onClick={toggleDropdown} className={styles.dropLink}><p>{<UserIcon className={`${styles.svgDefault} ${showDropdown ? styles.svgActive : ''}`}/>}</p></div>
            <Dropdown currentView = {showDropdown} setShowDropdown={() => setShowDropdown(false)} />
            </>
          : 
          <>
            <Link to={'/login'} className={styles.regLinks}>Log In</Link>
            <Link to={'/signup'} className={styles.register}>Register</Link>
          </>
        }
  
      </nav>
    );
  }
  
  export default Navbar;