import { Link } from "react-router-dom";
import styles from "./footer.module.css"


function Footer() {



    return (
      <div className={styles.footerContainer}>
        <div className={styles.footerProfile}>
          <div className={styles.logo}>
            <div></div>
            <h1>CollectData</h1>
          </div>
          <div className={styles.footerFollow}>
            <p>Follow Us</p>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://twitter.com/">Twitter</a>
          </div>

        </div>

        <div className={styles.footerRoutes}>
          <h4>Collectibles</h4>
          <Link to={'/trading-cards'}>Trading Cards</Link>
          <Link to={'/sports-cards'}>Sports Cards</Link>
          <Link to={'/video-games'}>Video Games</Link>
          <Link to={'/manga'}>Manga</Link>
        </div>

        <div className={styles.footerNews}>
          <h4>About</h4>
          <Link to={'/terms-of-service'}>Terms & Conditions</Link>
          <Link to={'/privacy'}>Privacy</Link>
          <Link to={'/faq'}>FAQ</Link>
          <Link to={'/creator'}>Creator</Link>
        </div>

        <div className={styles.footerResources}>
          <h4>Resources</h4>
          <a href="">Source</a>
          <a href="">Source</a>
          <a href="">Source</a>
          <a href="">Source</a>
        </div>

        <div className={styles.footerTools}>
          <h4>Built With</h4>
            <a href="https://reactjs.org/">React</a>
            <a href="https://expressjs.com/">Express</a>
            <a href="https://www.mongodb.com/">MongoDB</a>
            <a href="https://sass-lang.com/">Sass</a>
        </div>
  
      </div>
    );
  }
  
  export default Footer;