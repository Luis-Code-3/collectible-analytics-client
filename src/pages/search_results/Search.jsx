import { useSearchParams } from "react-router-dom";
import styles from "./search.module.css"
import SearchItemCard from "../../components/search_and_item_card/SearchItemCard";
import SearchItemSportCard from "../../components/search_and_item_card/SearchItemSportCard";
import { useState, useEffect } from "react";
import { searchItems } from "../DummyData";


function Search() {
    const [searchParams] = useSearchParams();
    const [allItems, setAllItems] = useState(null);

    useEffect(() => {
        let query = searchParams.get('q');
        //console.log(query);
        let newArr = searchItems.filter((item) => {
            return item.cardName.toLowerCase().includes(query.toLowerCase());
        })
        setAllItems(newArr)
    }, [searchParams])

    return (
      <section className={styles.mainSection}>
        <div className={styles.topDiv}>
            SEARCH RESULTS
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
                : <div className={styles.notFound}><p>NO ITEMS FOUND...</p></div>
            }
            </>

            : <h4> Loading...</h4>
          }
        </div>
  
      </section>
    );
  }
  
  export default Search;