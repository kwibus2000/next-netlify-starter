import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Pokemon({ pokemon }) {
  return (
    <div className='container'>
      <Head>
        <title>Pokemon!</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        We want a Pokemon!
        <img src={pokemon.sprites.front_default} />
      </main>

      <Footer />
    </div>
  )
}

export function getStaticPaths() {
  return { paths: ['/poke/pikachu', '/poke/charmander'], fallback: false }
}

export async function getStaticProps({ params }) {
  console.log(params)
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
  const pokemon = await res.json()

  return {
    props: {
      pokemon
    },
    revalidate: false
  }
}
