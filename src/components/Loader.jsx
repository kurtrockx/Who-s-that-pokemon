import { useEffect, useRef } from "react";

export function Loader({ pokemon }) {
  const pokeballShake = useRef(null);
  useEffect(() => {
    if (pokemon === null) return;
    pokeballShake.current.volume = 0.1;
    pokeballShake.current.play();
  }, [pokemon]);

  return (
    <div className="py-8">
      <p className="text-center text-xl text-white">Loading...</p>
      <div className="loader"></div>
      <audio
        src="/audio/pokeball_shake.mp3"
        ref={pokeballShake}
        loop={true}
      ></audio>
    </div>
  );
}
