import styles from "./navbar.module.css"
import LinksPage from "./links/links"
const Navbar = () => {
    return (
        <div className={styles.nav__container}>
            <nav className={styles.nav}>
                <div className={styles.nav__logo}>Limma</div>
                <div><LinksPage/></div>
            </nav>
        </div>
    )
}
export default Navbar