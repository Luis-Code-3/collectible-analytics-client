import styles from './gradeSelect.module.css'
import { useState, useEffect } from 'react';
import GradeSelectDrop from './GradeSelectDrop';


function GradeSelect({filterGrade, itemType, startGrade, itemId}) {

    const [selectedGrade, setSelectedGrade] = useState()
    const [showDropdown, setShowDropdown] = useState(false)

    useEffect(() => {
        setSelectedGrade(startGrade)
    }, [itemId])


    return (
        <>
        <button className={styles.selectButton} onClick={() => setShowDropdown((prev) => !prev)}>{selectedGrade}</button>
        <GradeSelectDrop filterGrade = {filterGrade} setSelectedGrade = {setSelectedGrade} showDropdown = {showDropdown} setShowDropdown = {setShowDropdown} itemType = {itemType}/>
        </>
        
    );
  }
  
  export default GradeSelect;