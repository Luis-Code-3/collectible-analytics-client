import axios from "axios";
import { baseUrl } from "../../services/baseUrl";
import styles from "./tcgMain.module.css"
import headerImage from "../../images/p1.jpg"
import TcgSetCard from "../../components/tcg_set_card/TcgSetCard";
import { useState, useEffect } from "react";


function TcgMain() {

  const [allSets, setAllSets] = useState(null);
  const [sortedSets, setSortedSets] = useState();
  const [search, setSearch] = useState('');
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

  let filteredItems;

  const filterExecute = () => {
    filteredItems = sortedSets.filter((set) => {
      return search.toLowerCase() === '' ? set : set.setName.toLowerCase().includes(search.toLowerCase())
    })
  }

  useEffect(() => {
    axios.get(`${baseUrl}/tcg/set`)
    .then((response) => {
      setAllSets(response.data);
      let newArr = response.data.filter((set) => {
        return set.language === "english"
      })
      setSortedSets(newArr);
    })
    .catch((err) => {
      console.log(err);
    })

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
              <input onChange={(e) => setSearch(e.target.value)} type='search'></input>
              <button>FILTER</button>
            </div>

          </div>

          <div className={styles.imageBox}>
            <img src={headerImage} alt=""/>
          </div>
          
        </div>

          {
            sortedSets ?
            <>
              {filterExecute()}
              {
                filteredItems.length > 0 ?
                <div className={styles.bottomDiv}>
                    {filteredItems.map((set, index) => {
                    return (
                      <TcgSetCard key={index} setLogo = {set.imageUrl} setName = {set.setName} id = {set._id}/>
                    )
                  })}
                </div>
                : <div className={styles.notFound}><p>ITEM NOT FOUND...</p></div>
              }
            </>

            : <h4> Loading...</h4>
          }
          
  
      </section>
    );
  }
  
  export default TcgMain;