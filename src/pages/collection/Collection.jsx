import { baseUrl } from "../../services/baseUrl";
import axios from "axios";
import styles from "./collection.module.css"
import SearchItemCard from "../../components/search_and_item_card/SearchItemCard";
import SearchItemSportCard from "../../components/search_and_item_card/SearchItemSportCard";
import { useState, useEffect, useContext } from "react";
import WatchlistAddItem from "../../components/collection_and_watchlist_modal/WatchlistAddItem";
import { AuthContext } from "../../context/auth.context";
import { BeatLoader } from "react-spinners";


function Collection() {

    const [allItems, setAllItems] = useState();
    const [openModal, setOpenModal] = useState(false);

    const {isLoggedIn} = useContext(AuthContext);

    if (openModal) {
        document.body.classList.add(styles.activeModal);
    } else {
        document.body.classList.remove(styles.activeModal);
    }

    useEffect(() => {
      //console.log(isLoggedIn);
      axios.get(`${baseUrl}/collection/collection/${isLoggedIn._id}`)
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
            {
              allItems.length > 0 ? 
              <>
                {allItems.map((item) => {
                  if (item.itemType === "sport") {
                      return (
                      <SearchItemSportCard cardImage = {item.imageUrl} cardName = {item.cardName} cardId = {item._id} setName = {item.setName} cardType = {item.cardType} cardNumber={item.cardNumber}/>
                      )
                  } else if (item.itemType === "tcg") {
                      return (
                      <SearchItemCard cardImage = {item.imageUrl} cardName = {item.cardName} cardId = {item._id} setName = {item.setName} setId = {item.setId} itemType = {item.itemType} cardNumber={item.cardNumber}/>
                      )
                  } else if (item.itemType === "manga") {
                      return (
                      <SearchItemCard cardImage = {item.imageUrl} cardName = {item.title} cardId = {item._id} setName = {item.volumeName} setId = {item.volumeId} itemType = {item.itemType}/>
                      )
                  } else {
                      return (
                      <SearchItemCard cardImage = {item.imageUrl} cardName = {item.title} cardId = {item._id} setName = {item.consoleName} setId = {item.consoleId} itemType = {item.itemType}/>
                      )
                  }
                })}
              </>
              : <div className={styles.notFound}>No Collected Items...</div>
            }
            </>

            : <div className={styles.loadingContainer}><BeatLoader color={"#36d7b7"} /></div>
          }
        </div>
  
      </section>
    );
  }
  
  export default Collection;