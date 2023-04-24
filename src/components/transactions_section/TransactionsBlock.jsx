import { useState } from 'react';
import styles from './transactionsBlock.module.css'
import {ReactComponent as ReportIcon} from "../../icons/flag-regular.svg"
import ReportModal from "../../components/report_modal/ReportModal";


function TransactionsBlock({filteredTransactions, setFilteredTransactions}) {

    const [sortPriceOrder, setSortPriceOrder] = useState('asc');
    const [sortDateOrder, setSortDateOrder] = useState('asc');
    const [sortTitleOrder, setSortTitleOrder] = useState('asc');
    const [sortMarketplaceOrder, setSortMarketplaceOrder] = useState('asc');

    const [amountShown, setAmountShown] = useState(25);

    const [openModal, setOpenModal] = useState(false);

    if (openModal) {
        document.body.classList.add(styles.activeModal);
    } else {
        document.body.classList.remove(styles.activeModal);
    }

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
                return a.title.localeCompare(b.title);
            } else {
                return b.title.localeCompare(a.title);
            }
        })

        setFilteredTransactions(newArr)
        setSortTitleOrder(sortTitleOrder === 'asc' ? 'desc' : 'asc')
        
    }

    const handleAmountShown = (event) => {
        setAmountShown(+event.target.value)
    }



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
                filteredTransactions.length > 0 ? 
                filteredTransactions.slice(0, amountShown).map((tran) => {
                    return (
                        <div className={styles.transactionComplete}>
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
                                <p>${tran.salePrice}</p>
                            </div>

                            <div className={styles.tranReport}>
                                <p onClick={() => setOpenModal(true)} className={styles.reportButton}>{<ReportIcon/>}</p>
                            </div>
                            <ReportModal closeModal={() => setOpenModal(false)} openModal={openModal} tranId = {tran._id}/>
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