function HighScore({ points, highScore }) {
  return (
    <p className="text-right font-bold text-white">
      Highscore:{" "}
      <span className="text-primary">
        {points < highScore ? highScore : points}
      </span>
    </p>
  );
}

export default HighScore;
