import { Link } from "react-router-dom";
import styles from './sportPlayerCard.module.css'


function SportPlayerCard({playerName, playerImage, sport}) {



    return (
      <a href="www.google.com" className={styles.cardContainer}>
        <div className={styles.imageBox}>
            <img src={playerImage} alt=""/>
        </div>

        <div className={styles.titleBox}>
            <p className={styles.name}>{playerName}</p>
            <p className={styles.sport}>{sport}</p>
        </div>
        
      </a>
    );
  }
  
  export default SportPlayerCard;