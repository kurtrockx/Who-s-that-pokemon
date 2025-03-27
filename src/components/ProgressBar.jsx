export function ProgressBar({ level, endLevel, points }) {
  return (
    <div>
      <div className="flex justify-between">
        <p className="font-bold text-white max-sm:text-sm">
          Level:{" "}
          <span className="text-primary">
            {level}/{endLevel}
          </span>
        </p>
        <p className="font-bold text-white max-sm:text-sm">
          Score: <span className="text-primary">{points}</span>
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
