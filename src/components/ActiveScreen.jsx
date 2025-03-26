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

    async function validateChosen() {
      try {
        let valid = false;
        let chosen = Math.trunc(Math.random() * NUMBER_OF_CHOICES);
        while (valid === false) {
          const res = await fetch(pokemon[chosen].url);
          if (!res.ok) throw new Error("could not fetch the chosen pokemon");
          const data = await res.json();

          if (data.sprites.front_default === null) {
            chosen = Math.trunc(Math.random() * NUMBER_OF_CHOICES);
          } else {
            valid = true;
          }
        }
        return chosen;
      } catch (err) {
        console.log(err.message);
      }
    }

    async function defineChoices() {
      const chosen = await validateChosen();

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
    }

    defineChoices();
  }, [pokemon, dispatch, level]);

  return (
    choices !== null && (
      <div className="flex max-h-dvh flex-col justify-between gap-2">
        <PokemonDisplay chosenPokemon={chosenPokemon} />
        <Choices
          choices={choices}
          chosenPokemon={chosenPokemon}
          dispatch={dispatch}
          level={level}
        />
      </div>
    )
  );
}
