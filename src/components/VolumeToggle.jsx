import { useState, useRef } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import music from "../audios/Hakan Aysev - Çanakkale Türküsü - (Official Audio).mp3";
const VolumeToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(music));

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button onClick={toggleMusic} className="text-4xl text-gray-800">
      {isPlaying ? (
        <FaVolumeUp className="text-white text-xl hover:text-red-400 transition duration-300" />
      ) : (
        <FaVolumeMute className="text-white text-xl hover:text-red-400 transition duration-300" />
      )}
    </button>
  );
};

export default VolumeToggle;
