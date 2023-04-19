import styles from './/gradeSelectDrop.module.css'
import { CSSTransition } from 'react-transition-group';


function GradeSelectDrop({filterGrade, setSelectedGrade, setShowDropdown, showDropdown, itemType}) {

    let gradeArray = []

    if(itemType === "tcg") {
        gradeArray = ["PSA 10", "PSA 9", "PSA 8", "PSA 7", "PSA 6", "PSA 5", "PSA 4", "PSA 3", "PSA 2", "PSA 1"];
    } else if (itemType === "sports") {
        gradeArray = ["PSA 10", "PSA 9", "PSA 8", "PSA 7", "PSA 6", "PSA 5", "PSA 4", "PSA 3", "PSA 2", "PSA 1"];
    } else if (itemType === "game") {
        gradeArray = ["WATA 10", "WATA 9", "WATA 8", "WATA 7", "WATA 6", "WATA 5", "WATA 4", "WATA 3", "WATA 2", "WATA 1"];
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
        <div className={styles.dropdownContainer}>
            {
                gradeArray.map((grade) => {
                    return (
                        <div onClick={() => clickActions(grade)}>
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