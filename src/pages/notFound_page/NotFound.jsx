import styles from './notFound.module.css'


function NotFound({setName, setLogo, id}) {



    return (
      
      <div className={styles.mainSection}>
        <h1>404</h1>
        <p>This page does not exist</p>
      </div>
    );
  }
  
  export default NotFound;