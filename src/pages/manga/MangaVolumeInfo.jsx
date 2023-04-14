import { Link } from "react-router-dom";
import styles from "./mangaVolumeInfo.module.css";
import { useState } from "react";
import SearchItemCard from "../../components/SearchItemCard";
import { volumeItems } from "../DummyData";


function MangaVolumeInfo() {

  const [allItems, setAllItems] = useState(volumeItems);
  const [filteredItems, setFilteredItems] = useState(allItems);
  const [search, setSearch] = useState('');

    
    const handleSortOrder = (event) => {
      let newArr = [...allItems];
      if(event.target.value === "Alphabetical") {
        newArr.sort((a,b) => {
          return a.itemName.localeCompare(b.itemName);
        })
      } else if (event.target.value === "Reverse Alphabetical") {
        newArr.sort((a,b) => {
          return b.itemName.localeCompare(a.itemName);
        })
      }


      setAllItems(newArr)
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
              <select onChange={handleSortOrder}>
                <option disabled selected></option>
                <option>Alphabetical</option>
                <option>Reverse Alphabetical</option>
              </select>
              <input onChange={(e) => setSearch(e.target.value)} type='text'></input>
              <button>FILTER</button>

        </div>

        <div className={styles.bottomDiv}>
          {
            allItems ?
            <>
              {allItems.filter((item) => {
                return search.toLowerCase() === '' ? item : item.itemName.toLowerCase().includes(search.toLowerCase())
              }).map((item) => {
                return (
                  <SearchItemCard cardImage = {item.itemImage} cardName = {item.itemName} cardId = {item.itemId} setName = {item.volumeName} itemType = {item.itemType} setId = {item.volumeId}/>
                )
              })}
            </>

            : <h4> Loading...</h4>
          }
        </div>
  
      </section>
    );
  }
  
  export default MangaVolumeInfo;