import { Link } from "react-router-dom";
import styles from "./mangaVolumeInfo.module.css";
import { useState } from "react";
import SearchItemCard from "../../components/SearchItemCard";
import { volumeItems } from "../DummyData";


function MangaVolumeInfo() {

  const [allItems, setAllItems] = useState(volumeItems);



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
              <select>
                <option disabled selected></option>
                <option>Alphabetical</option>
                <option>Reverse Alphabetical</option>
                <option>Card # High - Low</option>
                <option>Card # Low - High</option>
              </select>
              <input type='text'></input>
              <button>FILTER</button>

        </div>

        <div className={styles.bottomDiv}>
          {
            allItems ?
            <>
              {allItems.map((item) => {
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