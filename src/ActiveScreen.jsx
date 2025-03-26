import { useEffect } from "react";
import { NUMBER_OF_CHOICES } from "./App";
import { Loader } from "./Loader";
import { PokemonDisplay } from "./PokemonDisplay";
import Choices from "./Choices";

export function ActiveScreen({ pokemon, dispatch, choices, chosenPokemon }) {
  //Creating choices
  useEffect(() => {
    const chosen = Math.trunc(Math.random() * NUMBER_OF_CHOICES);
    const choices = [];

    for (let x = 0; x < NUMBER_OF_CHOICES; x++) {
      const randomNumber = Math.trunc(Math.random() * pokemon.length);

      x === chosen &&
        choices.push({ ...pokemon[randomNumber], correctAnswer: true });
      x !== chosen &&
        choices.push({ ...pokemon[randomNumber], correctAnswer: false });
    }
    dispatch({
      type: "newChoices",
      payload: [choices, ...choices.filter((c) => c.correctAnswer === true)],
    });
  }, [pokemon, dispatch]);

  return choices === null ? (
    <Loader />
  ) : (
    <div className="flex h-[var(--h-game-container)] max-h-dvh flex-col justify-between">
      <PokemonDisplay chosenPokemon={chosenPokemon} />
      <Choices choices={choices} />
    </div>
  );
}
