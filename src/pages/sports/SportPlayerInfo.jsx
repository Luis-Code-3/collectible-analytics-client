import { Link } from "react-router-dom";
import styles from "./sportPlayerInfo.module.css";
import { useState } from "react";
import SearchItemSportCard from "../../components/search_and_item_card/SearchItemSportCard";
import { playerItems } from "../DummyData";
import ItemSort from "../../components/item_sort_dropdown/ItemSort";

function SportPlayerInfo() {

    const [allItems, setAllItems] = useState(playerItems)
    const [search,setSearch] = useState('');

    const handleSortOrder = (sort) => {
      let newArr = [...allItems];
      if(sort === "Most Recent") {
        newArr.sort((a,b) => {
          return b.cardYear - a.cardYear;
        })
      } else if(sort === "Oldest") {
        newArr.sort((a,b) => {
          return a.cardYear - b.cardYear;
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
            <img src="https://cconnect.s3.amazonaws.com/wp-content/uploads/2019/03/1986-87-Fleer-Michael-Jordan-57-RC-Authentic-Rookie-Card.jpg" alt=""/>
          </div>

          <div className={styles.description}>
            <h1>Michael Jordan</h1>
            <p className={styles.descriptionText}>Silver Tempest Paragraph more..</p>
          </div>

        </div>

        <div className={styles.middleDiv}>
              {/* <select onChange={handleSortOrder}>
                <option disabled selected></option>
                <option>Most Recent</option>
                <option>Oldest</option>
              </select> */}
              <ItemSort handleSortOrder={handleSortOrder} genreType={"sports"}/>
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
                        <SearchItemSportCard cardImage = {item.cardImage} cardName = {item.cardName} cardId = {item.cardId} setName = {item.setName} cardType = {item.cardType} itemType = {item.itemType}/>
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
  
  export default SportPlayerInfo;