import { useEffect, useState } from "react";


const PokemonApi = () => {
  const [pokemonResults, setPokemonResults] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const pokemonFetch = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
        const dataPull = await response.json();
        const results = dataPull.results;
        console.log(results);
        setPokemonResults(results);
      } catch (error) {
        console.error(error);
      }
    };
    pokemonFetch();
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      <ol>
        {pokemonResults.map((pokemon) => (
          <li
            key={pokemon.name}
            onClick={() => {
              console.log(pokemon.name)
              setSelectedPokemon=selectedPo
              
            }}
          >
            {pokemon.name}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PokemonApi;
