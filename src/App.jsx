import { useEffect, useReducer } from "react";

const initialState = {
  //loading, ready, active, finished, reset
  status: "loading",
  level: 0,

  pokemon: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "ready":
      return { ...state, status: "ready" };
    case "active":
      return { ...state, pokemon: action.payload };
  }
}

export default function App() {
  const [{ level, status, pokemon }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then(() => {
        setTimeout(() => {
          dispatch({ type: "ready" });
        }, 1500);
      })
      .catch(() => console.log("Could not use API to fetch any pokemon"));
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-500">
      <MainContainer>
        {status === "loading" && <Loader />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <ActiveScreen pokemon={pokemon} level={level} dispatch={dispatch} />
        )}
      </MainContainer>
    </div>
  );
}

function MainContainer({ children }) {
  return (
    <div className="bg-blue-(--color-primary) max-w-2xl flex-1 p-4">
      {children}
    </div>
  );
}

function Loader() {
  return <div className="loader"></div>;
}

function StartScreen() {
  return (
    <div className="flex flex-col space-y-4">
      <img
        src="public/pokemon-logo.png"
        alt="pokemon logo"
        className="animate-up-down"
      />
      <button className="btn-default mx-auto">Click to Start</button>
    </div>
  );
}

function ActiveScreen({ pokemon, dispatch, level }) {
  useEffect(() => {
    const randomNumber = Math.trunc(Math.random() * 1000) + 1;

    async function fetchPokemon() {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${randomNumber}`,
        );
        if (!res.ok) throw new Error("Could not fetch Pokemon");
        const data = await res.json();
        console.log(data);
        dispatch({ type: "active" });
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchPokemon();
  }, [level, dispatch]);

  return <div className="bg-red-800 text-white">{pokemon.name}</div>;
}
