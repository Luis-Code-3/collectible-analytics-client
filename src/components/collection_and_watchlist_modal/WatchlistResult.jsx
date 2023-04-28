import styles from "./watchlistResult.module.css"
import { baseUrl } from "../../services/baseUrl";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";


function WatchlistResult({cardName, cardImage, setName, cardId, cardType, modalType, closeModal, onAddItem, itemType, cardNumber, item, setAllItems}) {

    const {isLoggedIn} = useContext(AuthContext);

    const addItem = () => {
        if (modalType === 'collection') {
            // closeModal();
            // console.log("hey");
            let itemId = item._id;
            let pathType;
            if(itemType === "tcg") {
                pathType = "trading-cards";
            } else if (itemType === "sports") {
                pathType = "sports-cards";
            } else if (itemType === "manga") {
                pathType = "manga";
            } else {
                pathType = "video-games";
            }
            axios.post(`${baseUrl}/collection/add-collect/${pathType}/${isLoggedIn._id}`, {itemId})
                .then((response) => {
                    //console.log(response.data.message);
                })
                .catch((err) => {
                    console.log(err);
                })
            setAllItems((prevItems) => prevItems.filter(prevItem => prevItem._id !== item._id));
            onAddItem(item);
            // add to collection of logged in user
        } else {
            // closeModal();
            let itemId = item._id;
            let pathType;
            if(itemType === "tcg") {
                pathType = "trading-cards";
            } else if (itemType === "sports") {
                pathType = "sports-cards";
            } else if (itemType === "manga") {
                pathType = "manga";
            } else {
                pathType = "video-games";
            }
            axios.post(`${baseUrl}/watchlist/add-watchlist/${pathType}/${isLoggedIn._id}`, {itemId})
                .then((response) => {
                    //console.log(response.data.message);
                })
                .catch((err) => {
                    console.log(err);
                })
            setAllItems((prevItems) => prevItems.filter(prevItem => prevItem._id !== item._id));
            //console.log(item);
            onAddItem(item);
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