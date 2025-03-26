import { useState, useEffect, useRef } from "react";
import { Loader } from "./Loader";
import PokemonStats from "./PokemonStats";

export function PokemonDisplay({ chosenPokemon }) {
  const [pokemonData, setPokemonData] = useState(null);

  const pokemonCry = useRef(null);

  function handleCry() {
    pokemonCry.current.play();
  }

  useEffect(() => {
    if (chosenPokemon === null) return;
    fetch(chosenPokemon.url)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
        console.log(data);
      })
      .catch((err) => console.log(err.message));
  }, [chosenPokemon]);

  return pokemonData === null ? (
    <Loader />
  ) : (
    <div className="mx-auto flex h-full items-center gap-2 duration-500 starting:scale-20">
      <img
        src={pokemonData.sprites.front_default}
        alt="pokemon_image"
        className="min-h-36 cursor-pointer duration-200 hover:scale-105 active:scale-90"
        onClick={handleCry}
      />
      <PokemonStats stats={pokemonData.stats} />
      <audio src={pokemonData.cries.latest} ref={pokemonCry}></audio>
    </div>
  );
}
