import React, { useState, useEffect } from "react";

import cephe from "../images/canakkaleSavas.jpg";
import cepheiki from "../images/cepheiki.webp";
import ataturkCephe from "../images/ataturkCephe.webp";

const Hero = () => {
  const [changeBackground, setChangeBackground] = useState(0);

  const images = [ataturkCephe, cephe, cepheiki];

  useEffect(() => {
    const interval = setInterval(() => {
      setChangeBackground(
        (prevBackground) => (prevBackground + 1) % images.length
      );
    }, 5000);

    // Temizlik fonksiyonu (component unmount olduğunda interval'ı temizler)
    return () => clearInterval(interval);
  }, []); // Boş bağımlılık dizisi, bu efekt sadece component mount olduğunda çalışır

  return (
    <article
      id="home"
      className="w-full lg:h-[1000px] h-[450px] flex items-center justify-center p-12 bg-cover bg-center relative  "
      style={{
        backgroundImage: `url(${images[changeBackground]})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Opacity için Overlay (Kaplama) */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="flex items-center justify-center gap-4 flex-col">
        {/* İçerik */}
        <h1 className="lg:text-4xl text-2xl text-center font-bold mb-4 text-white relative z-10">
          Türk milletinin kahramanlık destanı
        </h1>
        <h1 className="lg:text-2xl text-sm text-center font-bold mb-4 text-white relative z-10">
          "Bu memleketin toprakları üstünde kanlarını döken kahramanlar! Burada
          bir dost vatanın toprağındasınız. Huzur ve sükûn içinde uyuyunuz."
        </h1>
        <h1 className="lg:text-2xl text-sm font-bold mb-4 text-white relative z-10 text-right">
          Mustafa Kemal Atatürk
        </h1>
      </div>
    </article>
  );
};

export default Hero;
