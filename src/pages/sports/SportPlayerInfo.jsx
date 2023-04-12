import { Link } from "react-router-dom";
import styles from "./sportPlayerInfo.module.css";
import { useState } from "react";
import SearchItemSportCard from "../../components/SearchItemSportCard";

function SportPlayerInfo() {

    const [allItems, setAllItems] = useState(
      [
        {
          cardImage: "https://sportscardinvestor.s3.amazonaws.com/prod/372_76_5-L",
          cardId: "252123",
          cardName: "Michael Jordan #57",
          cardType: "Refractor",
          setName: "1986 Fleer",
          itemType: "sports"
        },
        {
          cardImage: "https://sportscardinvestor.s3.amazonaws.com/prod/372_76_5-L",
          cardId: "252123",
          cardName: "Michael Jordan #57",
          cardType: "Refractor",
          setName: "1986 Fleer",
          itemType: "sports"
        },
        {
          cardImage: "https://sportscardinvestor.s3.amazonaws.com/prod/372_76_5-L",
          cardId: "252123",
          cardName: "Michael Jordan #57",
          cardType: "Refractor",
          setName: "1986 Fleer",
          itemType: "sports"
        },
        {
          cardImage: "https://sportscardinvestor.s3.amazonaws.com/prod/372_76_5-L",
          cardId: "252123",
          cardName: "Michael Jordan #57",
          cardType: "Refractor",
          setName: "1986 Fleer",
          itemType: "sports"
        },
        {
          cardImage: "https://sportscardinvestor.s3.amazonaws.com/prod/372_76_5-L",
          cardId: "252123",
          cardName: "Michael Jordan #57",
          cardType: "Refractor",
          setName: "1986 Fleer",
          itemType: "sports"
        },
        {
          cardImage: "https://sportscardinvestor.s3.amazonaws.com/prod/372_76_5-L",
          cardId: "252123",
          cardName: "Michael Jordan #57",
          cardType: "Refractor",
          setName: "1986 Fleer",
          itemType: "sports"
        },
        {
          cardImage: "https://sportscardinvestor.s3.amazonaws.com/prod/372_76_5-L",
          cardId: "252123",
          cardName: "Michael Jordan #57",
          cardType: "Refractor",
          setName: "1986 Fleer",
          itemType: "sports"
        },
      ]
    )



    return (
      <section className={styles.mainSection}>
        <div className={styles.topDiv}>
          <div className={styles.imageBox}>
            <img src="https://cconnect.s3.amazonaws.com/wp-content/uploads/2019/03/1986-87-Fleer-Michael-Jordan-57-RC-Authentic-Rookie-Card.jpg" alt=""/>
          </div>

          <div className={styles.description}>
            <h1>Michael Jordan</h1>
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
                  <SearchItemSportCard cardImage = {item.cardImage} cardName = {item.cardName} cardId = {item.cardId} setName = {item.setName} cardType = {item.cardType} itemType = {item.itemType}/>
                )
              })}
            </>

            : <h4> Loading...</h4>
          }
        </div>
  
      </section>
    );
  }
  
  export default SportPlayerInfo;