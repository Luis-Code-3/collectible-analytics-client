import { Link } from "react-router-dom";
import styles from "./tcgSetInfo.module.css"
import SearchItemCard from "../../components/SearchItemCard";
import { useState } from "react";


function TcgSetInfo() {

    const [allItems, setAllItems] = useState(
      [
        {
          cardImage: "https://archives.bulbagarden.net/media/upload/5/52/MarioPikachuXYPromo294.jpg",
          cardName: "Mario Pikachu #294",
          setId: "1235451",
          itemType: "tcg",
          setName: "Silver Tempest",
          cardId: "12341q2"
        },
        {
          cardImage: "https://comicvine.gamespot.com/a/uploads/scale_large/6/67663/3599837-01.jpg",
          cardName: "Mario Pikachu #294",
          setId: "1235451",
          itemType: "tcg",
          setName: "Silver Tempest",
          cardId: "12341q2"
        },
        {
          cardImage: "https://archives.bulbagarden.net/media/upload/5/52/MarioPikachuXYPromo294.jpg",
          cardName: "Mario Pikachu #294",
          setId: "1235451",
          itemType: "tcg",
          setName: "Silver Tempest",
          cardId: "12341q2"
        },
        {
          cardImage: "https://archives.bulbagarden.net/media/upload/5/52/MarioPikachuXYPromo294.jpg",
          cardName: "Mario Pikachu #294",
          setId: "1235451",
          itemType: "tcg",
          setName: "Silver Tempest",
          cardId: "12341q2"
        },
        {
          cardImage: "https://archives.bulbagarden.net/media/upload/5/52/MarioPikachuXYPromo294.jpg",
          cardName: "Mario Pikachu #294",
          setId: "1235451",
          itemType: "tcg",
          setName: "Silver Tempest",
          cardId: "12341q2"
        },
        {
          cardImage: "https://archives.bulbagarden.net/media/upload/5/52/MarioPikachuXYPromo294.jpg",
          cardName: "Mario Pikachu #294",
          setId: "1235451",
          itemType: "tcg",
          setName: "Silver Tempest",
          cardId: "12341q2"
        },
        {
          cardImage: "https://archives.bulbagarden.net/media/upload/5/52/MarioPikachuXYPromo294.jpg",
          cardName: "Mario Pikachu #294",
          setId: "1235451",
          itemType: "tcg",
          setName: "Silver Tempest",
          cardId: "12341q2"
        },
      ]
    )



    return (
      <section className={styles.mainSection}>
        <div className={styles.topDiv}>
          <div className={styles.imageBox}>
            <img src="https://pokemonsetimages.s3.us-west-1.amazonaws.com/Sets/Set_Images/503.png" alt=""/>
          </div>

          <div className={styles.description}>
            <h1>Silver Tempest</h1>
            <p><span>Release Date:</span> August 20th, 2023</p>
            <p><span>Total:</span> 214</p>
            <p className={styles.descriptionText}>Silver Tempest Paragraph more..</p>
          </div>

        </div>

        <div className={styles.middleDiv}>
              <select>
                <option disabled selected></option>
                <option>Alphabetical</option>
                <option>Reverse Alphabetical</option>
                <option>Card # High - Low</option>
                <option>Card # Low - High</option>
              </select>
              <input type='text'></input>
              <button>FILTER</button>

        </div>

        <div className={styles.bottomDiv}>
          {
            allItems ?
            <>
              {allItems.map((item) => {
                return (
                  <SearchItemCard cardImage = {item.cardImage} cardName = {item.cardName} cardId = {item.cardId} setName = {item.setName} setId = {item.setId} itemType = {item.itemType}/>
                )
              })}
            </>

            : <h4> Loading...</h4>
          }
        </div>
  
      </section>
    );
  }
  
  export default TcgSetInfo;