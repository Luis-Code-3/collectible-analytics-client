import { Link } from "react-router-dom";
import styles from "./itemAnalytics.module.css"
import { useState, useEffect } from "react";
import SearchItemCard from "../../components/search_and_item_card/SearchItemCard";
import SearchItemSportCard from "../../components/search_and_item_card/SearchItemSportCard";
import { collectionItems, tranData, oneItem } from "../DummyData";
import ReportModal from "../../components/report_modal/ReportModal";
import GradeSelect from "../../components/grade_select_dropdown/GradeSelect";
import ChartSelect from "../../components/chart_time_dropdown/ChartSelect";
import {ReactComponent as ReportIcon} from "../../icons/flag-regular.svg"
import {ReactComponent as WatchIcon} from "../../icons/eye-solid.svg"
import {ReactComponent as AddIcon} from "../../icons/plus-solid.svg"


function ItemAnalytics() {

    // See if I should get all transactions or one grade at a time through api call.
    // I should also probably seperate the components in this page.
    // Need to to do the date sort.
    // And the chart js time frame sort

    // STATES
    const [item, setItem] = useState(oneItem)
    const [allTransactions, setAllTransactions] = useState(tranData)
    const [filteredTransactions, setFilteredTransactions] = useState([])
    const [similarItems, setSimilarItems] = useState(collectionItems)

    const [amountShown, setAmountShown] = useState(25);

    const [sortPriceOrder, setSortPriceOrder] = useState('asc');
    const [sortDateOrder, setSortDateOrder] = useState('asc');
    const [sortTitleOrder, setSortTitleOrder] = useState('asc');
    const [sortMarketplaceOrder, setSortMarketplaceOrder] = useState('asc');
    
    const [openModal, setOpenModal] = useState(false);

    if (openModal) {
        document.body.classList.add(styles.activeModal);
    } else {
        document.body.classList.remove(styles.activeModal);
    }


    // FUNCTIONS
    const sortDate = () => {

    }

    const sortSalePrice = () => {
        let newArr = [...filteredTransactions].sort((a,b) => {
            if(sortPriceOrder === 'asc') {
                return b.salePrice - a.salePrice;
            } else {
                return a.salePrice - b.salePrice;
            }
        })

        setFilteredTransactions(newArr);
        setSortPriceOrder(sortPriceOrder === 'asc' ? 'desc' : 'asc');
    }

    const sortMarketplace = () => {
        let newArr = [...filteredTransactions].sort((a,b) => {
            if(sortMarketplaceOrder === 'asc') {
                return a.marketplace.localeCompare(b.marketplace);
            } else {
                return b.marketplace.localeCompare(a.marketplace);
            }
        })

        setFilteredTransactions(newArr)
        setSortMarketplaceOrder(sortMarketplaceOrder === 'asc' ? 'desc' : 'asc')
    }

    const sortTitle = () => {
        let newArr = [...filteredTransactions].sort((a,b) => {
            if(sortTitleOrder === 'asc') {
                return a.listingTitle.localeCompare(b.listingTitle);
            } else {
                return b.listingTitle.localeCompare(a.listingTitle);
            }
        })

        setFilteredTransactions(newArr)
        setSortTitleOrder(sortTitleOrder === 'asc' ? 'desc' : 'asc')
        
    }


    const filterGrade = (grade) => {
        let newArr = [...allTransactions].filter((tran) => {
            return tran.grade === grade;
        })

        setFilteredTransactions(newArr)
    }

    const timeFrameSort = (event) => {
        // sort by cutoff date of transactions (6 months, 1 year, etc)
    }

    const handleAmountShown = (event) => {
        setAmountShown(+event.target.value)
    }


    useEffect(() => {

        let newArr = [...allTransactions].filter((tran) => {
            return tran.grade === "PSA 10";
        })

        setFilteredTransactions(newArr)
    }, [])


    return (
      <section className={styles.mainSection}>
        <div className={styles.topDiv}>
            <div className={styles.leftTopDiv}>
                <div className={styles.imageBox}>
                    <img src={item.cardImage} alt=""/>
                </div>

                <div className={styles.gradePop}>

                    {
                        item.itemType === "tcg" ? 
                            <GradeSelect filterGrade = {filterGrade} itemType = {item.itemType} startGrade = {"PSA 10"}/>
                        : item.itemType === "sports" ?
                            <GradeSelect filterGrade = {filterGrade} itemType = {item.itemType} startGrade = {"PSA 10"}/>
                        : item.itemType === "game" ? 
                            <GradeSelect filterGrade = {filterGrade} itemType = {item.itemType} startGrade = {"WATA 10"}/>
                        : item.itemType === "manga" ?
                            <GradeSelect filterGrade = {filterGrade} itemType = {item.itemType} startGrade = {"----"}/>
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
                        {item.itemType === "sports" && <p className={styles.cardType}>{item.cardType}</p>}
                        <p className={styles.setName}>{item.setName}</p>
                        <h2>{item.cardName}</h2>
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
                            <ChartSelect timeFrameSort={timeFrameSort}/>
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
                <div onClick={sortDate} className={styles.soldDate}>
                    <p>SOLD DATE</p>
                </div>

                <div onClick={sortTitle} className={styles.listingTitle}>
                    <p>LISTING TITLE</p>
                </div>

                <div onClick={sortMarketplace} className={styles.marketplace}>
                    <p>MARKETPLACE</p>
                </div>

                <div onClick={sortSalePrice} className={styles.salePrice}>
                    <p>SALE PRICE</p>
                </div>

                <div className={styles.report}>
                    <p>REPORT</p>
                </div>
            </div>

            {
                filteredTransactions.length > 0 ? 
                filteredTransactions.slice(0, amountShown).map((tran) => {
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
                                <p>${tran.salePrice}</p>
                            </div>

                            <div className={styles.tranReport}>
                                <p onClick={() => setOpenModal(true)} className={styles.reportButton}>{<ReportIcon/>}</p>
                            </div>
                            <ReportModal closeModal={() => setOpenModal(false)} openModal={openModal}/>
                        </div>
                    );
                })   

                : <div className={styles.noSales}>NO SALES</div>
            }

            <div className={styles.bottomMiddleDiv}>
                <p>SALES PER PAGE:</p>
                <select onChange={handleAmountShown}>
                    <option>25</option>
                    <option>50</option>
                    <option>75</option>
                    <option>100</option>
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