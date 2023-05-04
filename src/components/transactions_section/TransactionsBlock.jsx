import { useState, useRef, useContext, useEffect } from 'react';
import styles from './transactionsBlock.module.css'
import {ReactComponent as ReportIcon} from "../../icons/flag-regular.svg"
import ReportModal from "../../components/report_modal/ReportModal";
import { AuthContext } from '../../context/auth.context';
import { useNavigate } from 'react-router-dom';


function TransactionsBlock({filteredTransactions, pathType, itemId}) {
    // console.log("render here");

    const [sortPriceOrder, setSortPriceOrder] = useState('asc');
    const [sortDateOrder, setSortDateOrder] = useState('desc');
    const [sortTitleOrder, setSortTitleOrder] = useState('asc');
    const [sortMarketplaceOrder, setSortMarketplaceOrder] = useState('asc');
    const [sortedTrans, setSortedTrans] = useState()

    const navigate = useNavigate();

    // const sortedTrans = useRef(filteredTransactions);
    const tranIdRef = useRef(null);
    const {isLoggedIn} = useContext(AuthContext);

    const [amountShown, setAmountShown] = useState(25);

    const [openModal, setOpenModal] = useState(false);

    if (openModal) {
        document.body.classList.add(styles.activeModal);
    } else {
        document.body.classList.remove(styles.activeModal);
    }

    const sortDate = () => {
        let newArr = [...filteredTransactions].sort((a,b) => {
            if(sortDateOrder === 'asc') {
                return new Date(b.date_sold) - new Date(a.date_sold);
            } else {
                return new Date(a.date_sold) - new Date(b.date_sold);
            }
        })

        // sortedTrans.current = newArr;
        setSortedTrans(newArr);
        setSortDateOrder(sortDateOrder === 'asc' ? 'desc' : 'asc');
    }

    const sortSalePrice = () => {
        let newArr = [...filteredTransactions].sort((a,b) => {
            if(sortPriceOrder === 'asc') {
                return b.salePrice - a.salePrice;
            } else {
                return a.salePrice - b.salePrice;
            }
        })

        // setFilteredTransactions(newArr);
        // sortedTrans.current = newArr;
        setSortedTrans(newArr);
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

        // setFilteredTransactions(newArr)
        // sortedTrans.current = newArr;
        setSortedTrans(newArr);
        setSortMarketplaceOrder(sortMarketplaceOrder === 'asc' ? 'desc' : 'asc')
    }

    const sortTitle = () => {
        let newArr = [...filteredTransactions].sort((a,b) => {
            if(sortTitleOrder === 'asc') {
                return a.title.localeCompare(b.title);
            } else {
                return b.title.localeCompare(a.title);
            }
        })

        // setFilteredTransactions(newArr)
        // sortedTrans.current = newArr;
        setSortedTrans(newArr);
        setSortTitleOrder(sortTitleOrder === 'asc' ? 'desc' : 'asc')
        
    }

    const handleAmountShown = (event) => {
        setAmountShown(+event.target.value)
    }

    const handleOpenModal = (tranId) => {
        tranIdRef.current = tranId
        setOpenModal(true)
    }

    useEffect(() => {
        setSortedTrans(filteredTransactions);
      }, [filteredTransactions]);


    return (
        <>
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
                sortedTrans ? 
                sortedTrans.slice(0, amountShown).map((tran, index) => {
                    return (
                        <div key={index} className={styles.transactionComplete}>
                            <div className={styles.tranSoldDate}>
                                <p>{tran.date_sold}</p>
                            </div>

                            <div className={styles.tranListingTitle}>
                                <p>{tran.title.toUpperCase()}</p>
                            </div>

                            <div className={styles.tranMarketplace}>
                                <p>{tran.marketplace.toUpperCase()}</p>
                            </div>

                            <div className={styles.tranSalePrice}>
                                <p>${tran.salePrice.toLocaleString('en-US')}</p>
                            </div>
                            {
                                isLoggedIn ? 
                                <>
                                <div className={styles.tranReport}>
                                    <p onClick={() => handleOpenModal(tran._id)} className={styles.reportButton}>{<ReportIcon/>}</p>
                                </div>
                                <ReportModal closeModal={() => setOpenModal(false)} openModal={openModal} tranId = {tranIdRef.current} pathType={pathType} itemId={itemId}/>
                                </>
                                :
                                <div className={styles.tranReport}>
                                    <p onClick={() => navigate('/login')} className={styles.reportButton}>{<ReportIcon/>}</p>
                                </div>
                            }
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
        </> 
    );
  }
  
  export default TransactionsBlock;