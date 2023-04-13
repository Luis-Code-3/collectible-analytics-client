import { Link } from "react-router-dom";
import styles from "./videoConsoleInfo.module.css"
import SearchItemCard from "../../components/SearchItemCard";
import { useState } from "react";
import { consoleGames } from "../DummyData";


function VideoConsoleInfo() {

  const [allGames, setAllGames] = useState(consoleGames);


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
            allGames ?
            <>
              {allGames.map((game) => {
                return (
                  <SearchItemCard cardImage = {game.gameImage} cardName = {game.gameName} cardId = {game.gameId} setName = {game.consoleName} setId = {game.consoleId} itemType = {game.itemType}/>
                )
              })}
            </>

            : <h4> Loading...</h4>
          }
        </div>
  
      </section>
    );
  }
  
  export default VideoConsoleInfo;