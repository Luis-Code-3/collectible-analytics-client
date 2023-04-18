import { Link } from "react-router-dom";
import styles from './watchlistAddItem.module.css'
import { searchItems } from "../pages/DummyData";
import { useState, useEffect, useRef } from "react";
import WatchlistResult from "./WatchlistResult";
import ModalBackdrop from "./ModalBackdrop";
import { CSSTransition } from "react-transition-group";

function WatchlistAddItem({closeModal, openModal}) {

    const [allItems,setAllItems] = useState(null);

    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
        const searchValue = inputRef.current.value;
        inputRef.current.value = '';
        let newArr = searchItems.filter((item) => {
            return item.cardName.toLowerCase().includes(searchValue.toLowerCase());
        })
        setAllItems(newArr)
    }


    return (
        <>
        <CSSTransition
        in={openModal}
        mountOnEnter
        unmountOnExit
        timeout={1000}
        classNames={{
            enter: styles.backdropEnter,
            enterActive: styles.backdropEnterActive,
            exit: styles.backdropExit,
            exitActive: styles.backdropExitActive,
        }}
        >
            <ModalBackdrop></ModalBackdrop>
        </CSSTransition>

        <CSSTransition
        in={openModal}
        mountOnEnter
        unmountOnExit
        timeout={100}
        classNames={{
            enter: styles.modalEnter,
            enterActive: styles.modalEnterActive,
            exit: styles.modalExit,
            exitActive: styles.modalExitActive,
        }}
        >
        <div onClick={closeModal} className={styles.twoContainer}>
        <div onClick={(e) => e.stopPropagation()} className={styles.searchBox}>
            <form onSubmit={handleSubmit} className={styles.searchForm}>
                <div>
                    <label>Search</label>
                    <input ref={inputRef}></input>
                </div>
                <button type="submit">SEARCH</button>
            </form>
        </div>

        <div onClick={(e) => e.stopPropagation()} className={styles.searchResultsBox}>
            {
                allItems ? 
                    (
                        allItems.length > 0 ? 
                            <>
                            {allItems.map((item) => {
                                if (item.itemType === "sport") {
                                    return (
                                    <WatchlistResult cardImage = {item.cardImage} cardName = {item.cardName} cardId = {item.cardId} setName = {item.setName} cardType = {item.cardType}/>
                                    )
                                } else if (item.itemType === "tcg") {
                                    return (
                                    <WatchlistResult cardImage = {item.cardImage} cardName = {item.cardName} cardId = {item.cardId} setName = {item.setName}/>
                                    )
                                } else if (item.itemType === "manga") {
                                    return (
                                    <WatchlistResult cardImage = {item.itemImage} cardName = {item.itemName} cardId = {item.itemId} setName = {item.volumeName}/>
                                    )
                                } else {
                                    return (
                                    <WatchlistResult cardImage = {item.gameImage} cardName = {item.gameName} cardId = {item.gameId} setName = {item.consoleName}/>
                                    )
                                }
                            })}
                            </>
                        : <div className={styles.notFound}>Item Not Found..</div>
                    )
                : <div className={styles.searchAsk}>Search Items</div>
            }

        </div>
        </div>
        </CSSTransition>
        </>
    );
  }
  
  export default WatchlistAddItem;