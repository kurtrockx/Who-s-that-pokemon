import { useState } from "react";

function Choices({ choices }) {
  const [answer, setAnswer] = useState(null);

  const formatName = choices
    .map((c) => c.name.split("-").slice(0, 1))
    .map(
      (name) =>
        `${name[0].slice(0, 1).toUpperCase()}${name[0].slice(1).toLowerCase()}`,
    );

  return (
    <div className="flex flex-col gap-4">
      {formatName.map((name) => (
        <button className="btn-default text-2xl" key={name}>
          {name}
        </button>
      ))}
    </div>
  );
}

export default Choices;
