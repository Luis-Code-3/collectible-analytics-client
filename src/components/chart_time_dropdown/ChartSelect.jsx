import styles from './chartSelect.module.css'
import { useState, useEffect } from 'react';
import ChartSelectDrop from './ChartSelectDrop';


function ChartSelect({filterTimeFrame, itemId, filteredTransactions}) {

    const [selectedTime, setSelectedTime] = useState()
    const [showDropdown, setShowDropdown] = useState(false)

    useEffect(() => {
        setSelectedTime("1 Month")
    }, [itemId, filteredTransactions])

    return (
        <>
        <button className={styles.timeButton} onClick={() => setShowDropdown((prev) => !prev)}>{selectedTime}</button>
        <ChartSelectDrop filterTimeFrame = {filterTimeFrame} setSelectedTime = {setSelectedTime} showDropdown = {showDropdown} setShowDropdown = {setShowDropdown}/>
        </>
        
    );
  }
  
  export default ChartSelect;