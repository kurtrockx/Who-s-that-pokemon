import { useReducer } from "react";

const initialState = {
  //loading, ready, active, finished, reset
  status: "loading",
  level: 0,
  message: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "hello":
      return { ...state, message: "hello" };
  }
}

export default function App() {
  const [{ message }, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-500">
      <MainContainer>
        <StartScreen />
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

function StartScreen() {
  return (
    <div className="flex flex-col space-y-4">
      <img src="public/pokemon-logo.png" alt="pokemon logo" />
      <button className="btn-default animate-start-btn mx-auto">
        Click to Start
      </button>
    </div>
  );
}
