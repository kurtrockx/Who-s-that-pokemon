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
      <div className="group relative h-full origin-right overflow-hidden delay-500 duration-200 starting:scale-x-0">
        <img
          src={pokemonData.sprites.front_default}
          alt="pokemon_image"
          className="min-h-36 cursor-pointer duration-100 hover:scale-105 active:scale-90"
          onClick={handleCry}
        />
        <p className="pointer-events-none absolute bottom-4 left-0 origin-left ease-in-out -translate-x-100 rounded-2xl border-2 bg-black px-2 text-xs text-white delay-100 duration-200 group-hover:translate-0">
          click for cry
        </p>
      </div>
      <PokemonStats stats={pokemonData.stats} />
      <audio src={pokemonData.cries.latest} ref={pokemonCry}></audio>
    </div>
  );
}
