import styles from './modalBackdrop.module.css'


function ModalBackdrop({children}) {



    return (
        <div className={styles.addItemContainer}>
            {children}
        </div>
      
    );
  }
  
  export default ModalBackdrop;