import styles from './reportModal.module.css'
import ModalBackdrop from '../backdrop_modal/ModalBackdrop';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';


function ReportModal({openModal, closeModal, tranId}) {

    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
        const searchValue = inputRef.current.value;
        inputRef.current.value = '';
        closeModal();
        //add a report to the the report model
        //add a report to the transaction item (object id array)
    }



    return (
        <>
        <CSSTransition
        in={openModal}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames={{
            enter: styles.backdropEnter,
            enterActive: styles.backdropEnterActive,
            exit: styles.backdropExit,
            exitActive: styles.backdropExitActive,
        }}
        >
            <ModalBackdrop></ModalBackdrop>
        </CSSTransition>

        <CSSTransition
        in={openModal}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames={{
            enter: styles.modalEnter,
            enterActive: styles.modalEnterActive,
            exit: styles.modalExit,
            exitActive: styles.modalExitActive,
        }}
        >
        <div onClick={closeModal} className={styles.twoContainer}>
        <div onClick={(e) => e.stopPropagation()} className={styles.searchBox}>
            <form onSubmit={handleSubmit} className={styles.searchForm}>
                <div className={styles.reportDivBox}>
                    <label>Reason</label>
                    <textarea ref={inputRef}></textarea>
                </div>
                <button type="submit">SEARCH</button>
            </form>
        </div>
        </div>
        </CSSTransition>
        </>
    );
  }
  
  export default ReportModal;