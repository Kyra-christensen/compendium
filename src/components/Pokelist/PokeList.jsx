import { useEffect, useState } from 'react';

export default function PokeList() {
  const [pokemon, setPokemon] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (search) {
      const filteredPokemon = pokemon.filter(pokemon => pokemon.name.includes(search));

      setSearchedPokemon(filteredPokemon);
    }
  }
  useEffect(() => {
    async function getPokemon() {
      const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=801');
      const data = await res.json();
      const pokemonData = data.results;
      const pokemon = pokemonData.map((poke) => ({
        img: poke.url_image,
          name: poke.pokemon,
          type: poke.type_1
      }));
        
      setPokemon(pokemon);
      
      setLoading(false);
    }
    getPokemon();
}, []);

return loading
    
  ? (
    <>
      <div>Loading</div>
    </>
  )
  : (
      <>
        <form onSubmit={handleSubmit}>
            <label>Name
                <input type='text' placeholder='search by name' value={search} onChange={e => setSearch(e.target.value)}></input>  
                <button>Search</button>
            </label>
        </form>
        {search
            ? (searchedPokemon.map((pokemon, i) => {
                return (
                <div >
                    <div >
                        <h2>{pokemon.name}</h2>
                        <p>{pokemon.type}</p>
                        <img src={pokemon.img} alt='pic of pokemon' />
                    </div>
                </div>
                )
            }))
           : (pokemon.map((pokemon, i) => {
               return (
            <div>
                <div>
                    <h2>{pokemon.name}</h2>
                    <p>{pokemon.type}</p>
                <img src={pokemon.img} alt='pic of pokemon' />
                </div>
            </div>
            )
          }))
        }
      </>
  )
}