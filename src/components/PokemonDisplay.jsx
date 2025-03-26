import { useState, useEffect, useRef } from "react";
import { Loader } from "./Loader";
import PokemonStats from "./PokemonStats";

export function PokemonDisplay({ chosenPokemon }) {
  const [pokemonData, setPokemonData] = useState(null);

  const pokemonCry = useRef(null);

  function handleCry() {
    pokemonCry.current.volume = 0.4;
    pokemonCry.current.play();
  }

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
    <div className="mx-auto flex h-full items-center gap-2 duration-500 starting:scale-20">
      <div className="group relative h-full origin-right overflow-hidden delay-500 duration-200 starting:scale-x-0">
        <img
          src={
            pokemonData.sprites.other["official-artwork"].front_default ||
            pokemonData.sprites.front_default ||
            pokemonData.sprites.back_default
          }
          alt={
            pokemonData.sprites.front_default
              ? "pokemon_image"
              : pokemonData.name
          }
          className="h-36 cursor-pointer duration-100 hover:scale-105 active:scale-90"
          onClick={handleCry}
        />
        <p className="pointer-events-none absolute bottom-4 left-0 origin-left -translate-x-100 rounded-xl border-2 bg-black px-2 py-px text-xs text-white delay-100 duration-200 ease-in-out group-hover:translate-0">
          click for cry
        </p>
      </div>
      <PokemonStats stats={pokemonData.stats} />
      <audio
        src={
          pokemonData.cries.latest
            ? pokemonData.cries.latest
            : pokemonData.cries.legacy
        }
        ref={pokemonCry}
      ></audio>
    </div>
  );
}
