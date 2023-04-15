import { Link } from "react-router-dom";
import styles from './navbar.module.css'
import Dropdown from "./Dropdown";
import { useState } from "react";


function Navbar() {

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  }



    return (
      <nav className={styles.navbarContainer}>
        <div className={styles.logo}></div>
        <h1 className={styles.logoTitle}>CollectData</h1>
        <div className={styles.searchBar}></div>
        <Link to={'/'} className={styles.regLinks}>Home</Link>
        <Link to={'/contact'} className={styles.regLinks}>Contact</Link>
        <Link onClick={toggleDropdown} className={styles.regLinks}>Blog</Link>
        <Dropdown currentView = {showDropdown} />
        <Link to={'/login'} className={styles.regLinks}>Log In</Link>
        <Link to={'/signup'} className={styles.register}>Register</Link>
  
      </nav>
    );
  }
  
  export default Navbar;