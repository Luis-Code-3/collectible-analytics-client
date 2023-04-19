import { Link } from "react-router-dom";
import styles from './searchItemSportCard.module.css'


function SearchItemSportCard({cardName, cardImage, setName, cardId, cardType}) {



    return (
      <Link to={`/sports-cards/sports/${cardId}`} className={styles.cardContainer}>
        <div className={styles.imageBox}>
            <img src={cardImage} alt=""/>
        </div>

        <div className={styles.titleBox}>
            <p className={styles.name}>{cardName}</p>
            <p className={styles.cardType}>{cardType}</p>
            <p className={styles.sport}>{setName}</p>
        </div>
        
      </Link>
    );
  }
  
  export default SearchItemSportCard;