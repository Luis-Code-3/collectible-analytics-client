import { Link } from "react-router-dom";
import styles from './navbar.module.css'
import Dropdown from "./Dropdown";
import { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  }

  const inputRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
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
        <div className={styles.specDiv} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <Link className={styles.dropLink}>Blog</Link>
          <Dropdown currentView = {showDropdown} />
        </div>
        <Link to={'/login'} className={styles.regLinks}>Log In</Link>
        <Link to={'/signup'} className={styles.register}>Register</Link>
  
      </nav>
    );
  }
  
  export default Navbar;