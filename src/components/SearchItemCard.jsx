import { Link } from "react-router-dom";
import styles from './searchItemCard.module.css'


function SearchItemCard({cardName, cardImage, setName, cardId, itemType, setId}) {

    const cardInfo = () => {
        return (
            <>
                <div className={styles.imageBox}>
                    <img src={cardImage} alt=""/>
                </div>

                <div className={styles.titleBox}>
                    <p className={styles.name}>{cardName}</p>
                    <p className={styles.sport}>{setName}</p>
                </div>
            </>
        );
    }



    return (
        itemType === "tcg" ? 
        (
            <Link to={`/trading-cards/${setId}/${cardId}`} className={styles.cardContainer}>
                {cardInfo()}
            </Link>
        )
        : itemType === "sports" ?
        (
            <Link to={`/sports-cards/sports/${cardId}`} className={styles.cardContainer}>
                {cardInfo()}
            </Link>
        )
        : itemType === "game" ?
        (
            <Link to={`/video-games/${setId}/${cardId}`} className={styles.cardContainer}>
                {cardInfo()}
            </Link>
        )
        : itemType === "manga" ?
        (
            <Link to={`/manga/${setId}/${cardId}`} className={styles.cardContainer}>
                {cardInfo()}
            </Link>
        )
        : null
    );
  }
  
  export default SearchItemCard;