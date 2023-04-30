import { Link } from "react-router-dom";
import styles from './navbar.module.css'
import Dropdown from "../user_dropdown/Dropdown";
import DropdownTwo from "../user_dropdown/DropdownTwo";
import { useState,useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {ReactComponent as UserIcon} from "../../icons/user-solid.svg"
import { AuthContext } from "../../context/auth.context";
import {ReactComponent as BarIcon} from "../../icons/bars-solid.svg"

function Navbar() {

  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownTwo, setShowDropdownTwo] = useState(false);
  // const [user, setUser] = useState(true);
  const {isLoggedIn, isLoading} = useContext(AuthContext)

  // const getToken = () => {
  //   return localStorage.getItem("accessToken")
  // }

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  }

  const toggleDropdownTwo = () => {
    setShowDropdownTwo((prev) => !prev);
  }

  const inputRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputRef.current.value) {
      return
    }
    const searchValue = inputRef.current.value;
    navigate(`/search?q=${encodeURIComponent(searchValue)}`);
    inputRef.current.value = '';
  }



    return (
      <nav className={styles.navbarContainer}>
        <div className={styles.logo}></div>
        <Link to={'/'} className={styles.logoTitle}>CollectData</Link>
        {
          isLoading ? 
            <div className={styles.skeleton}></div>
            :<>
            <form onSubmit={handleSubmit} className={styles.formSearch}>
              <input ref={inputRef} className={styles.searchBar}></input>
            </form>
            {
              isLoggedIn ?
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
                <div onClick={toggleDropdownTwo} className={styles.dropLinkTwo}><p>{<BarIcon className={`${styles.svgDefault} ${showDropdownTwo ? styles.svgActive : ''}`}/>}</p></div>
                <DropdownTwo currentView = {showDropdownTwo} setShowDropdown={() => setShowDropdownTwo(false)} />
                <Link to={'/login'} className={styles.regLinks}>Log In</Link>
                <Link to={'/signup'} className={styles.register}>Register</Link>
              </>
            }
          </>
          
        }
  
      </nav>
    );
  }
  
  export default Navbar;