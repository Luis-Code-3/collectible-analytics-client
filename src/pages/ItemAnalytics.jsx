import { Link } from "react-router-dom";
import styles from "./itemAnalytics.module.css"
import { useState } from "react";
import SearchItemCard from "../components/SearchItemCard";
import SearchItemSportCard from "../components/SearchItemSportCard";


function ItemAnalytics() {

    const [item, setItem] = useState(
        {
            cardImage: "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1106604.jpg",
            cardName: "Mario Pikachu #294",
            setId: "1235451",
            itemType: "tcg",
            setName: "Silver Tempest",
            cardId: "12341q2"
        }
    )

    const [allTransactions, setAllTransactions] = useState(
        [
            {
                soldDate: "2023-12-07",
                listingTitle: "The title of the listing",
                marketplace: "goldin auctions",
                salePrice: "$21,093",
            },
            {
                soldDate: "2023-12-07",
                listingTitle: "The title of the listing",
                marketplace: "goldin auctions",
                salePrice: "$21,093",
            },
            {
                soldDate: "2023-12-07",
                listingTitle: "The title of the listing",
                marketplace: "goldin auctions",
                salePrice: "$21,093",
            },
            {
                soldDate: "2023-12-07",
                listingTitle: "The title of the listing",
                marketplace: "goldin auctions",
                salePrice: "$21,093",
            },
            {
                soldDate: "2023-12-07",
                listingTitle: "The title of the listing",
                marketplace: "goldin auctions",
                salePrice: "$21,093",
            },
            {
                soldDate: "2023-12-07",
                listingTitle: "The title of the listing",
                marketplace: "goldin auctions",
                salePrice: "$21,093",
            },
            {
                soldDate: "2023-12-07",
                listingTitle: "The title of the listing",
                marketplace: "goldin auctions",
                salePrice: "$21,093",
            },
            {
                soldDate: "2023-12-07",
                listingTitle: "The title of the listing",
                marketplace: "goldin auctions",
                salePrice: "$21,093",
            },
            {
                soldDate: "2023-12-07",
                listingTitle: "The title of the listing",
                marketplace: "goldin auctions",
                salePrice: "$21,093",
            },
            {
                soldDate: "2023-12-07",
                listingTitle: "The title of the listing",
                marketplace: "goldin auctions",
                salePrice: "$21,093",
            },
        ]
    )

    const [similarItems, setSimilarItems] = useState(
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
        <div className={styles.topDiv}>
            <div className={styles.leftTopDiv}>
                <div className={styles.imageBox}>
                    <img src={item.cardImage} alt=""/>
                </div>

                <div className={styles.gradePop}>
                    <select>
                        <option>PSA 10</option>
                        <option>PSA 9</option>
                        <option>PSA 8</option>
                    </select>

                    <div>
                        1,352
                    </div>
                </div>
            </div>

            <div className={styles.rightTopDiv}>
                <div className={styles.itemInfo}>
                    <div className={styles.nameBox}>
                        <p>{item.setName}</p>
                        <h2>{item.cardName}</h2>
                    </div>

                    <div className={styles.extraBox}>
                        <div className={styles.buttons}>
                            <div></div>
                            <div></div>
                        </div>

                        <div className={styles.analyticsTitles}>
                            <p>Last Sold Price:</p>
                            <p>Market Cap:</p>
                            <p>Average:</p>
                        </div>

                        <div className={styles.analyticsPrices}>
                            <p>$120,000</p>
                            <p>10.23M</p>
                            <p>$110,234</p>
                            <select>
                                <option>1 Month</option>
                                <option>3 Month</option>
                                <option>6 Month</option>
                                <option>1 Year</option>
                            </select>
                        </div>

                    </div>

                </div>

                <div className={styles.analytics}>

                </div>

            </div>

        </div>

        <div className={styles.middleDiv}>
            <div className={styles.topMiddleDiv}>
                <h3>RECENT SALES</h3>
            </div>

            <div className={styles.transactionTitles}>
                <div className={styles.soldDate}>
                    <p>SOLD DATE</p>
                </div>

                <div className={styles.listingTitle}>
                    <p>LISTING TITLE</p>
                </div>

                <div className={styles.marketplace}>
                    <p>MARKETPLACE</p>
                </div>

                <div className={styles.salePrice}>
                    <p>SALE PRICE</p>
                </div>

                <div className={styles.report}>
                    <p>REPORT</p>
                </div>
            </div>

            {
                allTransactions.length > 0 ? 
                allTransactions.map((tran) => {
                    return (
                        <div className={styles.transactionComplete}>
                            <div className={styles.tranSoldDate}>
                                <p>{tran.soldDate}</p>
                            </div>

                            <div className={styles.tranListingTitle}>
                                <p>{tran.listingTitle.toUpperCase()}</p>
                            </div>

                            <div className={styles.tranMarketplace}>
                                <p>{tran.marketplace.toUpperCase()}</p>
                            </div>

                            <div className={styles.tranSalePrice}>
                                <p>{tran.salePrice}</p>
                            </div>

                            <div className={styles.tranReport}>
                                <p>X</p>
                            </div>
                        </div>
                    );
                })   

                : <div className={styles.noSales}>NO SALES</div>
            }

            <div className={styles.bottomMiddleDiv}>
                <p>SALES PER PAGE:</p>
                <select>
                    <option>50</option>
                    <option>100</option>
                    <option>250</option>
                </select>
            </div>


            
        </div>

        <div className={styles.similarTitle}>
            SIMILAR
        </div>

        <div className={styles.bottomDiv}>
            {
            similarItems ?
            <>
              {similarItems.map((item) => {
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
  
  export default ItemAnalytics;