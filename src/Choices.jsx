import { useEffect, useState } from "react";

function Choices({ choices, chosenPokemon, dispatch }) {
  const [answer, setAnswer] = useState(null);

  function handleNextLevel() {
    dispatch({ type: "nextLevel" });
    setAnswer(null);
  }

  useEffect(() => {
    if (answer === null) return;
  }, [answer]);

  const formatName = choices
    .map((c) => c.name.split("-").slice(0, 1))
    .map(
      (name) =>
        `${name[0].slice(0, 1).toUpperCase()}${name[0].slice(1).toLowerCase()}`,
    );

  return (
    <div className="flex flex-col gap-4">
      {choices.map((choice, index) => (
        <button
          onClick={() => setAnswer(choice)}
          className={`btn-default text-2xl ${answer ? (chosenPokemon.name === choice.name ? "bg-primary text-secondary" : "") : ""}`}
          key={choice.name}
        >
          {formatName[index]}
        </button>
      ))}
      {answer && (
        <button className="btn-default ml-auto w-max" onClick={handleNextLevel}>
          Next Level
        </button>
      )}
    </div>
  );
}

export default Choices;
