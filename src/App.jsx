import { useEffect, useReducer } from "react";
import { ActiveScreen } from "./ActiveScreen";
import { StartScreen } from "./StartScreen";
import { Loader } from "./Loader";
import { MainContainer } from "./MainContainer";
import { ProgressBar } from "./ProgressBar";

const initialState = {
  //loading, ready, active, finished, reset
  status: "loading",
  level: 1,
  endLevel: 20,
  points: 0,
  highScore: 10,

  pokemon: null,
  choices: null,
  chosenPokemon: null,
};

export const NUMBER_OF_CHOICES = 4;

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, status: "loading" };
    case "error":
      return { ...state, status: "error" };
    case "dataReceived":
      return { ...state, status: "ready", pokemon: action.payload };
    case "active":
      return { ...state, status: "active" };
    case "newChoices":
      return {
        ...state,
        choices: action.payload[0],
        chosenPokemon: action.payload[1],
      };
    case "nextLevel":
      return { ...state, level: state.level + 1, choices: null };
    case "plusPoints":
      return { ...state, points: state.points + 10 };
    case "finished":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    default:
      return { ...state };
  }
}

export default function App() {
  const [
    { level, status, pokemon, choices, chosenPokemon, endLevel, points },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "dataReceived", payload: data.results });
      })
      .catch(() => console.log("Could not use API to fetch any pokemon"));
  }, []);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-zinc-900">
      <MainContainer>
        {status === "loading" && <Loader />}
        {status === "ready" && <StartScreen dispatch={dispatch} />}
        {status === "active" && (
          <>
            <ProgressBar level={level} endLevel={endLevel} points={points} />
            <ActiveScreen
              pokemon={pokemon}
              dispatch={dispatch}
              choices={choices}
              chosenPokemon={chosenPokemon}
              level={level}
            />
          </>
        )}
      </MainContainer>
    </div>
  );
}
