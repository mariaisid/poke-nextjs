import Link from "next/link"
import axios from "axios"
import Image from "next/image"
import { Card, Divider } from "@blueprintjs/core"
import Pagination from "../../components/Pagination/index.jsx"

const limit = 20;

export default function Pokemons({pokemons, count}){
  return (
    <>
      {pokemons?.map(pokemon => (
        <Link href={`/pokemon/${pokemon?.name}`} key={pokemon?.name}>
          <Card>
            {pokemon?.sprites.front_default && <Image src={pokemon?.sprites.front_default} width={50} height={50}></Image>}
            <Divider />
            {pokemon?.name}
            <br/>
          </Card>
        </Link>
      )
      )}
      <Pagination limit={limit} total={count} />
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps(context) {
  const { page } = context.params
  const { data: { results, count } } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${limit * ((page || 1) - 1)}`)
  const promises = results.map(pokemon => (
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon?.name}`)
  ))
  let pokemons = []
  await Promise.all(promises).then(responses => {responses.map((response) => pokemons.push(response.data))})
  return {
    props: {
      pokemons,
      count
    }
  }
}