import { Link } from "react-router-dom";
import styles from './navbar.module.css'


function Navbar() {



    return (
      <nav className={styles.navbarContainer}>
        <div className={styles.logo}></div>
        <h1 className={styles.logoTitle}>CollectData</h1>
        <div className={styles.searchBar}></div>
        <Link to={'/about'} className={styles.regLinks}>About</Link>
        <Link to={'/contact'} className={styles.regLinks}>Contact</Link>
        <Link to={'/blog'} className={styles.regLinks}>Blog</Link>
        <Link to={'/login'} className={styles.regLinks}>Log In</Link>
        <Link to={'/signup'} className={styles.register}>Register</Link>
  
      </nav>
    );
  }
  
  export default Navbar;