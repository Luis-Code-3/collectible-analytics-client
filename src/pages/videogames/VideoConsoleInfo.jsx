import { Link } from "react-router-dom";
import styles from "./videoConsoleInfo.module.css"
import SearchItemCard from "../../components/SearchItemCard";
import { useState } from "react";
import { consoleGames } from "../DummyData";
import ItemSort from "../../components/item_sort_dropdown/ItemSort";

function VideoConsoleInfo() {

  const [allGames, setAllGames] = useState(consoleGames);
  const [search, setSearch] = useState('');

  const handleSortOrder = (sort) => {
    let newArr = [...allGames];
    if(sort === "Alphabetical") {
      newArr.sort((a,b) => {
        return a.gameName.localeCompare(b.gameName);
      })
    } else if (sort === "Reverse Alphabetical") {
      newArr.sort((a,b) => {
        return b.gameName.localeCompare(a.gameName);
      })
    } else if(sort === "Most Recent") {
      newArr.sort((a,b) => {
        return b.gameYear - a.gameYear;
      })
    } else if(sort === "Oldest") {
      newArr.sort((a,b) => {
        return a.gameYear - b.gameYear;
      })
    }


    setAllGames(newArr)
  }

  let filteredItems;

  const filterExecute = () => {
    filteredItems = allGames.filter((game) => {
      return search.toLowerCase() === '' ? game : game.gameName.toLowerCase().includes(search.toLowerCase())
    })
  }


    return (
      <section className={styles.mainSection}>
        <div className={styles.topDiv}>
          <div className={styles.imageBox}>
            <img src="https://c4.wallpaperflare.com/wallpaper/604/831/703/playstation-3-black-sony-ps3-wallpaper-preview.jpg" alt=""/>
          </div>

          <div className={styles.description}>
            <h1>Playstation 3</h1>
            <p><span>Release Date:</span> August 20th, 2023</p>
            <p><span>Creator:</span> Sony</p>
            <p><span>Total:</span> 214</p>
            <p className={styles.descriptionText}>Silver Tempest Paragraph more..</p>
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
                        <SearchItemCard cardImage = {game.gameImage} cardName = {game.gameName} cardId = {game.gameId} setName = {game.consoleName} setId = {game.consoleId} itemType = {game.itemType}/>
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