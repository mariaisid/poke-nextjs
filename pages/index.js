import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <h1 className={styles.container}>
      <Link href="/pokemons/1">Pokedex</Link>
    </h1>
  );
}
