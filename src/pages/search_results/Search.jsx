import { useSearchParams } from "react-router-dom";
import styles from "./search.module.css"
import SearchItemCard from "../../components/search_and_item_card/SearchItemCard";
import SearchItemSportCard from "../../components/search_and_item_card/SearchItemSportCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../services/baseUrl";
import { BeatLoader } from "react-spinners";


function Search() {
    const [searchParams] = useSearchParams();
    const [allItems, setAllItems] = useState(null);

    useEffect(() => {
        let query = searchParams.get('q');
        //console.log(query);
        // let newArr = searchItems.filter((item) => {
        //     return item.cardName.toLowerCase().includes(query.toLowerCase());
        // })
        // setAllItems(newArr)
        //console.log(query);
        axios.get(`${baseUrl}/search/search-bar/check?q=${encodeURIComponent(query)}`)
         .then((response) => {
            //console.log(response.data);
            setAllItems(response.data)
         })
         .catch((err) => {
            console.log(err);
         })
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
                : <div className={styles.notFound}><p>NO ITEMS FOUND...</p></div>
            }
            </>

            : <div className={styles.loadingContainer}><BeatLoader color={"#36d7b7"} /></div>
          }
        </div>
  
      </section>
    );
  }
  
  export default Search;