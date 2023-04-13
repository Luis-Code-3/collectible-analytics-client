import { Link } from "react-router-dom";
import styles from "./collection.module.css"
import SearchItemCard from "../components/SearchItemCard";
import SearchItemSportCard from "../components/SearchItemSportCard";
import { useState } from "react";
import { collectionItems } from "./DummyData";


function Collection() {

    const [allItems, setAllItems] = useState(collectionItems)



    return (
      <section className={styles.mainSection}>
        <div className={styles.topDivBox}>
            <div className={styles.topDiv}>
                MY COLLECTION
            </div>

            <div className={styles.addDiv}>
                ADD ITEM
            </div>
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