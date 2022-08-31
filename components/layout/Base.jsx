import Header from "./Header";
import styles from "./Footer.module.scss";

const Base = ({children}) => (
  <>
    <Header />
    <main>{children}</main>
    <footer className={styles.footer}>footer</footer>
  </>
)

export default Base;