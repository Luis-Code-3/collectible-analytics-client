import axios from "axios";
import { baseUrl } from "../../services/baseUrl";
import styles from "./mangaMain.module.css"
import headerImage from "../../images/p3.png"
import { useState, useEffect } from "react";
import MangaVolumeCard from "../../components/manga_volume_card/MangaVolumeCard";

function MangaMain() {
  
    const [allVolumes, setAllVolumes] = useState()
    const [sortedVolumes, setSortedVolumes] = useState()
    const [search, setSearch] = useState('');
    const [currentType, setCurrentType] = useState('');

    const sortManga = () => {
      if(currentType === 'manga') {
        return;
      } else {
        let newArr = [...allVolumes].filter((volume) => {
          return volume.mangaType === "manga"
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
          return volume.mangaType === "magazine"
        })
        setSortedVolumes(newArr);
        setCurrentType('magazine')
      }
    }

    let filteredItems;

    const filterExecute = () => {
      filteredItems = sortedVolumes.filter((volume) => {
        return search.toLowerCase() === '' ? volume : volume.title.toLowerCase().includes(search.toLowerCase())
      })
    }


    useEffect(() => {
      axios.get(`${baseUrl}/manga/volume`)
      .then((response) => {
        setAllVolumes(response.data);
        setSortedVolumes(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
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
              <input onChange={(e) => setSearch(e.target.value)} type='text'></input>
              <button>FILTER</button>
            </div>

          </div>

          <div className={styles.imageBox}>
            <img src={headerImage} alt=""/>
          </div>
          
        </div>

          {
            sortedVolumes ?
            <>
              {filterExecute()}
              {
                filteredItems.length > 0 ?
                <div className={styles.bottomDiv}>
                    {filteredItems.map((volume) => {
                      return (
                        <MangaVolumeCard volumeImage = {volume.imageUrl} volumeName = {volume.title} volumeId = {volume._id}/>
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
  
  export default MangaMain;