import { Link } from "react-router-dom";
import styles from "./collection.module.css"
import SearchItemCard from "../../components/search_and_item_card/SearchItemCard";
import SearchItemSportCard from "../../components/search_and_item_card/SearchItemSportCard";
import { useState } from "react";
import { collectionItems } from "../DummyData";
import WatchlistAddItem from "../../components/collection_and_watchlist_modal/WatchlistAddItem";


function Collection() {

    const [allItems, setAllItems] = useState(collectionItems);
    const [openModal, setOpenModal] = useState(false);

    if (openModal) {
        document.body.classList.add(styles.activeModal);
    } else {
        document.body.classList.remove(styles.activeModal);
    }



    return (
      <section className={styles.mainSection}>
        <div className={styles.topDivBox}>
            <div className={styles.topDiv}>
                MY COLLECTION
            </div>

            <div onClick={() => setOpenModal(true)} className={styles.addDiv}>
                NEW ITEM
            </div>
            <WatchlistAddItem closeModal={() => setOpenModal(false)} openModal = {openModal} modalType={'collection'}/>
        </div>

        <div className={styles.bottomDiv}>
            {
            allItems ?
            <>
              {allItems.map((item) => {
                if (item.itemType === "sport") {
                    return (
                    <SearchItemSportCard cardImage = {item.cardImage} cardName = {item.cardName} cardId = {item.cardId} setName = {item.setName} cardType = {item.cardType}/>
                    )
                } else if (item.itemType === "tcg") {
                    return (
                    <SearchItemCard cardImage = {item.cardImage} cardName = {item.cardName} cardId = {item.cardId} setName = {item.setName} setId = {item.setId} itemType = {item.itemType}/>
                    )
                } else if (item.itemType === "manga") {
                    return (
                    <SearchItemCard cardImage = {item.itemImage} cardName = {item.itemName} cardId = {item.itemId} setName = {item.volumeName} setId = {item.setId} itemType = {item.itemType}/>
                    )
                } else {
                    return (
                    <SearchItemCard cardImage = {item.gameImage} cardName = {item.gameName} cardId = {item.gameId} setName = {item.consoleName} setId = {item.setId} itemType = {item.itemType}/>
                    )
                }
              })}
            </>

            : <h4> Loading...</h4>
          }
        </div>
  
      </section>
    );
  }
  
  export default Collection;