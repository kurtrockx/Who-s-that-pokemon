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
    <div className="flex min-h-screen items-center justify-center bg-slate-400">
      <MainContainer>
        <StartScreen />
      </MainContainer>
    </div>
  );
}

function MainContainer({ children }) {
  return <div className="max-w-2xl flex-1 bg-slate-800">{children}</div>;
}

function StartScreen() {
  return <div>
    <img src="public/pokemon-logo.png" alt="" />
  </div>;
}
