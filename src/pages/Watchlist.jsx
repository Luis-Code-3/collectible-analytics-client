import { Link } from "react-router-dom";
import styles from "./watchlist.module.css"
import SearchItemCard from "../components/SearchItemCard";
import SearchItemSportCard from "../components/SearchItemSportCard";
import { useState } from "react";
import { collectionItems } from "./DummyData";
import WatchlistAddItem from "../components/WatchlistAddItem";
import { CSSTransition } from "react-transition-group";


function Watchlist() {

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
                WATCHLIST
            </div>

            <div onClick={() => setOpenModal(true)} className={styles.addDiv}>
                NEW ITEM
            </div>
                {/* <CSSTransition
                in={openModal}
                unmountOnExit
                timeout={100}
                classNames={{
                    enter: styles.modalEnter,
                    enterActive: styles.modalEnterActive,
                    exit: styles.modalExit,
                    exitActive: styles.modalExitActive,
                }}
                >
                <div onClick={() => setOpenModal(false)} className={styles.modalBackdrop}>
                        <WatchlistAddItem openModal = {openModal}/>
                </div>
                </CSSTransition> */}

            <WatchlistAddItem closeModal={() => setOpenModal(false)} openModal = {openModal}/>
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
  
  export default Watchlist;