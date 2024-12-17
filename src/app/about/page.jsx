import styles from "./about.module.css"
import Image from "next/image";
const AboutPage = () => {
    return (
        <div className={styles.container}>
        <div className={styles.aboutPage}>
            <div className={styles.content}>
                <h3 className={styles.h3}>
                    About Agency
                </h3>
                <div className={styles.contents}>We create digital ideas that are bigger,bolder,braver and better.</div>
                <p className={styles.p}>We create digital ideas that are bigger , bolder, braver and better. We believe in good ideas flexibility and precision.We're worlds. Our special team best consulting  and finance solution provider.Wide range of web and software development services</p>
                <div className={styles.counter}>
                    <div className={styles.counters}>
                        <div className={styles.con__counters}>10k+</div>
                        <span className={styles.span}>Year of experience</span>
                    </div>
                    <div className={styles.counters}>
                        <div className={styles.con__counters}>234k+</div>
                        <span className={styles.span}>Project reached</span>
                    </div>
                    <div className={styles.counters}>
                        <div className={styles.con__counters}>5k+</div>
                        <span className={styles.span}>Services and plugins</span>
                    </div>
                </div>
            </div>
            <div className={styles.aboutPage__img}>
                <Image src="/images/about.png" alt="about images" fill className={styles.aboutImg}/>
            </div>
        </div>
        </div>
    )
}
export default AboutPage;