import { Link } from "react-router-dom";
import styles from "./itemAnalytics.module.css"
import { useState, useEffect } from "react";
import SearchItemCard from "../components/SearchItemCard";
import SearchItemSportCard from "../components/SearchItemSportCard";
import { collectionItems, tranData } from "./DummyData";
import ReportModal from "../components/ReportModal";


function ItemAnalytics() {

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

    const [item, setItem] = useState(
        {
            cardImage: "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1106604.jpg",
            cardName: "Mario Pikachu #294",
            setId: "1235451",
            itemType: "tcg",
            setName: "Silver Tempest",
            cardId: "12341q2",
            cardType: "Refractor",
        }
    )

    const [allTransactions, setAllTransactions] = useState(tranData)
    const [filteredTransactions, setFilteredTransactions] = useState([])
    const [dataTransactions, setDataTransactions] = useState([]);

    const [similarItems, setSimilarItems] = useState(collectionItems)
    const [amountShown, setAmountShown] = useState(25);

    
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


    const filterGrade = (event) => {
        let newArr = [...allTransactions].filter((tran) => {
            return tran.grade === event.target.value;
        })

        setFilteredTransactions(newArr)
        setDataTransactions(newArr)
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
        setDataTransactions(newArr)

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
                            <select onChange={filterGrade}>
                                <option>PSA 10</option>
                                <option>PSA 9</option>
                                <option>PSA 8</option>
                            </select>
                        : item.itemType === "sports" ?
                            <select>
                                <option>PSA 10</option>
                                <option>PSA 9</option>
                                <option>PSA 8</option>
                            </select>
                        : item.itemType === "game" ? 
                            <select>
                                <option>WATA 10</option>
                                <option>WATA 9</option>
                                <option>WATA 8</option>
                            </select>
                        : item.itemType === "manga" ?
                            <select>
                                <option>----</option>
                            </select>
                        : null
                    }

                    <div>
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
                            <select onChange={timeFrameSort}>
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
                                <p onClick={() => setOpenModal(true)} className={styles.reportButton}>X</p>
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