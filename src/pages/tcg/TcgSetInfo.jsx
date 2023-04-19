import { Link } from "react-router-dom";
import styles from "./tcgSetInfo.module.css"
import SearchItemCard from "../../components/SearchItemCard";
import { useState } from "react";
import { setCards } from "../DummyData";
import ItemSort from "../../components/item_sort_dropdown/ItemSort";


function TcgSetInfo() {

    const [allItems, setAllItems] = useState(setCards);
    const [search, setSearch] = useState('');

    
    const handleSortOrder = (sort) => {
      let newArr = [...allItems];
      if(sort === "Alphabetical") {
        newArr.sort((a,b) => {
          return a.cardName.localeCompare(b.cardName);
        })
      } else if (sort === "Reverse Alphabetical") {
        newArr.sort((a,b) => {
          return b.cardName.localeCompare(a.cardName);
        })
      } else if(sort === "Card # High - Low") {
        newArr.sort((a,b) => {
          return b.cardNumber - a.cardNumber;
        })
      } else if (sort === "Card # Low - High") {
        newArr.sort((a,b) => {
          return a.cardNumber - b.cardNumber;
        })
      }


      setAllItems(newArr)
    }

    let filteredItems;

    const filterExecute = () => {
      filteredItems = allItems.filter((item) => {
        return search.toLowerCase() === '' ? item : item.cardName.toLowerCase().includes(search.toLowerCase())
      })
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
              {/* <select onChange={handleSortOrder}>
                <option disabled selected></option>
                <option>Alphabetical</option>
                <option>Reverse Alphabetical</option>
                <option>Card # High - Low</option>
                <option>Card # Low - High</option>
              </select> */}
              <ItemSort handleSortOrder={handleSortOrder} genreType={"tcg"}/>
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
                        <SearchItemCard cardImage = {item.cardImage} cardName = {item.cardName} cardId = {item.cardId} setName = {item.setName} setId = {item.setId} itemType = {item.itemType}/>
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
  
  export default TcgSetInfo;