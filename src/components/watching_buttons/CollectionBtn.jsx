import styles from "./collectionBtn.module.css"
import {ReactComponent as AddIcon} from "../../icons/plus-solid.svg"
import { baseUrl } from "../../services/baseUrl"
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { AuthContext } from "../../context/auth.context"



function CollectionBtn({pathType, itemId}) {
    //console.log("HEYYYY",isLoggedIn);

    const [collecting, setCollecting] = useState();
    const {isLoggedIn} = useContext(AuthContext);

    const toggleCollect = () => {

        if(collecting) {
            //console.log("hey");
            axios.post(`${baseUrl}/collection/remove-collect/${pathType}/${isLoggedIn._id}`, {itemId})
            .then((response) => {
                //console.log(response.data.message);
                setCollecting(false);
            })
            .catch((err) => {
                console.log(err);
            })
        } else {
            //console.log("bye");
            axios.post(`${baseUrl}/collection/add-collect/${pathType}/${isLoggedIn._id}`, {itemId})
                .then((response) => {
                    //console.log(response.data.message);
                    setCollecting(true);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

    }

    useEffect(() => {
        axios.get(`${baseUrl}/collection/is-collecting/${pathType}/${isLoggedIn._id}`, {
            params: {itemId}})
            .then((response) => {
                //console.log(response.data.message);
                if(response.data.message === "Item is already collected") {
                    setCollecting(true);
                } else {
                    setCollecting(false)
                }
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])


    return (
            <div className={`${styles.addIcon} ${collecting ? styles.addActive : ''}`}>{<AddIcon onClick={toggleCollect}/>}</div>
    );
  }
  
  export default CollectionBtn;