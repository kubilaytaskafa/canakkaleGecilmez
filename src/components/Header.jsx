import React from "react";
import { TiThMenu } from "react-icons/ti";
import VolumeToggle from "./VolumeToggle";
const Header = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-primary h-20 fixed top-0 left-0 w-full shadow-md z-50 ">
      <div className="flex items-center justify-center gap-2">
        <img src="./src/images/turkBayragi.jpg" alt="" className="w-24 pl-4" />
        <h1 className="text-white text-xl">Çanakkale Geçilmez!</h1>
      </div>
      <ul className="hidden lg:flex items-center justify-center hover:text-red-400 transition duration-300">
        <li>
          <a
            href="/"
            className="text-white pr-4 text-xl hover:text-red-400 transition duration-300"
          >
            Anasayfa
          </a>
          <a
            href="#history"
            className="text-white pr-4 text-xl hover:text-red-400 transition duration-300"
          >
            Tarihçe
          </a>
          <a
            href="#heroes"
            className="text-white pr-4 text-xl hover:text-red-400 transition duration-300"
          >
            Kahramanlarımız
          </a>
          <a
            href="#gallery"
            className="text-white pr-4 text-xl hover:text-red-400 transition duration-300"
          >
            Galeri
          </a>
          <a
            href="#canakkalegecilmez"
            className="text-white pr-4 text-xl hover:text-red-400 transition duration-300"
          >
            Çanakkale Geçilmez!
          </a>
        </li>
        <li>
          <VolumeToggle />
        </li>
      </ul>
      <div className="flex lg:hidden items-center justify-center ">
        <TiThMenu className="text-2xl text-white" />
      </div>
    </nav>
  );
};

export default Header;
