function HighScore({ points, highScore }) {
  return (
    <p className="text-right font-bold text-white max-sm:text-sm">
      Highscore:{" "}
      <span className="text-primary">
        {points < highScore ? highScore : points}
      </span>
    </p>
  );
}

export default HighScore;
