import styles from './reportModal.module.css'
import { baseUrl } from '../../services/baseUrl';
import axios from 'axios';
import ModalBackdrop from '../backdrop_modal/ModalBackdrop';
import { CSSTransition } from 'react-transition-group';
import { useRef, useContext } from 'react';
import { AuthContext } from '../../context/auth.context';


function ReportModal({openModal, closeModal, tranId, pathType, itemId}) {

    const inputRef = useRef();
    const nodeRef = useRef(null);
    const nodeRefTwo = useRef(null);

    const {isLoggedIn} = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault()
        //console.log(console.log("tran ID:", tranId));
        const reason = inputRef.current.value;
        if(!reason) {
            return;
        }
        await axios.post(`${baseUrl}/users/report/${pathType}/${itemId}/${tranId}`, {reason, userId: isLoggedIn._id})
            .then((response) => {
                //console.log(response.data.message);
            })
            .catch((err) => {
                console.log(err);
            })
        inputRef.current.value = '';
        closeModal();
        //add a report to the transaction item (object id array)
    }



    return (
        <>
        <CSSTransition
        nodeRef={nodeRefTwo}
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
            <ModalBackdrop ref={nodeRefTwo}></ModalBackdrop>
        </CSSTransition>

        <CSSTransition
        nodeRef={nodeRef}
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
        <div ref={nodeRef} onClick={closeModal} className={styles.twoContainer}>
        <div onClick={(e) => e.stopPropagation()} className={styles.searchBox}>
            <form onSubmit={handleSubmit} className={styles.searchForm}>
                <div className={styles.reportDivBox}>
                    <label>Reason</label>
                    <textarea ref={inputRef}></textarea>
                </div>
                <button type="submit">REPORT</button>
            </form>
        </div>
        </div>
        </CSSTransition>
        </>
    );
  }
  
  export default ReportModal;