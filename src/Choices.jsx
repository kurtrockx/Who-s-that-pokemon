import { useEffect, useState } from "react";

function Choices({ choices, chosenPokemon, dispatch }) {
  const [answer, setAnswer] = useState(null);
  const existingAnswer = answer !== null;

  function handleNextLevel() {
    if (answer === null) return;
    dispatch({ type: "nextLevel" });
    setAnswer(null);
  }

  useEffect(() => {
    if (answer === null || answer !== chosenPokemon) return;
    dispatch({ type: "plusPoints" });
  }, [answer, chosenPokemon, dispatch]);

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
          className={`btn-default text-2xl ${existingAnswer && chosenPokemon.name === choice.name ? "bg-primary text-secondary" : ""} ${existingAnswer && "cursor-not-allowed"}`}
          key={choice.name}
          disabled={answer !== null}
        >
          {formatName[index]}
        </button>
      ))}

      <button
        className={`btn-default ml-auto w-max ${existingAnswer ? "block" : "cursor-default opacity-0"}`}
        onClick={handleNextLevel}
      >
        Next Level
      </button>
    </div>
  );
}

export default Choices;
