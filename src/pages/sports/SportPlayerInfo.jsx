import styles from "./sportPlayerInfo.module.css";
import { useEffect, useState } from "react";
import SearchItemSportCard from "../../components/search_and_item_card/SearchItemSportCard";
import { playerItems } from "../DummyData";
import ItemSort from "../../components/item_sort_dropdown/ItemSort";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../services/baseUrl";
import axios from "axios";

function SportPlayerInfo() {

    const [currentPlayer, setCurrentPlayer] = useState();
    const [allItems, setAllItems] = useState()
    const [search,setSearch] = useState('');

    const {playerId} = useParams();

    const handleSortOrder = (sort) => {
      let newArr = [...allItems];
      if(sort === "Most Recent") {
        newArr.sort((a,b) => {
          return Number(b.setName.match(/\d+/g).join('')) - Number(a.setName.match(/\d+/g).join(''));
        })
      } else if(sort === "Oldest") {
        newArr.sort((a,b) => {
          return Number(a.setName.match(/\d+/g).join('')) - Number(b.setName.match(/\d+/g).join(''));
        })
      }


      setAllItems(newArr)
    }


    let filteredItems;

    const filterExecute = () => {
      filteredItems = allItems.filter((item) => {
        // return search.toLowerCase() === '' ? item : item.playerName.toLowerCase().includes(search.toLowerCase())
        const itemName = item.setName.toLowerCase() + " " + item.playerName.toLowerCase() + " #" + item.cardNumber.toString().toLowerCase();
        return search.toLowerCase() === '' ? item : itemName.toLowerCase().includes(search.toLowerCase())
      })
    }

    useEffect(() => {
      axios.get(`${baseUrl}/sportcards/players/${playerId}`)
          .then((response) => {
            //console.log(response.data);
            setCurrentPlayer(response.data[0])
          })
          .catch((err) => {
            console.log(err);
          })

      axios.get(`${baseUrl}/sportcards/player-cards/${playerId}`)
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
              currentPlayer ? 
                <img src={currentPlayer.imageUrl} alt=""/>
              : <div>Loading...</div>
            }
          </div>

          <div className={styles.description}>
            {
              currentPlayer ?
                <>
                  <h1>{currentPlayer.playerName}</h1>
                  <p className={styles.descriptionText}>{currentPlayer.description}</p>
                </>
              : <div>Loading...</div>
            }
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
                        <SearchItemSportCard cardImage = {item.imageUrl} cardName = {item.playerName} cardId = {item._id} setName = {item.setName} cardType = {item.cardType} itemType = {item.itemType} cardNumber = {item.cardNumber}/>
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