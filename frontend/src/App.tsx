import React, { useState } from 'react';
import './App.css';
import PokemonInfo from './PokemonInfo';
import Pagination from './Pagination';

function App() {
  const [pokemon, setPokemon] = useState<any | null>(null);
  const [pokemonId, setPokemonId] = useState<string>('');

  const fetchPokemonById = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:8000/pokemon?id=${id}`);
      if (response.ok) {
        const data = await response.json();
        setPokemon(data);
      } else {
        throw new Error('Pokemon not found.');
      }
    } catch (error) {
      console.error(error);
      setPokemon(null);
    }
  };

  const fetchPokemon = async () => {
    if (pokemonId) {
      await fetchPokemonById(pokemonId);
    }
  };

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Remove non-numeric characters
    const value = event.target.value.replace(/\D/g, '');
    setPokemonId(value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetchPokemon();
    }
  };

  const handlePrevious = async () => {
    if (pokemon && pokemon.pokemon_id > 1) {
      const previousPokemonId = pokemon.pokemon_id - 1;
      setPokemonId(previousPokemonId.toString());
      await fetchPokemonById(previousPokemonId.toString());
    }
  };

  const handleNext = async () => {
    if (pokemon && pokemon.pokemon_id < 898) {
      const nextPokemonId = pokemon.pokemon_id + 1;
      setPokemonId(nextPokemonId.toString());
      await fetchPokemonById(nextPokemonId.toString());
    }
  };

  return (
    <div className="App">
      <h1 className="pokedex-header">Pokedex</h1>
      <div className="pokedex-container">
        <div className="pokemon-input">
          <input
            type="text"
            value={pokemonId}
            onChange={handleIdChange}
            onKeyPress={handleKeyPress}
            className="pokemon-id-input"
          />
          <button onClick={fetchPokemon} className="search-button"></button>
        </div>
        {pokemon ? (
          <PokemonInfo pokemon={pokemon} />
        ) : (
          <>
            <p className="no-pokemon-text">Choose a Pokemon ID</p>
            <p className="no-pokemon-text">between 1 and 898.</p>
          </>
        )}
        <Pagination onPrevious={handlePrevious} onNext={handleNext} />
      </div>
    </div>
  );
}

export default App;
