import { Link } from "react-router-dom";
import headerImage from "../../images/p2.jpg"
import styles from "./sportMain.module.css"
import { useState } from "react";
import SportPlayerCard from "../../components/SportPlayerCard";


function SportMain() {

  const [allPlayers, setAllPlayers] = useState(
    [
      {
        playerName: "Michael Jordan",
        playerImage: "https://cdn.nba.com/manage/2021/08/michael-jordan-looks.jpg",
        sport: "Basketball"
      },
      {
        playerName: "Michael Jordan",
        playerImage: "https://cdn.nba.com/manage/2021/08/michael-jordan-looks.jpg",
        sport: "Basketball"
      },
      {
        playerName: "Michael Jordan",
        playerImage: "https://cdn.nba.com/manage/2021/08/michael-jordan-looks.jpg",
        sport: "Basketball"
      },
      {
        playerName: "Michael Jordan",
        playerImage: "https://cdn.nba.com/manage/2021/08/michael-jordan-looks.jpg",
        sport: "Basketball"
      },
      {
        playerName: "Michael Jordan",
        playerImage: "https://cdn.nba.com/manage/2021/08/michael-jordan-looks.jpg",
        sport: "Basketball"
      },
      {
        playerName: "Michael Jordan",
        playerImage: "https://cdn.nba.com/manage/2021/08/michael-jordan-looks.jpg",
        sport: "Basketball"
      },
      {
        playerName: "Michael Jordan",
        playerImage: "https://cdn.nba.com/manage/2021/08/michael-jordan-looks.jpg",
        sport: "Basketball"
      },
    ]
  )



    return (
      <section className={styles.tcgMainSection}>
        <div className={styles.topDiv}>
          <div className={styles.textNav}>
            <h1><span>SPORTS</span> CARDS</h1>
            <div className={styles.buttonBox}>
              <button>PLAYERS</button>
              <button>SPORTS</button>
            </div>
            <div className={styles.filterBox}>
              <input type='text'></input>
              <button>FILTER</button>
            </div>

          </div>

          <div className={styles.imageBox}>
            <img src={headerImage} alt=""/>
          </div>
          
        </div>

        <div className={styles.bottomDiv}>
          {
            allPlayers ?
            <>
              {allPlayers.map((player) => {
                return (
                  <SportPlayerCard playerImage = {player.playerImage} playerName = {player.playerName} sport = {player.sport}/>
                )
              })}
            </>

            : <h4> Loading...</h4>
          }
        </div>
  
      </section>
    );
  }
  
  export default SportMain;