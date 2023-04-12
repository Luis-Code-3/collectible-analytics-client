import { Link } from "react-router-dom";
import styles from './sportPlayerCard.module.css'


function SportPlayerCard({playerName, playerImage, sport, playerId}) {



    return (
      <Link to={`/sports-cards/players/${playerId}`} className={styles.cardContainer}>
        <div className={styles.imageBox}>
            <img src={playerImage} alt=""/>
        </div>

        <div className={styles.titleBox}>
            <p className={styles.name}>{playerName}</p>
            <p className={styles.sport}>{sport}</p>
        </div>
        
      </Link>
    );
  }
  
  export default SportPlayerCard;