import { Link } from "react-router-dom";
import styles from './mangaVolumeCard.module.css'


function MangaVolumeCard({volumeName, volumeImage}) {



    return (
      <a href="www.google.com" className={styles.cardContainer}>
        <div className={styles.imageBox}>
            <img src={volumeImage} alt=""/>
        </div>

        <div className={styles.titleBox}>
            <p className={styles.name}>{volumeName}</p>
        </div>
        
      </a>
    );
  }
  
  export default MangaVolumeCard;