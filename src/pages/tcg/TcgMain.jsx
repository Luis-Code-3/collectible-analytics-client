import { Link } from "react-router-dom";
import styles from "./tcgMain.module.css"
import headerImage from "../../images/p1.jpg"
import TcgSetCard from "../../components/TcgSetCard";
import { useState, useEffect } from "react";
import { tcgSets } from "../DummyData";


function TcgMain() {

  const [allSets, setAllSets] = useState(tcgSets)
  const [sortedSets, setSortedSets] = useState()
  const [currentLanguage, setCurrentLanguage] = useState('english');

  const sortEnglish = () => {
    if(currentLanguage === 'english') {
      return;
    } else {
      let newArr = [...allSets].filter((set) => {
        return set.language === "english"
      })
      setSortedSets(newArr);
      setCurrentLanguage('english')
    }
  }

  const sortJapanese = () => {
    if(currentLanguage === 'japanese') {
      return;
    } else {
      let newArr = [...allSets].filter((set) => {
        return set.language === "japanese"
      })
      setSortedSets(newArr);
      setCurrentLanguage('japanese')
    }
  }


  useEffect(() => {
    let newArr = [...allSets].filter((set) => {
      return set.language === "english"
    })

    setSortedSets(newArr);
  }, [])



    return (
      <section className={styles.tcgMainSection}>
        <div className={styles.topDiv}>
          <div className={styles.textNav}>
            <h1><span>POKÉMON</span> SETS</h1>
            <div className={styles.buttonBox}>
              <button onClick={sortEnglish}>ENGLISH</button>
              <button onClick={sortJapanese}>JAPANESE</button>
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
            sortedSets ?
            <>
              {sortedSets.map((set) => {
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