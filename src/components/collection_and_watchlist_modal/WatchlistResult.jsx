import styles from "./watchlistResult.module.css"


function WatchlistResult({cardName, cardImage, setName, cardId, cardType, modalType, closeModal, setAllItems}) {

    const addItem = () => {
        if (modalType === 'collection') {
            closeModal();
            setAllItems(null);
        } else {

        }
    }

    return (
        <div onClick={addItem} className={styles.resultContainer}>
            <div className={styles.imageBox}>
                <img src={cardImage} alt=""/>
            </div>
            <div className={styles.resultInfo}>
                <h3>{cardName}</h3>
                {cardType && <p>{cardType}</p>}
                <p>{setName}</p>
            </div>
            <p className={styles.addButton}>+</p>
        </div>
    );
  }
  
  export default WatchlistResult;