import { Link } from "react-router-dom";
import styles from './searchItemCard.module.css'


function SearchItemCard({cardName, cardImage, setName, cardId}) {



    return (
      <Link to={``} className={styles.cardContainer}>
        <div className={styles.imageBox}>
            <img src={cardImage} alt=""/>
        </div>

        <div className={styles.titleBox}>
            <p className={styles.name}>{cardName}</p>
            <p className={styles.sport}>{setName}</p>
        </div>
        
      </Link>
    );
  }
  
  export default SearchItemCard;