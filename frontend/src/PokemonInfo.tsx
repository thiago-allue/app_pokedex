import React from 'react';

interface PokemonInfoProps {
  pokemon: {
    pokemon_picture: string;
    pokemon_name: string;
    pokemon_description: string;
  };
}

const PokemonInfo: React.FC<PokemonInfoProps> = ({ pokemon }) => {
  return (
    <div className="pokemon-info">
      <img src={pokemon.pokemon_picture} alt="Pokemon" className="pokemon-picture" />
      <h2 className="pokemon-name">{pokemon.pokemon_name}</h2>
      <div className="pokemon-description">{pokemon.pokemon_description}</div>
    </div>
  );
};

export default PokemonInfo;
