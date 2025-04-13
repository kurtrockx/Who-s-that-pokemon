import { useEffect, useRef, useState } from "react";
import finishLogo from '../assets/finish.png'

function FinishScreen({ dispatch, points, highScore, newHighscore }) {
  const [highScoreName, setHighScoreName] = useState("");
  const finishAudio = useRef(null);

  useEffect(() => {
    finishAudio.current.play();
  }, []);

  function handleHighScoreName(e) {
    const capitalizedName = e.target.value.toUpperCase();
    const validName = capitalizedName.slice(0, 4);
    setHighScoreName(validName);
  }

  return (
    <div className="mx-auto max-w-lg">
      <img src={finishLogo} alt="finish" className="animate-up-down" />
      <p className="text-center font-bold text-white">
        Score: <span className="text-primary"> {points}</span>
      </p>
      <p className="text-center font-bold text-white">
        {newHighscore ? "New Highscore: " : "Highscore: "}
        <span className="text-primary">
          {newHighscore ? (
            <input
              className="w-10 border-b py-px text-center font-bold text-white outline-0"
              type="text"
              placeholder="XXXX"
              maxLength={4}
              value={highScoreName}
              onChange={handleHighScoreName}
            />
          ):(
            highScore.points + `(${highScore.initials})`
          ) }
        </span>
      </p>
      <button
        className="btn-default mt-4 ml-auto"
        onClick={() =>
          dispatch({
            type: "reset",
            payload: highScoreName ? highScoreName : highScore.initials,
          })
        }
      >
        Retry?
      </button>
      <audio src="/audio/finish.mp3" ref={finishAudio}></audio>
    </div>
  );
}

export default FinishScreen;
