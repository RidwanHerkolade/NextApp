import styles from "./page.module.css"
import Image from "next/image";
const HomePage = () => {
  return (
      <div className={styles.pagee__divs}>
        <div className={styles.page__text}>
          <h1 className={styles.h1}>creative thought agency</h1>
          <p className={styles.h1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className={styles.btn}>
            <button className={styles.button}>learn more </button>
            <button className={styles.button}>contact </button>
          </div>
          <div className={styles.brands}>
            <Image src="/images/brands.png" alt="brands images" fill className={styles.brands__Img}/>
          </div>
        </div>
        <div className={styles.page__img}>
          <Image src="/images/hero.gif" alt="hero images" fill className={styles.heroImg}/>
        </div>
      </div>
  )
}
export default HomePage;