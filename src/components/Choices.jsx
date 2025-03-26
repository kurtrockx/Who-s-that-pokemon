import { useEffect, useRef, useState } from "react";

function Choices({ choices, chosenPokemon, dispatch, level }) {
  const [answer, setAnswer] = useState(null);
  const existingAnswer = answer !== null;

  const correctAudio = useRef(null);
  const wrongAudio = useRef(null);

  function handleNextLevel() {
    if (answer === null) return;
    if (level === 20) dispatch({ type: "finished" });
    dispatch({ type: "nextLevel" });
    setAnswer(null);
  }

  useEffect(() => {
    if (answer !== null && answer !== chosenPokemon) {
      wrongAudio.current.play();
      return;
    }
    if (answer === null || answer !== chosenPokemon) return;
    correctAudio.current.play();
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
          className={`btn-default text-2xl ${existingAnswer && chosenPokemon.name === choice.name ? "bg-primary text-secondary opacity-100" : ""} ${existingAnswer && "cursor-not-allowed opacity-50"}`}
          key={choice.name}
          disabled={answer !== null}
        >
          {formatName[index]}
        </button>
      ))}

      <audio src="/audio/correct_answer.mp3" ref={correctAudio}></audio>
      <audio src="/audio/wrong_answer.mp3" ref={wrongAudio}></audio>
      <button
        className={`btn-default ml-auto w-max ${existingAnswer ? "block" : "cursor-default opacity-0"}`}
        onClick={handleNextLevel}
      >
        {level === 20 ? "Finish" : "Next Level"}
      </button>
    </div>
  );
}

export default Choices;
