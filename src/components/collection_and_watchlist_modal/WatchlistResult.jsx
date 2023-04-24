import styles from "./watchlistResult.module.css"


function WatchlistResult({cardName, cardImage, setName, cardId, cardType, modalType, closeModal, setAllItems, itemType, cardNumber}) {

    const addItem = () => {
        if (modalType === 'collection') {
            closeModal();
            setAllItems(null);
            // add to collection of logged in user
        } else {
            closeModal();
            setAllItems(null);
            // add to watchlist of logged in user
        }
    }

    return (
        <div onClick={addItem} className={styles.resultContainer}>
            <div className={styles.imageBox}>
                <img src={cardImage} alt=""/>
            </div>
            <div className={styles.resultInfo}>
                <h3>{cardName} {itemType === "tcg" || itemType === "sports" ? (cardNumber) : null}</h3>
                {cardType && <p>{cardType}</p>}
                <p>{setName}</p>
            </div>
            <p className={styles.addButton}>+</p>
        </div>
    );
  }
  
  export default WatchlistResult;