import styles from './itemSortDrop.module.css'
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';


function ItemSortDrop({handleSortOrder, setSelectedSort, setShowDropdown, showDropdown, genreType}) {

    const nodeRef = useRef(null);  

    let sortArray = []

    if(genreType === "tcg") {
        sortArray = ["Alphabetical", "Reverse Alphabetical", "Card # High - Low", "Card # Low - High"];
    } else if (genreType === "sports") {
        sortArray = ["Most Recent", "Oldest"];
    } else if (genreType === "game") {
        sortArray = ["Alphabetical", "Reverse Alphabetical", "Most Recent", "Oldest"];
    } else if (genreType === "manga") {
        sortArray = ["Alphabetical", "Reverse Alphabetical"];
    }

    const clickActions = (sort) => {
        setSelectedSort(sort);
        handleSortOrder(sort);
        setShowDropdown(false);
    }

    return (
        <CSSTransition
        nodeRef={nodeRef}
        in={showDropdown}
        unmountOnExit
        timeout={100}
        classNames={{
            enter: styles.sortdropdownEnter,
            enterActive: styles.sortdropdownEnterActive,
            exit: styles.sortdropdownExit,
            exitActive: styles.sortdropdownExitActive,
        }}
        >
        <div ref={nodeRef} className={styles.dropdownContainer}>
            {
                sortArray.map((sort, index) => {
                    return (
                        <div key={index} onClick={() => clickActions(sort)}>
                            <p>{sort}</p>
                        </div>
                    )
                })
            }
        </div>
        </CSSTransition>
    );
  }
  
  export default ItemSortDrop;