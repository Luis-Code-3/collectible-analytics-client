import axios from "axios";
import { baseUrl } from "../../services/baseUrl";
import styles from "./videoConsoleInfo.module.css"
import SearchItemCard from "../../components/search_and_item_card/SearchItemCard";
import { useState, useEffect } from "react";
import ItemSort from "../../components/item_sort_dropdown/ItemSort";
import { useParams } from "react-router-dom";

function VideoConsoleInfo() {

  const [currentConsole, setCurrentConsole] = useState()
  const [allGames, setAllGames] = useState();
  const [search, setSearch] = useState('');

  const {consoleId} = useParams();

  const handleSortOrder = (sort) => {
    let newArr = [...allGames];
    if(sort === "Alphabetical") {
      newArr.sort((a,b) => {
        return a.title.localeCompare(b.title);
      })
    } else if (sort === "Reverse Alphabetical") {
      newArr.sort((a,b) => {
        return b.title.localeCompare(a.title);
      })
    } else if(sort === "Most Recent") {
      newArr.sort((a,b) => {
        return b.releaseDate - a.releaseDate;
      })
    } else if(sort === "Oldest") {
      newArr.sort((a,b) => {
        return a.releaseDate - b.releaseDate;
      })
    }


    setAllGames(newArr)
  }

  let filteredItems;

  const filterExecute = () => {
    filteredItems = allGames.filter((game) => {
      // return search.toLowerCase() === '' ? game : game.title.toLowerCase().includes(search.toLowerCase())
      const itemName = game.consoleName.toLowerCase() + " " + game.title.toLowerCase()
      return search.toLowerCase() === '' ? game : itemName.toLowerCase().includes(search.toLowerCase())
    })
  }

  useEffect(() => {
    axios.get(`${baseUrl}/videogames/console/${consoleId}`)
          .then((response) => {
            //console.log(response.data);
            setCurrentConsole(response.data[0])
          })
          .catch((err) => {
            console.log(err);
          })

    axios.get(`${baseUrl}/videogames/console-games/${consoleId}`)
          .then((response) => {
            //console.log(response.data);
            setAllGames(response.data)
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
              currentConsole ? 
              <img src={currentConsole.imageUrl} alt=""/>
              : <div>Loading...</div>
            }
          </div>

          <div className={styles.description}>
            {
              currentConsole ? 
                <>
                <h1>{currentConsole.consoleName}</h1>
                <p><span>Release Date:</span> {currentConsole.releaseDate}</p>
                <p><span>Creator:</span> {currentConsole.company}</p>
                <p><span>Total:</span> {currentConsole.gameCount}</p>
                <p className={styles.descriptionText}>{currentConsole.description}</p>
                </>
              : <div>Loading...</div>
            }
          </div>

        </div>

        <div className={styles.middleDiv}>
              {/* <select onChange={handleSortOrder}>
                <option disabled selected></option>
                <option>Alphabetical</option>
                <option>Reverse Alphabetical</option>
                <option>Most Recent</option>
                <option>Oldest</option>
              </select> */}
              <ItemSort handleSortOrder={handleSortOrder} genreType={"game"}/>
              <input onChange={(e) => setSearch(e.target.value)} type='text'></input>
              <button className={styles.filterButton}>FILTER</button>

        </div>

          {
            allGames ?
            <>
              {filterExecute()}
              {
                filteredItems.length > 0 ? 
                <div className={styles.bottomDiv}>
                    {filteredItems.map((game) => {
                      return (
                        <SearchItemCard cardImage = {game.imageUrl} cardName = {game.title} cardId = {game._id} setName = {game.consoleName} setId = {game.consoleId} itemType = {game.itemType}/>
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
  
  export default VideoConsoleInfo;