function Pokemon({pokemon}) {
  return (
  <> 
    Hello, {pokemon?.name}!
    <img src={pokemon?.sprites.front_default} />
  </>
  ) 
}

export async function getStaticProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/charmander');
  const pokemon = await res.json();

  return {
    props: {
      pokemon
    }
  }
}

export default Pokemon;