import axios from "axios"
import Image from "next/image"
import styles from "../../styles/Home.module.scss";
import { HTMLTable } from "@blueprintjs/core"

export default function Pokemon({pokemon}){
  return (
    <div className={styles.container}>
      <h1>
        {pokemon.name}
      </h1>
      <div className={styles.sprites_container}>
        {pokemon.sprites.front_default && <Image src={pokemon.sprites.front_default} width={500} height={500}></Image>}
        {pokemon.sprites.front_shiny && <Image src={pokemon.sprites.front_shiny} width={500} height={500}></Image>}
      </div>
      <div>
        {pokemon.types.map((type, index) => <span className={styles.type} key={index}>{type.type.name}</span>)}
      </div>
      <HTMLTable bordered={true} striped={true}>
        <thead>
          <tr>
            <td>move</td>
            <td>lvl learned</td>
          </tr>
        </thead>
        <tbody>
          {pokemon.moves.filter(move => move.version_group_details[0].level_learned_at > 0).map((move, index) =>
            <tr key={index}>
              <td>
                {move.move.name}
              </td>
              <td>
                {move.version_group_details[0].level_learned_at}
              </td>
            </tr>
          )}
        </tbody>
      </HTMLTable>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { name } = context.query
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return {
    props: {
      pokemon: data
    }
  }
}