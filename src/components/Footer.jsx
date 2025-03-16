import React from "react";
import bayrak from "../images/turkBayragi.jpg";
const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white py-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 space-y-4 lg:space-y-0">
        {/* Bayrak Görseli */}
        <img src={bayrak} alt="Türk Bayrağı" className="w-24" />

        {/* Hızlı Bağlantılar */}
        <div className="text-center lg:text-left">
          <h1 className="text-lg font-semibold mb-2">Hızlı Bağlantılar</h1>
          <ul className="flex flex-col lg:flex-row items-center lg:gap-4 gap-2">
            <li>
              <a
                href="#home"
                className="text-white text-lg hover:text-red-400 transition duration-300"
              >
                Anasayfa
              </a>
            </li>
            <li>
              <a
                href="#history"
                className="text-white text-lg hover:text-red-400 transition duration-300"
              >
                Tarihçe
              </a>
            </li>
            <li>
              <a
                href="#heroes"
                className="text-white text-lg hover:text-red-400 transition duration-300"
              >
                Kahramanlarımız
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="text-white text-lg hover:text-red-400 transition duration-300"
              >
                Galeri
              </a>
            </li>
            <li>
              <a
                href="#canakkalegecilmez"
                className="text-white text-lg hover:text-red-400 transition duration-300"
              >
                Çanakkale Geçilmez!
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Created By Bölümü (En Altta ve Ortalanmış) */}
      <div className="border-t border-white mt-6 pt-4 text-center">
        <p className="text-sm">
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/kubilaytaskafa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition duration-300"
          >
            Kubilay Taşkafa
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
