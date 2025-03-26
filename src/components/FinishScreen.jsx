import { useEffect, useRef } from "react";

function FinishScreen({ dispatch, points, highScore }) {
  const finishAudio = useRef(null);

  useEffect(() => {
    finishAudio.current.play();
  }, []);

  return (
    <div className="mx-auto max-w-lg">
      <img src="/finish.png" alt="finish" className="animate-up-down" />
      <p className="text-center font-bold text-white">
        Score: <span className="text-primary"> {points}</span>
      </p>
      <p className="text-center font-bold text-white">
        Highscore: <span className="text-primary"> {highScore}</span>
      </p>
      <button
        className="btn-default mt-4 ml-auto"
        onClick={() => dispatch({ type: "reset" })}
      >
        Retry?
      </button>
      <audio src="/audio/finish.mp3" ref={finishAudio}></audio>
    </div>
  );
}

export default FinishScreen;
