export function ProgressBar({ level, endLevel, points }) {
  return (
    <div>
      <div className="flex justify-between">
        <p className="font-bold text-white">
          score: <span className="text-primary">{points}</span>
        </p>
        <p className="font-bold text-white">
          level:{" "}
          <span className="text-primary">
            {level}/{endLevel}
          </span>
        </p>
      </div>
      <progress
        max={endLevel}
        value={level}
        className="progressBar custom-progress"
      ></progress>
    </div>
  );
}
