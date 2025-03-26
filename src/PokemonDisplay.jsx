import { useState, useEffect } from "react";
import { Loader } from "./Loader";

export function PokemonDisplay({ chosenPokemon }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    if (chosenPokemon === null) return;
    fetch(chosenPokemon.url)
      .then((res) => res.json())
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err.message));
  }, [chosenPokemon]);

  return pokemonData === null ? (
    <Loader />
  ) : (
    <div className="mx-auto block duration-500 starting:scale-20">
      <img
        src={pokemonData.sprites.front_default}
        alt="pokemon_image"
        className="min-h-36 cursor-pointer duration-200 hover:scale-105 active:scale-90"
      />
    </div>
  );
}
