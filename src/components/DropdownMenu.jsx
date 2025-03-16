import { motion } from "framer-motion";
import VolumeToggle from "./VolumeToggle";
const DropdownMenu = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0 }}
      transition={{ type: "tween", duration: 0.3 }}
      className=" lg:hidden fixed top-0 left-0 h-full w-64 bg-primary text-white flex flex-col p-5 shadow-lg z-50"
    >
      <a
        href="#home"
        className="py-2 text-xl hover:text-red-400 transition duration-300"
      >
        Anasayfa
      </a>
      <a
        href="#history"
        className="py-2 text-xl hover:text-red-400 transition duration-300"
      >
        Tarihçe
      </a>
      <a
        href="#heroes"
        className="py-2 text-xl hover:text-red-400 transition duration-300"
      >
        Kahramanlarımız
      </a>
      <a
        href="#gallery"
        className="py-2 text-xl hover:text-red-400 transition duration-300"
      >
        Galeri
      </a>
      <a
        href="#canakkalegecilmez"
        className="py-2 text-xl hover:text-red-400 transition duration-300"
      >
        Çanakkale Geçilmez!
      </a>
      <VolumeToggle />
    </motion.div>
  );
};

export default DropdownMenu;
