import { Link } from "react-router-dom";
import styles from "./tcgSetInfo.module.css"
import SearchItemCard from "../../components/SearchItemCard";
import { useState } from "react";
import { setCards } from "../DummyData";


function TcgSetInfo() {

    const [allItems, setAllItems] = useState(setCards);
    const [filteredItems, setFilteredItems] = useState(allItems);
    const [search, setSearch] = useState('');

    
    const handleSortOrder = (event) => {
      let newArr = [...allItems];
      if(event.target.value === "Alphabetical") {
        newArr.sort((a,b) => {
          return a.cardName.localeCompare(b.cardName);
        })
      } else if (event.target.value === "Reverse Alphabetical") {
        newArr.sort((a,b) => {
          return b.cardName.localeCompare(a.cardName);
        })
      } else if(event.target.value === "Card # High - Low") {
        newArr.sort((a,b) => {
          return b.cardNumber - a.cardNumber;
        })
      } else if (event.target.value === "Card # Low - High") {
        newArr.sort((a,b) => {
          return a.cardNumber - b.cardNumber;
        })
      }


      setAllItems(newArr)
    }




    return (
      <section className={styles.mainSection}>
        <div className={styles.topDiv}>
          <div className={styles.imageBox}>
            <img src="https://pokemonsetimages.s3.us-west-1.amazonaws.com/Sets/Set_Images/503.png" alt=""/>
          </div>

          <div className={styles.description}>
            <h1>Silver Tempest</h1>
            <p><span>Release Date:</span> August 20th, 2023</p>
            <p><span>Total:</span> 214</p>
            <p className={styles.descriptionText}>Silver Tempest Paragraph more..</p>
          </div>

        </div>

        <div className={styles.middleDiv}>
              <select onChange={handleSortOrder}>
                <option disabled selected></option>
                <option>Alphabetical</option>
                <option>Reverse Alphabetical</option>
                <option>Card # High - Low</option>
                <option>Card # Low - High</option>
              </select>
              <input onChange={(e) => setSearch(e.target.value)} type='text'></input>
              <button>FILTER</button>

        </div>

        <div className={styles.bottomDiv}>
          {
            allItems ?
            <>
              {allItems.filter((item) => {
                return search.toLowerCase() === '' ? item : item.cardName.toLowerCase().includes(search.toLowerCase())
              }).map((item) => {
                return (
                  <SearchItemCard cardImage = {item.cardImage} cardName = {item.cardName} cardId = {item.cardId} setName = {item.setName} setId = {item.setId} itemType = {item.itemType}/>
                )
              })}
            </>

            : <h4> Loading...</h4>
          }
        </div>
  
      </section>
    );
  }
  
  export default TcgSetInfo;