import styles from './watchlistAddItem.module.css'
import { useState, useRef } from "react";
import WatchlistResult from "./WatchlistResult";
import ModalBackdrop from "../backdrop_modal/ModalBackdrop";
import { CSSTransition } from "react-transition-group";
import axios from 'axios';
import { baseUrl } from '../../services/baseUrl';

function WatchlistAddItem({closeModal, openModal, modalType, onAddItem, watchedItems}) {

    const [allItems,setAllItems] = useState(null);

    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
        const searchValue = inputRef.current.value;
        // inputRef.current.value = '';
        // let newArr = searchItems.filter((item) => {
        //     return item.cardName.toLowerCase().includes(searchValue.toLowerCase());
        // })
        // setAllItems(newArr)
        axios.get(`${baseUrl}/search/search-bar/check?q=${encodeURIComponent(searchValue)}`)
         .then((response) => {
            //console.log(response.data);
            const newArr = response.data.filter((item1) => {
                return !watchedItems.some((item2) => item2._id === item1._id)
            })
            setAllItems(newArr)
         })
         .catch((err) => {
            console.log(err);
         })
    }

    const handleClose = () => {
        closeModal();
        inputRef.current.value = '';
        setAllItems(null);
    }


    return (
        <>
        <CSSTransition
        in={openModal}
        mountOnEnter
        unmountOnExit
        timeout={100}
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
        <div onClick={handleClose} className={styles.twoContainer}>
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
                                if (item.itemType === "sports") {
                                    return (
                                    <WatchlistResult setAllItems = {setAllItems} cardImage = {item.imageUrl} cardName = {item.playerName} cardId = {item._id} setName = {item.setName} cardType = {item.cardType} cardNumber = {item.cardNumber} itemType = {item.itemType} modalType = {modalType} closeModal = {closeModal} onAddItem={onAddItem} item={item}/>
                                    )
                                } else if (item.itemType === "tcg") {
                                    return (
                                    <WatchlistResult setAllItems = {setAllItems}  cardImage = {item.imageUrl} cardName = {item.cardName} cardId = {item._id} setName = {item.setName} modalType = {modalType} cardNumber = {item.cardNumber} itemType = {item.itemType} closeModal = {closeModal} onAddItem={onAddItem} item={item}/>
                                    )
                                } else if (item.itemType === "manga") {
                                    return (
                                    <WatchlistResult setAllItems = {setAllItems}  cardImage = {item.imageUrl} cardName = {item.title} cardId = {item._id} setName = {item.volumeName} modalType = {modalType} closeModal = {closeModal} itemType = {item.itemType} onAddItem={onAddItem} item={item}/>
                                    )
                                } else {
                                    return (
                                    <WatchlistResult setAllItems = {setAllItems}  cardImage = {item.imageUrl} cardName = {item.title} cardId = {item._id} setName = {item.consoleName} modalType = {modalType} closeModal = {closeModal} itemType = {item.itemType} onAddItem={onAddItem} item={item}/>
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