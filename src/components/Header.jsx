import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import VolumeToggle from "./VolumeToggle";
import DropdownMenu from "./DropdownMenu";
import bayrak from "../images/turkBayragi.jpg";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-primary h-20 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="flex items-center gap-2">
        <img src={bayrak} alt="Türk Bayrağı" className="w-24 pl-4" />
        <h1 className="text-white text-xl">Çanakkale Geçilmez!</h1>
      </div>

      <ul className="hidden lg:flex items-center space-x-4">
        <li>
          <a
            href="#home"
            className="text-white text-xl hover:text-red-400 transition duration-300"
          >
            Anasayfa
          </a>
        </li>
        <li>
          <a
            href="#history"
            className="text-white text-xl hover:text-red-400 transition duration-300"
          >
            Tarihçe
          </a>
        </li>
        <li>
          <a
            href="#heroes"
            className="text-white text-xl hover:text-red-400 transition duration-300"
          >
            Kahramanlarımız
          </a>
        </li>
        <li>
          <a
            href="#gallery"
            className="text-white text-xl hover:text-red-400 transition duration-300"
          >
            Galeri
          </a>
        </li>
        <li>
          <a
            href="#canakkalegecilmez"
            className="text-white text-xl hover:text-red-400 transition duration-300"
          >
            Çanakkale Geçilmez!
          </a>
        </li>
        <li>
          <VolumeToggle />
        </li>
      </ul>

      <div className="flex lg:hidden items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white focus:outline-none"
        >
          <TiThMenu />
        </button>
      </div>

      <DropdownMenu isOpen={isOpen} />
    </nav>
  );
};

export default Header;
