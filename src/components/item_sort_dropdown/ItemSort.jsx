import styles from './itemSort.module.css'
import { useState } from 'react';
import ItemSortDrop from './ItemSortDrop';


function ItemSort({handleSortOrder, genreType}) {

    const [selectedSort, setSelectedSort] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);


    return (
        <>
        <button className={styles.sortButton} onClick={() => setShowDropdown((prev) => !prev)}>{selectedSort}</button>
        <ItemSortDrop handleSortOrder = {handleSortOrder} setSelectedSort = {setSelectedSort} showDropdown = {showDropdown} setShowDropdown = {setShowDropdown} genreType = {genreType}/>
        </>
        
    );
  }
  
  export default ItemSort;