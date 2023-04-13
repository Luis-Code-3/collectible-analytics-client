import { Link } from "react-router-dom";
import styles from "./sportPlayerInfo.module.css";
import { useState } from "react";
import SearchItemSportCard from "../../components/SearchItemSportCard";
import { playerItems } from "../DummyData";

function SportPlayerInfo() {

    const [allItems, setAllItems] = useState(playerItems)
    const [filteredItems, setFilteredItems] = useState(allItems);

    const handleSortOrder = (event) => {
      let newArr = [...allItems];
      if(event.target.value === "Most Recent") {
        newArr.sort((a,b) => {
          return b.cardYear - a.cardYear;
        })
      } else if(event.target.value === "Oldest") {
        newArr.sort((a,b) => {
          return a.cardYear - b.cardYear;
        })
      }


      setAllItems(newArr)
    }



    return (
      <section className={styles.mainSection}>
        <div className={styles.topDiv}>
          <div className={styles.imageBox}>
            <img src="https://cconnect.s3.amazonaws.com/wp-content/uploads/2019/03/1986-87-Fleer-Michael-Jordan-57-RC-Authentic-Rookie-Card.jpg" alt=""/>
          </div>

          <div className={styles.description}>
            <h1>Michael Jordan</h1>
            <p className={styles.descriptionText}>Silver Tempest Paragraph more..</p>
          </div>

        </div>

        <div className={styles.middleDiv}>
              <select onChange={handleSortOrder}>
                <option disabled selected></option>
                <option>Most Recent</option>
                <option>Oldest</option>
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
                  <SearchItemSportCard cardImage = {item.cardImage} cardName = {item.cardName} cardId = {item.cardId} setName = {item.setName} cardType = {item.cardType} itemType = {item.itemType}/>
                )
              })}
            </>

            : <h4> Loading...</h4>
          }
        </div>
  
      </section>
    );
  }
  
  export default SportPlayerInfo;