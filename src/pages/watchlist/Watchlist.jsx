import axios from "axios";
import { baseUrl } from "../../services/baseUrl";
import styles from "./watchlist.module.css"
import SearchItemCard from "../../components/search_and_item_card/SearchItemCard";
import SearchItemSportCard from "../../components/search_and_item_card/SearchItemSportCard";
import { useState, useEffect, useContext } from "react";
import WatchlistAddItem from "../../components/collection_and_watchlist_modal/WatchlistAddItem";
import { CSSTransition } from "react-transition-group";
import { AuthContext } from "../../context/auth.context";
import { BeatLoader } from "react-spinners";


function Watchlist() {

    const [allItems, setAllItems] = useState();
    const [openModal, setOpenModal] = useState(false);

    const {isLoggedIn} = useContext(AuthContext);

    if (openModal) {
        document.body.classList.add(styles.activeModal);
    } else {
        document.body.classList.remove(styles.activeModal);
    }

    const handleAddItem = (newItem) => {
        if(allItems.includes(newItem)) {
            return;
        }
        setAllItems((prevItems) => [...prevItems, newItem]);
    };


    useEffect(() => {
        //console.log(isLoggedIn);
        axios.get(`${baseUrl}/watchlist/watchlist/${isLoggedIn._id}`)
            .then((response) => {
                //console.log(response.data);
                setAllItems(response.data)
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])


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

            <WatchlistAddItem watchedItems = {allItems} onAddItem={handleAddItem} closeModal={() => setOpenModal(false)} openModal = {openModal} modalType={'watchlist'}/>
        </div>

        <div className={styles.bottomDiv}>
            {
            allItems ?
            <>
            {
                allItems.length > 0 ?
                <>
                {allItems.map((item, index) => {
                    if (item.itemType === "sports") {
                        return (
                        <SearchItemSportCard key={index} cardImage = {item.imageUrl} cardName = {item.playerName} cardId = {item._id} setName = {item.setName} cardType = {item.cardType} cardNumber = {item.cardNumber}/>
                        )
                    } else if (item.itemType === "tcg") {
                        return (
                        <SearchItemCard key={index} cardImage = {item.imageUrl} cardName = {item.cardName} cardId = {item._id} setName = {item.setName} setId = {item.setId} itemType = {item.itemType} cardNumber = {item.cardNumber}/>
                        )
                    } else if (item.itemType === "manga") {
                        return (
                        <SearchItemCard key={index} cardImage = {item.imageUrl} cardName = {item.title} cardId = {item._id} setName = {item.volumeName} setId = {item.volumeId} itemType = {item.itemType}/>
                        )
                    } else {
                        return (
                        <SearchItemCard key={index} cardImage = {item.imageUrl} cardName = {item.title} cardId = {item._id} setName = {item.consoleName} setId = {item.consoleId} itemType = {item.itemType}/>
                        )
                    }
                })}
                </>
                :<div className={styles.notFound}>No Items Watched...</div>
            }
            </>
            : <div className={styles.loadingContainer}><BeatLoader color={"#36d7b7"} /></div>
          }
        </div>
  
      </section>
    );
  }
  
  export default Watchlist;