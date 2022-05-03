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
        console.log(pokemon);
        setLoading(false);
    }
    getPokemon();
}, []);


}