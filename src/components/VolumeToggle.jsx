import { useEffect, useRef } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import music from "../audios/Hakan Aysev - Çanakkale Türküsü - (Official Audio).mp3";
import { useDispatch, useSelector } from "react-redux";
import { toggleMusic } from "../redux/slices/musicSlice";

const VolumeToggle = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.music.isPlaying); // Değişken düzeltildi
  const audioRef = useRef(null);

  // Component mount olduğunda ses nesnesini oluştur
  useEffect(() => {
    audioRef.current = new Audio(music);
    return () => {
      audioRef.current.pause(); // Component kaldırıldığında müziği durdur
    };
  }, []);

  // isPlaying değiştiğinde müziği kontrol et
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((err) => console.log("Müzik başlatılamadı:", err));
      } else {
        audioRef.current.pause();
      }
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
