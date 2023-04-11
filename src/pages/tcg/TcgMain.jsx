import { Link } from "react-router-dom";
import styles from "./tcgMain.module.css"
import headerImage from "../../images/p1.jpg"
import TcgSetCard from "../../components/TcgSetCard";
import { useState } from "react";


function TcgMain() {

  const [allSets, setAllSets] = useState(
    [
      {
        id: "123",
        setName: "Silver Tempest",
        imageUrl: "https://pokemonsetimages.s3.us-west-1.amazonaws.com/Sets/Set_Images/503.png",
        language: "",
        releaseDate: "",
        description: "",
        setCount: "",
        cards_id: [],
        setYear: ""
      },
      {
        id: "12332",
        setName: "Evolving Skies",
        imageUrl: "https://pokemonsetimages.s3.us-west-1.amazonaws.com/Sets/Set_Images/503.png",
        language: "",
        releaseDate: "",
        description: "",
        setCount: "",
        cards_id: [],
        setYear: ""
      },
      {
        id: "1344",
        setName: "Silver Tempest",
        imageUrl: "https://pokemonsetimages.s3.us-west-1.amazonaws.com/Sets/Set_Images/503.png",
        language: "",
        releaseDate: "",
        description: "",
        setCount: "",
        cards_id: [],
        setYear: ""
      },
      {
        id: "12343",
        setName: "Silver Tempest",
        imageUrl: "https://pokemonsetimages.s3.us-west-1.amazonaws.com/Sets/Set_Images/503.png",
        language: "",
        releaseDate: "",
        description: "",
        setCount: "",
        cards_id: [],
        setYear: ""
      },
      {
        id: "1234563",
        setName: "Silver Tempest",
        imageUrl: "https://pokemonsetimages.s3.us-west-1.amazonaws.com/Sets/Set_Images/503.png",
        language: "",
        releaseDate: "",
        description: "",
        setCount: "",
        cards_id: [],
        setYear: ""
      },
      {
        id: "129983",
        setName: "Silver Tempest",
        imageUrl: "https://pokemonsetimages.s3.us-west-1.amazonaws.com/Sets/Set_Images/503.png",
        language: "",
        releaseDate: "",
        description: "",
        setCount: "",
        cards_id: [],
        setYear: ""
      },

    ]
  )



    return (
      <section className={styles.tcgMainSection}>
        <div className={styles.topDiv}>
          <div className={styles.textNav}>
            <h1><span>POKÉMON</span> SETS</h1>
            <div className={styles.buttonBox}>
              <button>ENGLISH</button>
              <button>JAPANESE</button>
            </div>
            <div className={styles.filterBox}>
              <input type='text'></input>
              <button>FILTER</button>
            </div>

          </div>

          <div className={styles.imageBox}>
            <img src={headerImage} alt=""/>
          </div>
          
        </div>

        <div className={styles.bottomDiv}>
          {
            allSets ?
            <>
              {allSets.map((set) => {
                return (
                  <TcgSetCard setLogo = {set.imageUrl} setName = {set.setName} id = {set.id}/>
                )
              })}
            </>

            : <h4> Loading...</h4>
          }
          
        </div>
  
      </section>
    );
  }
  
  export default TcgMain;