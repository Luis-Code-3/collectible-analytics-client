import styles from './chartSelectDrop.module.css'
import { CSSTransition } from 'react-transition-group';


function ChartSelectDrop({timeFrameSort, setSelectedTime, setShowDropdown, showDropdown}) {

    const timeArray = ["7 Days", "2 Weeks", "1 Month", "3 Month", "6 Month", "1 Year", "All-Time" ]

    const clickActions = (time) => {
        setSelectedTime(time);
        //timeFrameSort(time);
        setShowDropdown(false);
    }

    return (
        <CSSTransition
        in={showDropdown}
        unmountOnExit
        timeout={100}
        classNames={{
            enter: styles.charttimeEnter,
            enterActive: styles.charttimeEnterActive,
            exit: styles.charttimeExit,
            exitActive: styles.charttimeExitActive,
        }}
        >
        <div className={styles.dropdownContainer}>
            {
                timeArray.map((time) => {
                    return (
                        <div onClick={() => clickActions(time)}>
                            <p>{time}</p>
                        </div>
                    )
                })
            }
        </div>
        </CSSTransition>
    );
  }
  
  export default ChartSelectDrop;