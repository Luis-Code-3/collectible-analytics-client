import { Link } from "react-router-dom";
import styles from "./login.module.css"


function Login() {



    return (
        <section className={styles.mainSection}>
        <div className={styles.leftBox}>
            <form className={styles.signupForm}>

                <div>
                    <label>Username</label>
                    <input type='text' name="username" placeholder=''></input>
                </div>

                <div>
                    <label>Password</label>
                    <input type='password' name="password" placeholder=''></input>
                </div>

                <button type="submit">LOGIN</button>

            </form>
            <div className={styles.login}>
                <p>FORGOT YOUR PASSWORD?</p>
                <div></div>
                <Link to={"/signup"}>CREATE AN ACCOUNT</Link>
            </div>
        </div>

        <div className={styles.imageBox}>
            <img src="" alt=""/>
        </div>
  
      </section>
    );
  }
  
  export default Login;