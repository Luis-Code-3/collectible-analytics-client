import styles from './/gradeSelectDrop.module.css'
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';


function GradeSelectDrop({filterGrade, setSelectedGrade, setShowDropdown, showDropdown, itemType}) {

    const nodeRef = useRef(null);

    let gradeArray = []

    if(itemType === "trading-cards") {
        gradeArray = ["PSA 10", "PSA 9", "PSA 8", "PSA 7", "PSA 6", "PSA 5", "PSA 4", "PSA 3", "PSA 2", "PSA 1"];
    } else if (itemType === "sports-cards") {
        gradeArray = ["PSA 10", "PSA 9", "PSA 8", "PSA 7", "PSA 6", "PSA 5", "PSA 4", "PSA 3", "PSA 2", "PSA 1"];
    } else if (itemType === "video-games") {
        gradeArray = ["WATA 10", "WATA 9", "WATA 8", "WATA 7", "WATA 6", "CIB", "LOOSE", "NEW", "BOX-ONLY"];
    } else if (itemType === "manga") {
        gradeArray = ["----"];
    }

    const clickActions = (grade) => {
        setSelectedGrade(grade);
        filterGrade(grade);
        setShowDropdown(false);
    }

    return (
        <>
        {
            itemType === "manga" ? null 
            
        :<CSSTransition
        nodeRef={nodeRef}
        in={showDropdown}
        unmountOnExit
        timeout={100}
        classNames={{
            enter: styles.selectdropEnter,
            enterActive: styles.selectdropEnterActive,
            exit: styles.selectdropExit,
            exitActive: styles.selectdropExitActive,
        }}
        >
        <div ref={nodeRef} className={styles.dropdownContainer}>
            {
                gradeArray.map((grade, index) => {
                    return (
                        <div key={index} onClick={() => clickActions(grade)}>
                            <p>{grade}</p>
                        </div>
                    )
                })
            }
        </div>
        </CSSTransition>
        }
        </>
    );
  }
  
  export default GradeSelectDrop;