export function StartScreen({ dispatch }) {
  return (
    <div className="flex flex-col space-y-4">
      <img
        src="/pokemon-logo.png"
        alt="pokemon logo"
        className="animate-up-down" />
      <button
        className="btn-default mx-auto"
        onClick={() => dispatch({ type: "active" })}
      >
        Click to Start
      </button>
    </div>
  );
}
