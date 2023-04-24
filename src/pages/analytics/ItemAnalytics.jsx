import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../services/baseUrl";
import styles from "./itemAnalytics.module.css"
import { useState, useEffect } from "react";
import SearchItemCard from "../../components/search_and_item_card/SearchItemCard";
import SearchItemSportCard from "../../components/search_and_item_card/SearchItemSportCard";
import GradeSelect from "../../components/grade_select_dropdown/GradeSelect";
import ChartSelect from "../../components/chart_time_dropdown/ChartSelect";
import TransactionsBlock from "../../components/transactions_section/TransactionsBlock";
import {ReactComponent as WatchIcon} from "../../icons/eye-solid.svg"
import {ReactComponent as AddIcon} from "../../icons/plus-solid.svg"


function ItemAnalytics() {

    // See if I should get all transactions or one grade at a time through api call.
    // I should also probably seperate the components in this page.
    // Need to to do the date sort.
    // And the chart js time frame sort

    // STATES
    const [item, setItem] = useState()
    const [allTransactions, setAllTransactions] = useState()
    const [filteredTransactions, setFilteredTransactions] = useState([])
    const [similarItems, setSimilarItems] = useState()

    const location = useLocation();
    const pathType = location.pathname.split('/')[1]
    const {itemId} = useParams();

    const filterGrade = (grade) => {
        let newArr;
        if (grade === "") {
            newArr = [...allTransactions];
        } else {
            newArr = [...allTransactions].filter((tran) => {
                return tran.grade === grade;
            })
        }

        setFilteredTransactions(newArr)
    }

    const timeFrameSort = (event) => {
        // sort by cutoff date of transactions (6 months, 1 year, etc)
    }

    const itemBio = (itemType) => {
        switch (itemType) {
            case "tcg":
                return (
                    <>
                    <p className={styles.setName}>{item.setName}</p>
                    <h2>{item.cardName}</h2>
                    </>
                );
            case "sports":
                return (
                    <>
                    <p className={styles.cardType}>{item.cardType}</p>
                    <p className={styles.setName}>{item.setName}</p>
                    <h2>{item.playerName}</h2>
                    </>
                );
            case "manga":
                return (
                    <>
                    <p className={styles.setName}>{item.volumeName}</p>
                    <h2>{item.title}</h2>
                    </>
                );
            case "game":
                return (
                    <>
                    <p className={styles.setName}>{item.consoleName}</p>
                    <h2>{item.title}</h2>
                    </>
                );
            default:
        }
    }

    const fetchData = async (itemType) => {
        await axios.get(`${baseUrl}/search/item-details/${itemType}/${itemId}`)
            .then((response) => {
                //console.log(response.data);
                setItem(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
        await axios.get(`${baseUrl}/search/item-sales/${itemType}/${itemId}`)
            .then((response) => {
                //console.log(response.data);
                setAllTransactions(response.data);
                let newArr = response.data.filter((tran) => {
                    //return tran.grade === "PSA 10";
                    switch (itemType) {
                        case "tcg":
                            return tran.grade === "PSA 10";
                        case "manga":
                            return tran.grade === "";
                        case "sports":
                            return tran.grade === "PSA 10";
                        case "videogames":
                            return tran.grade === "WATA 10";
                        default:
                            return false;
                    }
                })
                setFilteredTransactions(newArr)
            })
            .catch((err) => {
                console.log(err);
            })
        await axios.get(`${baseUrl}/search/similar-items/${itemType}`)
            .then((response) => {
                setSimilarItems(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }


    useEffect(() => {
        switch (pathType) {
            case "trading-cards":
                fetchData("tcg");
                break;
            case "manga":
                fetchData("manga");
                break;
            case "sports-cards":
                fetchData("sports");
                break;
            case "video-games":
                fetchData("videogames");
                break;
            default:
        }
    }, [itemId])


    return (
      <section className={styles.mainSection}>
        <div className={styles.topDiv}>
            <div className={styles.leftTopDiv}>
                <div className={styles.imageBox}>
                    {
                        item ? 
                        <img src={item.imageUrl} alt=""/>
                        : <div>Loading...</div>
                    }
                </div>

                <div className={styles.gradePop}>

                    {
                        pathType === "trading-cards" ? 
                            <GradeSelect filterGrade = {filterGrade} itemType = {pathType} startGrade = {"PSA 10"} itemId = {itemId}/>
                        : pathType === "sports-cards" ?
                            <GradeSelect filterGrade = {filterGrade} itemType = {pathType} startGrade = {"PSA 10"} itemId = {itemId}/>
                        : pathType === "video-games" ? 
                            <GradeSelect filterGrade = {filterGrade} itemType = {pathType} startGrade = {"WATA 10"} itemId = {itemId}/>
                        : pathType === "manga" ?
                            <GradeSelect filterGrade = {filterGrade} itemType = {pathType} startGrade = {"----"} itemId = {itemId}/>
                        : null
                    }

                    <div className={styles.gradeAmount}>
                        1,352
                    </div>
                </div>
            </div>

            <div className={styles.rightTopDiv}>
                <div className={styles.itemInfo}>
                    <div className={styles.nameBox}>
                        {
                            item ?
                            <>
                            {itemBio(item.itemType)}
                            </>
                            :<div>Loading...</div>
                        }
                    </div>

                    <div className={styles.extraBox}>
                        <div className={styles.buttons}>
                            <div className={styles.watchIcon}>{<WatchIcon/>}</div>
                            <div className={styles.addIcon}>{<AddIcon/>}</div>
                        </div>

                        <div className={styles.analyticsTitles}>
                            <p>Last Sold Price:</p>
                            <p>Market Cap:</p>
                            <p>Average:</p>
                        </div>

                        <div className={styles.analyticsPrices}>
                            <p className={styles.prices}>$120,000</p>
                            <p className={styles.prices}>10.23M</p>
                            <p className={styles.prices}>$110,234</p>
                            <ChartSelect timeFrameSort={timeFrameSort} itemId = {itemId}/>
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
            <TransactionsBlock filteredTransactions = {filteredTransactions} setFilteredTransactions = {setFilteredTransactions}/>
        </div>

        <div className={styles.similarTitle}>
            SIMILAR
        </div>

        <div className={styles.bottomDiv}>
            {
            similarItems ?
            <>
              {similarItems.map((item) => {
                if (item.itemType === "sports") {
                    return (
                    <SearchItemSportCard cardImage = {item.imageUrl} cardName = {item.playerName} cardId = {item._id} setName = {item.setName} cardType = {item.cardType} cardNumber = {item.cardNumber}/>
                    )
                } else if (item.itemType === "tcg") {
                    return (
                    <SearchItemCard cardImage = {item.imageUrl} cardName = {item.cardName} cardId = {item._id} setName = {item.setName} setId = {item.setId} itemType = {item.itemType} cardNumber = {item.cardNumber}/>
                    )
                } else if (item.itemType === "manga") {
                    return (
                    <SearchItemCard cardImage = {item.imageUrl} cardName = {item.title} cardId = {item._id} setName = {item.volumeName} setId = {item.volumeId} itemType = {item.itemType}/>
                    )
                } else {
                    return (
                    <SearchItemCard cardImage = {item.imageUrl} cardName = {item.title} cardId = {item._id} setName = {item.consoleName} setId = {item.consoleId} itemType = {item.itemType}/>
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