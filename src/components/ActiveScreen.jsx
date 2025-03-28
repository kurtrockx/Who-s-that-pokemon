import { useEffect } from "react";
import { NUMBER_OF_CHOICES } from "./App";
import { Loader } from "./Loader";
import { PokemonDisplay } from "./PokemonDisplay";
import Choices from "./Choices";

export function ActiveScreen({
  pokemon,
  dispatch,
  choices,
  chosenPokemon,
  level,
}) {
  //Creating choices
  useEffect(() => {
    const choices = [];
    const chosen = Math.trunc(Math.random() * NUMBER_OF_CHOICES);

    function defineChoices() {
      for (let x = 0; x < NUMBER_OF_CHOICES; x++) {
        const randomNumber = Math.trunc(Math.random() * pokemon.length);

        if (
          pokemon[randomNumber].name.includes('miraidon') ||
          pokemon[randomNumber].name.includes('koraidon')
        ) {
          x--;
          continue;
        }

        x === chosen &&
          choices.push({ ...pokemon[randomNumber], correctAnswer: true });
        x !== chosen &&
          choices.push({ ...pokemon[randomNumber], correctAnswer: false });
      }
      dispatch({
        type: "newChoices",
        payload: [choices, ...choices.filter((c) => c.correctAnswer === true)],
      });
    }

    defineChoices();
  }, [pokemon, dispatch, level]);

  return choices === null ? (
    <Loader />
  ) : (
    <div className="flex max-h-dvh flex-col justify-between gap-2">
      <PokemonDisplay chosenPokemon={chosenPokemon} />
      <Choices
        choices={choices}
        chosenPokemon={chosenPokemon}
        dispatch={dispatch}
        level={level}
      />
    </div>
  );
}
