import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import styles from "./signup.module.css"
import axios from "axios";
import { baseUrl } from "../../services/baseUrl";
import { AuthContext } from "../../context/auth.context";


function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {setIsLoggedIn} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(username);
        // console.log(email);
        // console.log(password);
        axios.post(`${baseUrl}/users/signup`, {username,email,password})
            .then((response) => {
                localStorage.setItem('accessToken', response.data.accessToken)
                setIsLoggedIn(true);
                navigate('/');
                //console.log(response.data);
            })
            .catch((err) => {
                console.log(err.response.data.message);
            })
    }



    return (
      <section className={styles.mainSection}>
        <div className={styles.leftBox}>
            <form className={styles.signupForm} onSubmit = {handleSubmit}>

                <div>
                    <label>Username</label>
                    <input type='text' name="username" placeholder='' onChange={(e) => setUsername(e.target.value)}></input>
                </div>

                <div>
                    <label>Email</label>
                    <input type='email' name="email" placeholder='' onChange={(e) => setEmail(e.target.value)}></input>
                </div>

                <div>
                    <label>Password</label>
                    <input type='password' name="password" placeholder='' onChange={(e) => setPassword(e.target.value)}></input>
                </div>

                <button type="submit">CREATE ACCOUNT</button>

            </form>
            <div className={styles.login}>
                <p>ALREADY HAVE AN ACCOUNT?</p>
                <div></div>
                <Link to={"/login"}>LOGIN</Link>
            </div>
        </div>

        <div className={styles.imageBox}>
            <img src="" alt=""/>
        </div>
  
      </section>
    );
  }
  
  export default Signup;