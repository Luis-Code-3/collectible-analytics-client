import { Link } from "react-router-dom";
import styles from "./home.module.css";
import pokemonImage from "../images/p1.jpg"
import sportImage from "../images/p2.jpg"
import videoImage from "../images/p4.png"
import mangaImage from "../images/p3.png"


function Home() {



    return (
      <>
        <section className={styles.sectionOne}>
          <div className={styles.secOneBox}>
            <div className={styles.topSecOne}>
              <div className={styles.topSecOneLeft}>
                <div className={styles.uselessButtons}>
                  <div className={styles.leftbtn}>SEARCH</div>
                  <div className={styles.rightbtn}>SELECT GENRE</div>
                </div>

                <div className={styles.searchAndBtn}>
                  <div className={styles.searchBar}></div>
                  <button>Go</button>
                </div>

              </div>

              <div className={styles.topSecOneRight}>
                <h1>COLLECT <span>SMARTER</span></h1>
                <p>Using the #1 Research Tool to study Analytics of your Favorite Collectibles</p>
              </div>

            </div>

            <div className={styles.bottomSecOne}>
              <Link to={'/video-games'} className={styles.imageBox}><img className={styles.vidImage} src={videoImage} alt="main"/></Link>
              <Link to={'/trading-cards'} className={styles.imageBox}><img className={styles.pokeImage} src={pokemonImage} alt="main two"/></Link>
              <Link to={'/sports-cards'} className={styles.imageBox}><img className={styles.spImage} src={sportImage} alt="main three"/></Link>
              <Link to={'/manga'} className={styles.imageBox}><img className={styles.manImage} src={mangaImage} alt="main four"/></Link>
            </div>
          </div>
    
        </section>

        <section className={styles.sectionTwo}>
          <div className={styles.secTwoTop}>
            <p className={styles.maintain}>MAINTAIN YOUR ADVANTAGE</p>
            <h1>COLLECTIBLE'S DATA & ANALYTICS</h1>
            <p className={styles.description}>Start using the #1 Resource for Collectible Analytics, featuring Trading Cards, Sports Cards, Video Games, and Manga</p>
          </div>

          <div className={styles.secTwoBottom}>
            <div>
              <h4>Personalized Collections</h4>
              <p>Add Items to your collection and see how they are performing</p>
            </div>

            <div>
              <h4>Sales History</h4>
              <p>Get sales history for Trading Cards, Sports Cards, Video Games, Manga</p>
            </div>

            <div>
              <h4>In-Depth Analytics</h4>
              <p>Get sales data for various collectibles that go back up to 10 years</p>
            </div>

            <div>
              <h4>Quality Data</h4>
              <p>Get access to the most accurate data pulled from reliable sources</p>
            </div>

            <div>
              <h4>Create Watchlists</h4>
              <p>Add items to your watchlist for future purchase</p>
            </div>

            <div>
              <h4>Make Educated Decisions</h4>
              <p>With our data and analytics you can make informed purchasing decisions</p>
            </div>
            
          </div>
        
        </section>

        <section className={styles.sectionThree}>
        
        </section>

        <section className={styles.sectionFour}>
  
        </section>
      </>
    );
  }
  
  export default Home;