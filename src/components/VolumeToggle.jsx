import { useEffect } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMusic } from "../redux/slices/musicSlice";
import music from "../audios/Hakan Aysev - Çanakkale Türküsü - (Official Audio).mp3";

// Tek bir ses nesnesi oluştur ve koru
const globalAudio = new Audio(music);

const VolumeToggle = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.music.isPlaying);

  useEffect(() => {
    if (isPlaying) {
      globalAudio
        .play()
        .catch((err) => console.log("Müzik başlatılamadı:", err));
    } else {
      globalAudio.pause();
    }
  }, [isPlaying]);

  return (
    <button
      onClick={() => dispatch(toggleMusic())}
      className="text-4xl text-gray-800"
    >
      {isPlaying ? (
        <FaVolumeUp className="text-white text-xl hover:text-red-400 transition duration-300" />
      ) : (
        <FaVolumeMute className="text-white text-xl hover:text-red-400 transition duration-300" />
      )}
    </button>
  );
};

export default VolumeToggle;
