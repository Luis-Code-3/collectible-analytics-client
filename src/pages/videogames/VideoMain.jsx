import { Link } from "react-router-dom";
import styles from "./videoMain.module.css"
import headerImage from "../../images/p4.png"
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../services/baseUrl";
import { BeatLoader } from "react-spinners";


function VideoMain() {

    const [allConsoles, setAllConsoles] = useState();
    const [sortedConsoles, setSortedConsoles] = useState()
    const [search, setSearch] = useState('');
    const [currentType, setCurrentType] = useState('');

    const sortAll = () => {
      if(currentType === 'all') {
        return;
      } else {
        setSortedConsoles(allConsoles);
        setCurrentType('all')
      }
    }

    const sortNintendo = () => {
      if(currentType === 'magazine') {
        return;
      } else {
        let newArr = [...allConsoles].filter((console) => {
          return console.company === "nintendo"
        })
        setSortedConsoles(newArr);
        setCurrentType('nintendo')
      }
    }

    const sortAtari = () => {
      if(currentType === 'atari') {
        return;
      } else {
        let newArr = [...allConsoles].filter((console) => {
          return console.company === "atari"
        })
        setSortedConsoles(newArr);
        setCurrentType('atari')
      }
    }

    const sortXbox = () => {
      if(currentType === 'xbox') {
        return;
      } else {
        let newArr = [...allConsoles].filter((console) => {
          return console.company === "xbox"
        })
        setSortedConsoles(newArr);
        setCurrentType('xbox')
      }
    }

    const sortPlaystation = () => {
      if(currentType === 'playstation') {
        return;
      } else {
        let newArr = [...allConsoles].filter((console) => {
          return console.company === "playstation"
        })
        setSortedConsoles(newArr);
        setCurrentType('playstation')
      }
    }

    const sortSega = () => {
      if(currentType === 'sega') {
        return;
      } else {
        let newArr = [...allConsoles].filter((console) => {
          return console.company === "sega"
        })
        setSortedConsoles(newArr);
        setCurrentType('sega')
      }
    }

    let filteredItems;

    const filterExecute = () => {
      filteredItems = sortedConsoles.filter((console) => {
        return search.toLowerCase() === '' ? console : console.consoleName.toLowerCase().includes(search.toLowerCase())
      })
    }


    useEffect(() => {
      axios.get(`${baseUrl}/videogames/console`)
        .then((response) => {
          setAllConsoles(response.data);
          setSortedConsoles(response.data);
        })
        .catch((err) => {
          console.log(err);
        })
    }, [])



    return (
      <section className={styles.tcgMainSection}>
        <div className={styles.topDiv}>
          <div className={styles.textNav}>
            <h1><span>GAME</span> CONSOLES</h1>
            <div className={styles.buttonBox}>
              <button onClick={sortAll}>ALL</button>
              <button onClick={sortNintendo}>NINTENDO</button>
              <button onClick={sortAtari}>ATARI</button>
              <button onClick={sortXbox}>XBOX</button>
              <button onClick={sortPlaystation}>PLAYSTATION</button>
              <button onClick={sortSega}>SEGA</button>
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
            sortedConsoles ?
            <>
              {filterExecute()}
              {
                filteredItems.length > 0 ?
                <div className={styles.bottomDiv}>
                    {filteredItems.map((console, index) => {
                      return (
                        <Link key={index} to={`/video-games/${console.consoleName.toLowerCase().replace(/ /g,"-")}`}>{console.consoleName}</Link>
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
  
  export default VideoMain;