import { Link } from "react-router-dom";
import styles from './tcgSetCard.module.css'


function TcgSetCard({setName, setLogo, id}) {



    return (
      <Link to={`/trading-cards/${id}`} className={styles.cardContainer}>
        <div className={styles.imageBox}>
            <img src={setLogo} alt=""/>
        </div>

        <div className={styles.titleBox}>
            <p>{setName}</p>
        </div>
        
      </Link>
    );
  }
  
  export default TcgSetCard;