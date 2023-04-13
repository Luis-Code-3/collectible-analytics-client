import { Link } from "react-router-dom";
import styles from "./mangaMain.module.css"
import headerImage from "../../images/p3.png"
import { useState } from "react";
import MangaVolumeCard from "../../components/MangaVolumeCard";
import { mangaVolumes } from "../DummyData";


function MangaMain() {
  
    const [allVolumes, setAllVolumes] = useState(mangaVolumes)


    return (
      <section className={styles.tcgMainSection}>
        <div className={styles.topDiv}>
          <div className={styles.textNav}>
            <h1><span>MANGA</span> VOLUMES</h1>
            <div className={styles.buttonBox}>
              <button>MANGA</button>
              <button>MAGAZINE</button>
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
            allVolumes ?
            <>
              {allVolumes.map((volume) => {
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