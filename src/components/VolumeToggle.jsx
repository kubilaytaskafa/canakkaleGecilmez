import { useEffect, useRef } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import music from "../audios/Hakan Aysev - Çanakkale Türküsü - (Official Audio).mp3";
import { useDispatch, useSelector } from "react-redux";
import { toggleMusic } from "../redux/slices/musicSlice";

const VolumeToggle = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.music.isPlaying);
  const audioRef = useRef(new Audio(music)); // Ses nesnesini burada oluştur

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      audio.pause();
      audio.currentTime = 0; // Bileşen kaldırıldığında sıfırla
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.play().catch((err) => console.log("Müzik başlatılamadı:", err));
    } else {
      audio.pause();
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
