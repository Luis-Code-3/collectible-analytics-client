import { Link } from "react-router-dom";
import styles from "./mangaVolumeInfo.module.css";
import { useState } from "react";
import SearchItemCard from "../../components/search_and_item_card/SearchItemCard";
import { volumeItems } from "../DummyData";
import ItemSort from "../../components/item_sort_dropdown/ItemSort";


function MangaVolumeInfo() {

  const [allItems, setAllItems] = useState(volumeItems);
  const [search, setSearch] = useState('');

    
    const handleSortOrder = (sort) => {
      let newArr = [...allItems];
      if(sort === "Alphabetical") {
        newArr.sort((a,b) => {
          return a.itemName.localeCompare(b.itemName);
        })
      } else if (sort === "Reverse Alphabetical") {
        newArr.sort((a,b) => {
          return b.itemName.localeCompare(a.itemName);
        })
      }


      setAllItems(newArr)
    }

  let filteredItems;

  const filterExecute = () => {
    filteredItems = allItems.filter((item) => {
      return search.toLowerCase() === '' ? item : item.itemName.toLowerCase().includes(search.toLowerCase())
    })
  }



    return (
      <section className={styles.mainSection}>
        <div className={styles.topDiv}>
          <div className={styles.imageBox}>
            <img src="https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/3599837-01.jpg" alt=""/>
          </div>

          <div className={styles.description}>
            <h1>Attack On Titan</h1>
            <p><span>Release Date:</span> August 20th, 2023</p>
            <p><span>Publisher:</span> Viz</p>
            <p><span>Issues:</span> 214</p>
            <p className={styles.descriptionText}>Attack On Titan Paragraph more..</p>
          </div>

        </div>

        <div className={styles.middleDiv}>
              {/* <select onChange={handleSortOrder}>
                <option disabled selected></option>
                <option>Alphabetical</option>
                <option>Reverse Alphabetical</option>
              </select> */}
              <ItemSort handleSortOrder={handleSortOrder} genreType={"manga"}/>
              <input onChange={(e) => setSearch(e.target.value)} type='text'></input>
              <button className={styles.filterButton}>FILTER</button>

        </div>

          {
            allItems ?
            <>
              {filterExecute()}
              {
                filteredItems.length > 0 ?
                <div className={styles.bottomDiv}>
                    {filteredItems.map((item) => {
                      return (
                        <SearchItemCard cardImage = {item.itemImage} cardName = {item.itemName} cardId = {item.itemId} setName = {item.volumeName} itemType = {item.itemType} setId = {item.volumeId}/>
                      )
                    })}
                </div>
                : <div className={styles.notFound}><p>ITEM NOT FOUND...</p></div>
              }
            </>

            : <h4> Loading...</h4>
          }
  
      </section>
    );
  }
  
  export default MangaVolumeInfo;