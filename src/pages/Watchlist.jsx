import { Link } from "react-router-dom";
import styles from "./watchlist.module.css"
import SearchItemCard from "../components/SearchItemCard";
import SearchItemSportCard from "../components/SearchItemSportCard";
import { useState } from "react";


function Watchlist() {

    const [allItems, setAllItems] = useState(
        [
            {
                itemType: "manga",
                itemName: "Box Set #1",
                itemId: "12453",
                itemImage: "https://comicvine.gamespot.com/a/uploads/scale_medium/13/136525/5793686-43.png",
                volumeName: "Attack on Titan"
            },
            {
                itemType: "sport",
                cardImage: "https://sportscardinvestor.s3.amazonaws.com/prod/372_76_5-L",
                cardId: "252123",
                cardName: "Michael Jordan #57",
                cardType: "Refractor",
                setName: "1986 Fleer"
            },
            {
                itemType: "tcg",
                cardImage: "https://comicvine.gamespot.com/a/uploads/scale_large/6/67663/3599837-01.jpg",
                cardName: "Mario Pikachu #294",
                setName: "Silver Tempest",
                cardId: "12341q2"
            },
            {
                itemType: "game",
                gameId: "1234",
                gameName: "Call of Duty",
                gameImage: "https://m.media-amazon.com/images/I/71idyRpbl-L.jpg",
                consoleName: "Playstation 3"
            },
            {
                itemType: "manga",
                itemName: "Box Set #1",
                itemId: "12453",
                itemImage: "https://comicvine.gamespot.com/a/uploads/scale_medium/13/136525/5793686-43.png",
                volumeName: "Attack on Titan"
            },
            {
                itemType: "sport",
                cardImage: "https://sportscardinvestor.s3.amazonaws.com/prod/372_76_5-L",
                cardId: "252123",
                cardName: "Michael Jordan #57",
                cardType: "Refractor",
                setName: "1986 Fleer"
            },
            {
                itemType: "tcg",
                cardImage: "https://comicvine.gamespot.com/a/uploads/scale_large/6/67663/3599837-01.jpg",
                cardName: "Mario Pikachu #294",
                setName: "Silver Tempest",
                cardId: "12341q2"
            },
            {
                itemType: "game",
                gameId: "1234",
                gameName: "Call of Duty",
                gameImage: "https://m.media-amazon.com/images/I/71idyRpbl-L.jpg",
                consoleName: "Playstation 3"
            },
        ]
    )



    return (
      <section className={styles.mainSection}>
        <div className={styles.topDivBox}>
            <div className={styles.topDiv}>
                WATCHLIST
            </div>

            <div className={styles.addDiv}>
                NEW ITEM
            </div>
        </div>

        <div className={styles.bottomDiv}>
            {
            allItems ?
            <>
              {allItems.map((item) => {
                if (item.itemType === "sport") {
                    return (
                    <SearchItemSportCard cardImage = {item.cardImage} cardName = {item.cardName} cardId = {item.cardId} setName = {item.setName} cardType = {item.cardType}/>
                    )
                } else if (item.itemType === "tcg") {
                    return (
                    <SearchItemCard cardImage = {item.cardImage} cardName = {item.cardName} cardId = {item.cardId} setName = {item.setName} setId = {item.setId} itemType = {item.itemType}/>
                    )
                } else if (item.itemType === "manga") {
                    return (
                    <SearchItemCard cardImage = {item.itemImage} cardName = {item.itemName} cardId = {item.itemId} setName = {item.volumeName} setId = {item.setId} itemType = {item.itemType}/>
                    )
                } else {
                    return (
                    <SearchItemCard cardImage = {item.gameImage} cardName = {item.gameName} cardId = {item.gameId} setName = {item.consoleName} setId = {item.setId} itemType = {item.itemType}/>
                    )
                }
              })}
            </>

            : <h4> Loading...</h4>
          }
        </div>
  
      </section>
    );
  }
  
  export default Watchlist;