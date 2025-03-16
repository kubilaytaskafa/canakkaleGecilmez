import React, { useState, useEffect } from "react";
import { IoArrowUpCircle } from "react-icons/io5"; // react-icons'dan yukarı ok ikonu

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll eventi ile butonun görünürlüğünü kontrol et
  const handleScroll = () => {
    if (window.scrollY > 150) {
      // Scroll miktarı 300px'yi geçtiğinde butonu göster
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Sayfa yüklendiğinde scroll event'ini dinlemeye başla
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup: component unmount olduğunda event'i temizle
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Sayfanın en üstüne scroll yap
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-4 rounded-full bg-[#B91C1C] text-white text-2xl shadow-md transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transition: "opacity 0.3s ease-in-out" }}
    >
      <IoArrowUpCircle /> {/* react-icons ile yukarı ok ikonu */}
    </button>
  );
};

export default ScrollToTopButton;
