import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../services/baseUrl";
import styles from "./itemAnalytics.module.css"
import { useState, useEffect, useContext } from "react";
import SearchItemCard from "../../components/search_and_item_card/SearchItemCard";
import SearchItemSportCard from "../../components/search_and_item_card/SearchItemSportCard";
import GradeSelect from "../../components/grade_select_dropdown/GradeSelect";
import ChartSelect from "../../components/chart_time_dropdown/ChartSelect";
import TransactionsBlock from "../../components/transactions_section/TransactionsBlock";
import LineChart from "../../components/chart_analytics/LineChart";
import {ReactComponent as WatchIcon} from "../../icons/eye-solid.svg"
import {ReactComponent as AddIcon} from "../../icons/plus-solid.svg"
import { BeatLoader } from "react-spinners";
import { AuthContext } from "../../context/auth.context";
import WatchingBtn from "../../components/watching_buttons/WatchingBtn";
import CollectionBtn from "../../components/watching_buttons/CollectionBtn";


function ItemAnalytics() {

    // See if I should get all transactions or one grade at a time through api call.
    // I should also probably seperate the components in this page.
    // Need to to do the date sort.
    // And the chart js time frame sort

    // STATES
    const [item, setItem] = useState()
    const [allTransactions, setAllTransactions] = useState()
    const [filteredTransactions, setFilteredTransactions] = useState()
    const [similarItems, setSimilarItems] = useState();

    const navigate = useNavigate();

    const location = useLocation();
    const pathType = location.pathname.split('/')[1]
    const {itemId} = useParams();

    const [datedTransactions, setDatedTransactions] = useState();

    const {isLoggedIn} = useContext(AuthContext);
    


    // const filterTimeFrame = (days, arr) => {
    //     console.log("NEWARR:", arr);
    //     const now = new Date();
    //     console.log("DATE NOW:", now);
    //     const cutoff = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
    //     console.log("CUTOFF:", cutoff);
    //     if(arr) {
    //         console.log("FIRE IF ARR");
    //         console.log("NEW ARR AGAIN:",arr);
    //         console.log("NEW ARR SORT:" , arr.filter(tran => new Date(tran.date_sold).getTime() > cutoff.getTime()));
    //         setDatedTransactions(arr.filter(tran => new Date(tran.date_sold).getTime() > cutoff.getTime()));
    //         console.log("DATED TRANSACTIONS:" , datedTransactions);
    //     } else {
    //         console.log("FIRE NOT ARR");
    //         setDatedTransactions([...filteredTransactions].filter(tran => new Date(tran.date_sold).getTime() > cutoff.getTime()));
    //     }
    // }

    const filterTimeFrame = (days, arr) => {
        console.log("NEWARR:", arr);
        const now = new Date().getTime(); // Get Unix timestamp for now
        console.log("DATE NOW:", now);
        const cutoff = now - days * 24 * 60 * 60 * 1000; // Subtract milliseconds to calculate cutoff
        console.log("CUTOFF:", cutoff);

        const convertToIsoDate = (dateStr) => {
            const [month, day, year] = dateStr.split("-");
            return `${year}-${month}-${day}`;
          };
        
        if (arr) {
            // console.log("FIRE IF ARR");
            // console.log("NEW ARR AGAIN:", arr);
            // console.log("CUTOFF TWO:", cutoff);
            // console.log("TRAN DATE BEFORE UNIX CONVERSION", arr[1].date_sold);
            // console.log("TRAN UNIX DATE", new Date(convertToIsoDate(arr[1].date_sold)).getTime());
            // console.log("NEW ARR SORT:", arr.filter((tran) => {
            //     const isoDateSold = convertToIsoDate(tran.date_sold);
            //     return new Date(isoDateSold).getTime() > cutoff
            // }));
            // setDatedTransactions(arr.filter(tran => new Date(tran.date_sold).getTime() > cutoff));
            setDatedTransactions(arr.filter((tran) => {
                const isoDateSold = convertToIsoDate(tran.date_sold);
                return new Date(isoDateSold).getTime() > cutoff
            }));
            console.log("DATED TRANSACTIONS:", datedTransactions);
        } else {
            console.log("FIRE NOT ARR");
            setDatedTransactions([...filteredTransactions].filter(tran => new Date(convertToIsoDate(tran.date_sold)).getTime() > cutoff));
        }
    }

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
        filterTimeFrame(30, newArr);
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

    const averagePrice = () => {
        let average = 0;
        filteredTransactions.forEach((item) => {
            average += item.salePrice
        })
        average =  "$" + (average/filteredTransactions.length).toLocaleString('en-US');
        return average;
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
                setAllTransactions(response.data.sort((a,b) => new Date(b.date_sold) - new Date(a.date_sold)));
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
                }).sort((a,b) => new Date(b.date_sold) - new Date(a.date_sold))
                setFilteredTransactions(newArr)
                filterTimeFrame(30, newArr);
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
                        : <div className={styles.skeletonImage}></div>
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
                            :<><div className={styles.skeletonText}></div><div className={styles.skeletonText}></div></>
                        }
                    </div>

                    <div className={styles.extraBox}>
                        <div className={styles.buttons}>
                            {
                                isLoggedIn ? 
                                <>
                                <WatchingBtn pathType={pathType} itemId = {itemId}/>
                                <CollectionBtn pathType={pathType} itemId = {itemId}/>
                                </>
                                :
                                <>
                                    <div className={styles.watchIcon}>{<WatchIcon onClick={() => navigate('/login')}/>}</div>
                                    <div className={styles.addIcon}>{<AddIcon onClick={() => navigate('/login')}/>}</div>
                                </>
                            }
                        </div>

                        <div className={styles.analyticsTitles}>
                            <p>Last Sold Price:</p>
                            <p>Market Cap:</p>
                            <p>Average:</p>
                        </div>

                        <div className={styles.analyticsPrices}>
                            <div className={styles.prices}>{filteredTransactions ? filteredTransactions.length > 0 ? "$" + filteredTransactions[0].salePrice.toLocaleString('en-US') : "N/A" : <p className={styles.skeletonPrices}></p>}</div>
                            <p className={styles.prices}>10.23M</p>
                            <div className={styles.prices}>{filteredTransactions ? filteredTransactions.length > 0 ? averagePrice(): "N/A": <p className={styles.skeletonPrices}></p>}</div>
                            <ChartSelect filterTimeFrame={filterTimeFrame} itemId = {itemId} filteredTransactions = {filteredTransactions}/>
                        </div>

                    </div>

                </div>

                <div className={styles.analytics}>
                    {
                        datedTransactions ? 
                        <LineChart datedTransactions = {datedTransactions} getChildFunc = {'getChildFunc'}/>
                        : <div className={styles.skeletonImage}></div>
                    }
                </div>

            </div>

        </div>

        <div className={styles.middleDiv}>
            <div className={styles.topMiddleDiv}>
                <h3>RECENT SALES</h3>
            </div>
            {
                filteredTransactions ? 
                filteredTransactions.length > 0 ? 
                <TransactionsBlock filteredTransactions = {filteredTransactions} setFilteredTransactions = {setFilteredTransactions} itemId = {itemId} pathType = {pathType}/>
                : <div className={styles.noSales}>No Sales</div>
                : <div className={styles.noSales}><div className={styles.skeletonTran}></div></div>
            }
        </div>

        <div className={styles.similarTitle}>
            SIMILAR
        </div>

        <div className={styles.bottomDiv}>
            {
            similarItems ?
            <>
              {similarItems.map((item, index) => {
                if (item.itemType === "sports") {
                    return (
                    <SearchItemSportCard key={index} cardImage = {item.imageUrl} cardName = {item.playerName} cardId = {item._id} setName = {item.setName} cardType = {item.cardType} cardNumber = {item.cardNumber}/>
                    )
                } else if (item.itemType === "tcg") {
                    return (
                    <SearchItemCard key={index} cardImage = {item.imageUrl} cardName = {item.cardName} cardId = {item._id} setName = {item.setName} setId = {item.setId} itemType = {item.itemType} cardNumber = {item.cardNumber}/>
                    )
                } else if (item.itemType === "manga") {
                    return (
                    <SearchItemCard key={index} cardImage = {item.imageUrl} cardName = {item.title} cardId = {item._id} setName = {item.volumeName} setId = {item.volumeId} itemType = {item.itemType}/>
                    )
                } else {
                    return (
                    <SearchItemCard key={index} cardImage = {item.imageUrl} cardName = {item.title} cardId = {item._id} setName = {item.consoleName} setId = {item.consoleId} itemType = {item.itemType}/>
                    )
                }
              })}
            </>

            : <div><BeatLoader color={"#36d7b7"} /></div>
          }
            
        </div>

      </section>
    );
  }
  
  export default ItemAnalytics;