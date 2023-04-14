import { Link } from "react-router-dom";
import headerImage from "../../images/p2.jpg"
import styles from "./sportMain.module.css"
import { useState, useEffect } from "react";
import SportPlayerCard from "../../components/SportPlayerCard";
import { players } from "../DummyData";


function SportMain() {

  const [allPlayers, setAllPlayers] = useState(players);
  const [sortedPlayers, setSortedPlayers] = useState(allPlayers);
  const [search, setSearch] = useState('');

    const [currentType, setCurrentType] = useState('');

    const sortAll = () => {
      if(currentType === 'all') {
        return;
      } else {
        setSortedPlayers(allPlayers);
        setCurrentType('all')
      }
    }

    const sortBasketball = () => {
      if(currentType === 'basketball') {
        return;
      } else {
        let newArr = [...allPlayers].filter((player) => {
          return player.sport === "Basketball"
        })
        setSortedPlayers(newArr);
        setCurrentType('basketball')
      }
    }

    const sortBaseball = () => {
      if(currentType === 'baseball') {
        return;
      } else {
        let newArr = [...allPlayers].filter((player) => {
          return player.sport === "Baseball"
        })
        setSortedPlayers(newArr);
        setCurrentType('baseball')
      }
    }

    const sortHockey = () => {
      if(currentType === 'hockey') {
        return;
      } else {
        let newArr = [...allPlayers].filter((player) => {
          return player.sport === "Hockey"
        })
        setSortedPlayers(newArr);
        setCurrentType('hockey')
      }
    }

    const sortFootball = () => {
      if(currentType === 'football') {
        return;
      } else {
        let newArr = [...allPlayers].filter((player) => {
          return player.sport === "Football"
        })
        setSortedPlayers(newArr);
        setCurrentType('football')
      }
    }

    const sortSoccer = () => {
      if(currentType === 'soccer') {
        return;
      } else {
        let newArr = [...allPlayers].filter((player) => {
          return player.sport === "Soccer"
        })
        setSortedPlayers(newArr);
        setCurrentType('soccer')
      }
    }


    useEffect(() => {
      
    }, [])



    return (
      <section className={styles.tcgMainSection}>
        <div className={styles.topDiv}>
          <div className={styles.textNav}>
            <h1><span>SPORTS</span> CARDS</h1>
            <div className={styles.buttonBox}>
              <button onClick={sortAll}>ALL</button>
              <button onClick={sortBasketball}>BASKETBALL</button>
              <button onClick={sortFootball}>FOOTBALL</button>
              <button onClick={sortSoccer}>SOCCER</button>
              <button onClick={sortBaseball}>BASEBALL</button>
              <button onClick={sortHockey}>HOCKEY</button>
            </div>
            <div className={styles.filterBox}>
              <input onChange={(e) => setSearch(e.target.value)} type='text'></input>
              <button>FILTER</button>
            </div>

          </div>

          <div className={styles.imageBox}>
            <img src={headerImage} alt=""/>
          </div>
          
        </div>

        <div className={styles.bottomDiv}>
          {
            sortedPlayers ?
            <>
              {sortedPlayers.filter((player) => {
                return search.toLowerCase() === '' ? player : player.playerName.toLowerCase().includes(search.toLowerCase())
              }).map((player) => {
                return (
                  <SportPlayerCard playerImage = {player.playerImage} playerName = {player.playerName} sport = {player.sport} playerId = {player.playerId}/>
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