import headerImage from "../../images/p2.jpg"
import styles from "./sportMain.module.css"
import { useState, useEffect } from "react";
import SportPlayerCard from "../../components/sport_player_card/SportPlayerCard";
import axios from "axios";
import { baseUrl } from "../../services/baseUrl";
import { BeatLoader } from "react-spinners";


function SportMain() {

  const [allPlayers, setAllPlayers] = useState(null);
  const [sortedPlayers, setSortedPlayers] = useState();
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

    let filteredItems;

    const filterExecute = () => {
      filteredItems = sortedPlayers.filter((player) => {
        return search.toLowerCase() === '' ? player : player.playerName.toLowerCase().includes(search.toLowerCase())
      })
    }


    useEffect(() => {
      axios.get(`${baseUrl}/sportcards/players`)
        .then((response) => {
          setAllPlayers(response.data);
          setSortedPlayers(response.data)
        })
        .catch((err) => {
          console.log(err);
        })

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

          {
            sortedPlayers ?
            <>
              {filterExecute()}
              {
                filteredItems.length > 0 ?
                <div className={styles.bottomDiv}>
                    {filteredItems.map((player, index) => {
                      return (
                        <SportPlayerCard key={index} playerImage = {player.imageUrl} playerName = {player.playerName} sport = {player.sport} playerId = {player.playerId}/>
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
  
  export default SportMain;