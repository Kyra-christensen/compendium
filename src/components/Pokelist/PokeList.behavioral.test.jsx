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

  
}