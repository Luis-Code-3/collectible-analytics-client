import axios from "axios";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../services/baseUrl";
import styles from "./tcgSetInfo.module.css"
import SearchItemCard from "../../components/search_and_item_card/SearchItemCard";
import { useState, useEffect } from "react";
import ItemSort from "../../components/item_sort_dropdown/ItemSort";
import { BeatLoader } from "react-spinners";


function TcgSetInfo() {

    const [currentSet, setCurrentSet] = useState();
    const [allItems, setAllItems] = useState();
    const [search, setSearch] = useState('');

    const {setId} = useParams();

    
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
          const numA = parseInt(a.cardNumber);
          const numB = parseInt(b.cardNumber);

          if (!isNaN(numA) && !isNaN(numB)) {
              return numB - numA;
          } else if (!isNaN(numA)) {
              return 1;
          } else if (!isNaN(numB)) {
              return -1;
          } else {
              return b.cardNumber.localeCompare(a.cardNumber);
          }
        })
      } else if (sort === "Card # Low - High") {
        newArr.sort((a,b) => {
          const numA = parseInt(a.cardNumber);
          const numB = parseInt(b.cardNumber);

          if (!isNaN(numA) && !isNaN(numB)) {
              return numA - numB;
          } else if (!isNaN(numA)) {
              return -1;
          } else if (!isNaN(numB)) {
              return 1;
          } else {
              return a.cardNumber.localeCompare(b.cardNumber);
          }
        })
      }


      setAllItems(newArr)
    }

    let filteredItems;

    const filterExecute = () => {
      filteredItems = allItems.filter((item) => {
        // console.log(item.cardNumber);
        // console.log(typeof item.cardNumber);
        const itemName = item.cardName.toLowerCase() + " #" + item.cardNumber.toLowerCase();
        // return search.toLowerCase() === '' ? item : item.cardName.toLowerCase().includes(search.toLowerCase()) || item.cardNumber.toString().toLowerCase().includes(search.toLowerCase())
        return search.toLowerCase() === '' ? item : itemName.toLowerCase().includes(search.toLowerCase());
      })
    }

    useEffect(() => {
        axios.get(`${baseUrl}/tcg/set/${setId}`)
          .then((response) => {
            //console.log(response.data);
            setCurrentSet(response.data[0])
            // setAllItems(setCards)
          })
          .catch((err) => {
            console.log(err);
          })

          axios.get(`${baseUrl}/tcg/set-cards/${setId}`)
          .then((response) => {
            //console.log(response.data);
            setAllItems(response.data)
          })
          .catch((err) => {
            console.log(err);
          })
    }, [])




    return (
      <section className={styles.mainSection}>
        <div className={styles.topDiv}>
          <div className={styles.imageBox}>
            {
              currentSet ?
                <img src={currentSet.imageUrl} alt=""/>
              : <div className={styles.skeletonImage}></div>
            }
          </div>

          <div className={styles.description}>
            {
              currentSet ?
              <>
              <h1>{currentSet.setName}</h1>
              <p><span>Release Date:</span> {currentSet.releaseDate}</p>
              <p><span>Total:</span> {currentSet.setCount}</p>
              <p className={styles.descriptionText}>{currentSet.description}</p>
              </>
              : <><div className={styles.skeletonText}></div><div className={styles.skeletonText}></div><div className={styles.skeletonText}></div><div className={styles.skeletonDescription}></div></>
            }
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
                    {filteredItems.map((item, index) => {
                      return (
                        <SearchItemCard key={index} cardImage = {item.imageUrl} cardName = {item.cardName} cardId = {item._id} setName = {item.setName} setId = {item.setId} itemType = {item.itemType} cardNumber = {item.cardNumber}/>
                      )
                    })}
                </div>
                : <div className={styles.notFound}><p>ITEM NOT FOUND...</p></div>
              }
            </>

            : <div className={styles.loadingContainer}><BeatLoader color={"#36d7b7"} /></div>
          }
  
      </section>
    );
  }
  
  export default TcgSetInfo;