import styles from './chartSelectDrop.module.css'
import { CSSTransition } from 'react-transition-group';


function ChartSelectDrop({filterTimeFrame, setSelectedTime, setShowDropdown, showDropdown}) {

    const timeArray = ["1 Day", "7 Days", "1 Month", "3 Month", "6 Month", "1 Year", "All-Time" ];
    //const timeArray = [1, 7, 30, 90, 180, 365];

    const clickActions = (time) => {
        setSelectedTime(time);
        switch (time) {
            case "1 Day":
                filterTimeFrame(1)
                break;
            case "7 Days":
                filterTimeFrame(7)
                break;
            case "1 Month":
                filterTimeFrame(30)
                break;
            case "3 Month":
                filterTimeFrame(90)
                break;
            case "6 Month":
                filterTimeFrame(180)
                break;
            case "1 Year":
                filterTimeFrame(365)
                break;
            case "All-Time":
                filterTimeFrame(5000)
                break;
            default:
                return;
        }
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