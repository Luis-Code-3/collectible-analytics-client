import { Link } from "react-router-dom";
import styles from "./videoConsoleInfo.module.css"
import SearchItemCard from "../../components/SearchItemCard";
import { useState } from "react";


function VideoConsoleInfo() {

  const [allGames, setAllGames] = useState(
    [
      {
        gameId: "1234",
        gameName: "Call of Duty",
        gameImage: "https://m.media-amazon.com/images/I/71idyRpbl-L.jpg",
        consoleId: "3252131",
        itemType: "game",
        consoleName: "Playstation 3"
      },
      {
        gameId: "1234",
        gameName: "Call of Duty",
        gameImage: "https://commondatastorage.googleapis.com/images.pricecharting.com/1f0320c6cb2c29de18a77a73547737025b20aea716b9a05dd4dff9e779d369dd/240.jpg",
        consoleId: "3252131",
        itemType: "game",
        consoleName: "Playstation 3"
      },
      {
        gameId: "1234",
        gameName: "Call of Duty",
        gameImage: "https://www.lukiegames.com/assets/images/Xbox-360/x360_call_of_duty_black_ops_3_p_8c9ht3.jpg",
        consoleId: "3252131",
        itemType: "game",
        consoleName: "Playstation 3"
      },
      {
        gameId: "1234",
        gameName: "Call of Duty",
        gameImage: "https://m.media-amazon.com/images/I/71idyRpbl-L.jpg",
        consoleId: "3252131",
        itemType: "game",
        consoleName: "Playstation 3"
      },
      {
        gameId: "1234",
        gameName: "Call of Duty",
        gameImage: "https://www.lukiegames.com/assets/images/Xbox-360/x360_call_of_duty_black_ops_3_p_8c9ht3.jpg",
        consoleId: "3252131",
        itemType: "game",
        consoleName: "Playstation 3"
      },
      {
        gameId: "1234",
        gameName: "Call of Duty",
        gameImage: "https://m.media-amazon.com/images/I/71idyRpbl-L.jpg",
        consoleId: "3252131",
        itemType: "game",
        consoleName: "Playstation 3"
      },
    ]
  );


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