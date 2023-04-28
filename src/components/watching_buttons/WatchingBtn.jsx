import styles from "./watchingBtn.module.css"
import {ReactComponent as WatchIcon} from "../../icons/eye-solid.svg"
import { baseUrl } from "../../services/baseUrl"
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { AuthContext } from "../../context/auth.context"



function WatchingBtn({pathType, itemId}) {
    //console.log("HEYYYY",isLoggedIn);

    const [watching, setWatching] = useState();
    const {isLoggedIn} = useContext(AuthContext);

    const toggleWatch = () => {

        if(watching) {
            //console.log("hey");
            axios.post(`${baseUrl}/watchlist/remove-watchlist/${pathType}/${isLoggedIn._id}`, {itemId})
            .then((response) => {
                //console.log(response.data.message);
                setWatching(false);
            })
            .catch((err) => {
                console.log(err);
            })
        } else {
            //console.log("bye");
            axios.post(`${baseUrl}/watchlist/add-watchlist/${pathType}/${isLoggedIn._id}`, {itemId})
                .then((response) => {
                    //console.log(response.data.message);
                    setWatching(true);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

    }

    useEffect(() => {
        axios.get(`${baseUrl}/watchlist/is-watching/${pathType}/${isLoggedIn._id}`, {
            params: {itemId}})
            .then((response) => {
                //console.log(response.data.message);
                if(response.data.message === "Item is already being watched") {
                    setWatching(true);
                } else {
                    setWatching(false)
                }
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])


    return (
            <div className={`${styles.watchIcon} ${watching ? styles.watchActive : ''}`}>{<WatchIcon onClick={toggleWatch}/>}</div>
    );
  }
  
  export default WatchingBtn;