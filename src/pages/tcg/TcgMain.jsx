import { Link } from "react-router-dom";
import styles from "./tcgMain.module.css"
import headerImage from "../../images/p1.jpg"
import TcgSetCard from "../../components/TcgSetCard";
import { useState } from "react";
import { tcgSets } from "../DummyData";


function TcgMain() {

  const [allSets, setAllSets] = useState(tcgSets)



    return (
      <section className={styles.tcgMainSection}>
        <div className={styles.topDiv}>
          <div className={styles.textNav}>
            <h1><span>POKÉMON</span> SETS</h1>
            <div className={styles.buttonBox}>
              <button>ENGLISH</button>
              <button>JAPANESE</button>
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
            allSets ?
            <>
              {allSets.map((set) => {
                return (
                  <TcgSetCard setLogo = {set.imageUrl} setName = {set.setName} id = {set.id}/>
                )
              })}
            </>

            : <h4> Loading...</h4>
          }
          
        </div>
  
      </section>
    );
  }
  
  export default TcgMain;