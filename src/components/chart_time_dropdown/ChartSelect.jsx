import styles from './chartSelect.module.css'
import { useState } from 'react';
import ChartSelectDrop from './ChartSelectDrop';


function ChartSelect({timeFrameSort}) {

    const [selectedTime, setSelectedTime] = useState("1 Month")
    const [showDropdown, setShowDropdown] = useState(false)


    return (
        <>
        <button className={styles.timeButton} onClick={() => setShowDropdown((prev) => !prev)}>{selectedTime}</button>
        <ChartSelectDrop timeFrameSort = {timeFrameSort} setSelectedTime = {setSelectedTime} showDropdown = {showDropdown} setShowDropdown = {setShowDropdown}/>
        </>
        
    );
  }
  
  export default ChartSelect;