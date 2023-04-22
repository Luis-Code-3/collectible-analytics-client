import styles from "./mangaVolumeInfo.module.css";
import { useState, useEffect } from "react";
import SearchItemCard from "../../components/search_and_item_card/SearchItemCard";
import ItemSort from "../../components/item_sort_dropdown/ItemSort";
import axios from "axios";
import { baseUrl } from "../../services/baseUrl";
import { useParams } from "react-router-dom";


function MangaVolumeInfo() {

  const [currentVolume, setCurrentVolume] = useState()
  const [allItems, setAllItems] = useState();
  const [search, setSearch] = useState('');

  const {mangaId} = useParams()
    
    const handleSortOrder = (sort) => {
      let newArr = [...allItems];
      if(sort === "Alphabetical") {
        newArr.sort((a,b) => {
          return a.title.localeCompare(b.title);
        })
      } else if (sort === "Reverse Alphabetical") {
        newArr.sort((a,b) => {
          return b.title.localeCompare(a.title);
        })
      }


      setAllItems(newArr)
    }

  let filteredItems;

  const filterExecute = () => {
    filteredItems = allItems.filter((item) => {
      // return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search.toLowerCase());
      const itemName = item.volumeName.toLowerCase() + " " + item.title.toLowerCase();
      return search.toLowerCase() === '' ? item : itemName.toLowerCase().includes(search.toLowerCase());
    })
  }

  useEffect(() => {
    axios.get(`${baseUrl}/manga/volume/${mangaId}`)
          .then((response) => {
            setCurrentVolume(response.data[0])
          })
          .catch((err) => {
            console.log(err);
          })

    axios.get(`${baseUrl}/manga/volume-items/${mangaId}`)
          .then((response) => {
            //console.log(response.data);
            setAllItems(response.data)
          })
          .catch((err) => {
            console.log(err);
          })
  }, [])



    return (
      <section className={styles.mainSection}>
        <div className={styles.topDiv}>
          <div className={styles.imageBox}>
            {
              currentVolume ? 
              <img src={currentVolume.imageUrl} alt=""/>
              : <div>Loading...</div>
            }
          </div>

          <div className={styles.description}>
            {
              currentVolume ?
                <>
                <h1>{currentVolume.title}</h1>
                <p><span>Release Date:</span> {currentVolume.releaseDate}</p>
                <p><span>Publisher:</span> {currentVolume.publisher}</p>
                <p><span>Issues:</span> {currentVolume.issueCount}</p>
                <p className={styles.descriptionText}>{currentVolume.description}</p>
                </>
              : <div>Loading...</div>
            }
          </div>

        </div>

        <div className={styles.middleDiv}>
              {/* <select onChange={handleSortOrder}>
                <option disabled selected></option>
                <option>Alphabetical</option>
                <option>Reverse Alphabetical</option>
              </select> */}
              <ItemSort handleSortOrder={handleSortOrder} genreType={"manga"}/>
              <input onChange={(e) => setSearch(e.target.value)} type='text'></input>
              <button className={styles.filterButton}>FILTER</button>

        </div>

          {
            allItems ?
            <>
              {filterExecute()}
              {
                filteredItems.length > 0 ?
                <div className={styles.bottomDiv}>
                    {filteredItems.map((item) => {
                      return (
                        <SearchItemCard cardImage = {item.imageUrl} cardName = {item.title} cardId = {item._id} setName = {item.volumeName} itemType = {item.itemType} setId = {item.volumeId}/>
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
  
  export default MangaVolumeInfo;