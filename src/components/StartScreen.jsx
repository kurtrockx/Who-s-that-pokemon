import { useRef } from "react";
import pokemonLogo from "../assets/pokemon-logo.png";
import whosthat from "../assets/ultimate_whosthat.png";

export function StartScreen({ dispatch }) {
  const startAudio = useRef(null);

  function handleStartAudio() {
    startAudio.current.play();
    setTimeout(() => dispatch({ type: "active" }), 600);
  }

  return (
    <div className="flex flex-col space-y-4">
      <img src={whosthat} alt="Who's that" className="mx-auto w-48" />
      <img src={pokemonLogo} alt="pokemon logo" className="animate-up-down" />
      <button
        className="btn-default mx-auto w-42 text-center"
        onClick={() => {
          handleStartAudio();
        }}
      >
        Click to Start
      </button>
      <audio src="/audio/start.mp3" ref={startAudio}></audio>
    </div>
  );
}
