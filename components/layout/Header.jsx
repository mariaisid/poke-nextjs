import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={"/"}>Logo</Link>
      <span>Header</span>
    </header>
  );
}

export default Header;