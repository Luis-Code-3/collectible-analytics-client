import { Link } from "react-router-dom";
import styles from "./videoMain.module.css"
import headerImage from "../../images/p4.png"
import { useState, useEffect } from "react";
import { consoles } from "../DummyData";


function VideoMain() {

    const [allConsoles, setAllConsoles] = useState(consoles);
    const [sortedConsoles, setSortedConsoles] = useState(allConsoles)
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
          return console.consoleCompany === "nintendo"
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
          return console.consoleCompany === "atari"
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
          return console.consoleCompany === "xbox"
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
          return console.consoleCompany === "playstation"
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
          return console.consoleCompany === "sega"
        })
        setSortedConsoles(newArr);
        setCurrentType('sega')
      }
    }


    useEffect(() => {
      
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
            sortedConsoles ?
            <>
              {sortedConsoles.map((console) => {
                return (
                  <Link to={`/video-games/${console.consoleId}`}>{console.consoleName}</Link>
                )
              })}
            </>

            : <h4> Loading...</h4>
          }
          
        </div>
  
      </section>
    );
  }
  
  export default VideoMain;