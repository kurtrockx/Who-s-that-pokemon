export function StartScreen({ dispatch }) {
  return (
    <div className="flex flex-col space-y-4">
      <img
        src="/ultimate_whosthat.png"
        alt="Who's that"
        className="mx-auto w-48"
      />
      <img
        src="/pokemon-logo.png"
        alt="pokemon logo"
        className="animate-up-down"
      />
      <button
        className="btn-default mx-auto w-42 text-center"
        onClick={() => dispatch({ type: "active" })}
      >
        Click to Start
      </button>
    </div>
  );
}
