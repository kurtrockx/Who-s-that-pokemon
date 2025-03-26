import { useEffect, useRef, useState } from "react";

function ThemeSong() {
  const [play, setPlay] = useState(false);
  const themeSong = useRef(null);

  useEffect(() => {
    if (play === true) themeSong.current.play();
    if (play === false) themeSong.current.pause();
  }, [play]);

  function handlePlay() {
    setPlay((p) => !p);
  }

  return (
    <>
      <button className="absolute bottom-0 left-0 ml-auto flex -translate-x-[82%] cursor-pointer items-center gap-2 bg-white text-xs duration-100 focus:translate-0">
        <p className="h-full py-4 pl-2 font-bold" onClick={handlePlay}>
          {play === false ? "BE THE VERY BEST?" : "BE NOT THE BEST??"}
        </p>
        <div className="h-full bg-black px-2 py-4 text-2xl font-bold text-white">
          {">"}
        </div>
      </button>
      <audio src="/audio/Pokemon.mp3" ref={themeSong}></audio>
    </>
  );
}

export default ThemeSong;
