function FinishScreen({ dispatch, points, highScore }) {
  return (
    <div className="mx-auto max-w-lg">
      <img src="/finish.png" alt="finish" className="animate-up-down" />
      <p className="text-center text-white">Score: {points}</p>
      <p className="text-center text-white">Highscore: {highScore}</p>
      <button
        className="btn-default mt-4 ml-auto"
        onClick={() => dispatch({ type: "reset" })}
      >
        Retry?
      </button>
    </div>
  );
}

export default FinishScreen;
