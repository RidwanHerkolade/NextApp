import styles from "./contact.module.css"
import Image from "next/image";
const ContactPage = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.contact__img}>
                <Image src="/images/contact.png" alt="" fill className={styles.contact__imgs}/>
            </div>
            <div className={styles.form__div}>
                <form action="" className={styles.form}>
                    <div className="form__input">
                        <input type="text" placeholder="Name and Surname" className={styles.input}/>
                    </div>
                    <div className="form__input">
                        <input type="text" placeholder="email address" className={styles.input}/>
                    </div>
                    <div className="form__input">
                        <input type="text" placeholder="phone number(optional)" className={styles.input}/>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ContactPage;