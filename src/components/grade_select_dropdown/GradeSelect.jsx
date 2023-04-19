import styles from './gradeSelect.module.css'
import { useState } from 'react';
import GradeSelectDrop from './GradeSelectDrop';


function GradeSelect({filterGrade, itemType, startGrade}) {

    const [selectedGrade, setSelectedGrade] = useState(startGrade)
    const [showDropdown, setShowDropdown] = useState(false)


    return (
        <>
        <button className={styles.selectButton} onClick={() => setShowDropdown((prev) => !prev)}>{selectedGrade}</button>
        <GradeSelectDrop filterGrade = {filterGrade} setSelectedGrade = {setSelectedGrade} showDropdown = {showDropdown} setShowDropdown = {setShowDropdown} itemType = {itemType}/>
        </>
        
    );
  }
  
  export default GradeSelect;