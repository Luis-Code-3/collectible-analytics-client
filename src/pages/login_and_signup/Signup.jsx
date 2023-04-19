import { Link, useNavigate } from "react-router-dom";
import styles from "./signup.module.css"


function Signup() {



    return (
      <section className={styles.mainSection}>
        <div className={styles.leftBox}>
            <form className={styles.signupForm}>

                <div>
                    <label>Username</label>
                    <input type='text' name="username" placeholder=''></input>
                </div>

                <div>
                    <label>Email</label>
                    <input type='email' name="email" placeholder=''></input>
                </div>

                <div>
                    <label>Password</label>
                    <input type='password' name="password" placeholder=''></input>
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