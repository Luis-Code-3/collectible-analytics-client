import { Link } from "react-router-dom";
import styles from "./mangaMain.module.css"
import headerImage from "../../images/p3.png"
import { useState, useEffect } from "react";
import MangaVolumeCard from "../../components/MangaVolumeCard";
import { mangaVolumes } from "../DummyData";


function MangaMain() {
  
    const [allVolumes, setAllVolumes] = useState(mangaVolumes)
    const [sortedVolumes, setSortedVolumes] = useState(allVolumes)
    const [currentType, setCurrentType] = useState('');

    const sortManga = () => {
      if(currentType === 'manga') {
        return;
      } else {
        let newArr = [...allVolumes].filter((volume) => {
          return volume.volumeType === "manga"
        })
        setSortedVolumes(newArr);
        setCurrentType('manga')
      }
    }

    const sortMagazine = () => {
      if(currentType === 'magazine') {
        return;
      } else {
        let newArr = [...allVolumes].filter((volume) => {
          return volume.volumeType === "magazine"
        })
        setSortedVolumes(newArr);
        setCurrentType('magazine')
      }
    }


    useEffect(() => {
      
    }, [])


    return (
      <section className={styles.tcgMainSection}>
        <div className={styles.topDiv}>
          <div className={styles.textNav}>
            <h1><span>MANGA</span> VOLUMES</h1>
            <div className={styles.buttonBox}>
              <button onClick={sortManga}>MANGA</button>
              <button onClick={sortMagazine}>MAGAZINE</button>
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
            sortedVolumes ?
            <>
              {sortedVolumes.map((volume) => {
                return (
                  <MangaVolumeCard volumeImage = {volume.volumeImage} volumeName = {volume.volumeName} volumeId = {volume.volumeId}/>
                )
              })}
            </>

            : <h4> Loading...</h4>
          }
        </div>
  
      </section>
    );
  }
  
  export default MangaMain;