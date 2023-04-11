import { Link } from "react-router-dom";
import styles from "./videoMain.module.css"
import headerImage from "../../images/p4.png"
import { useState } from "react";


function VideoMain() {

    const [allConsoles, setAllConsoles] = useState(
      [
        {
          consoleName: "Playstation 3"
        },
        {
          consoleName: "Playstation 4"
        },
        {
          consoleName: "Xbox 360"
        },
        {
          consoleName: "GameBoy Advance"
        },
        {
          consoleName: "Nintendo 64"
        },
        {
          consoleName: "Xbox One"
        },
        {
          consoleName: "Playstation 2"
        },
      ]
    );



    return (
      <section className={styles.tcgMainSection}>
        <div className={styles.topDiv}>
          <div className={styles.textNav}>
            <h1><span>GAME</span> CONSOLES</h1>
            <div className={styles.buttonBox}>
              <button>ALL</button>
              <button>NINTENDO</button>
              <button>ATARI</button>
              <button>XBOX</button>
              <button>PLAYSTATION</button>
              <button>SEGA</button>
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
            allConsoles ?
            <>
              {allConsoles.map((console) => {
                return (
                  <a href="www.google.com">{console.consoleName}</a>
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