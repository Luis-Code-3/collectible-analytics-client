import styles from './modalBackdrop.module.css'
import React from 'react';


const ModalBackdrop = React.forwardRef((props, ref) => {
    const { children } = props;
  
    return (
      <div ref={ref} className={styles.addItemContainer}>
        {children}
      </div>
    );
  });
  
  export default ModalBackdrop;


//   function ModalBackdrop({children}) {



//     return (
//         <div className={styles.addItemContainer}>
//             {children}
//         </div>
      
//     );
//   }
  
//   export default ModalBackdrop;