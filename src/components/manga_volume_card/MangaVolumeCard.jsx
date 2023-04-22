import { Link } from "react-router-dom";
import styles from './mangaVolumeCard.module.css'


function MangaVolumeCard({volumeName, volumeImage, volumeId}) {



    return (
      <Link to={`/manga/${volumeName.toLowerCase().replace(/ /g,"-")}`} className={styles.cardContainer}>
        <div className={styles.imageBox}>
            <img src={volumeImage} alt=""/>
        </div>

        <div className={styles.titleBox}>
            <p className={styles.name}>{volumeName}</p>
        </div>
        
      </Link>
    );
  }
  
  export default MangaVolumeCard;