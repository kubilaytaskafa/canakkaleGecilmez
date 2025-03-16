import React from "react";
import kahramanMehmetcik from "../images/canakkaleAsker.webp";
import ataturkVeMehmetcik from "../images/ataturkVeMehmetcik.jpeg";
import elliyedinciAlay from "../images/57.alay.webp";
import cephe from "../images/canakkaleSavas.jpg";
const Gallery = () => {
  const images = [
    kahramanMehmetcik,
    ataturkVeMehmetcik,
    elliyedinciAlay,
    cephe,
  ];
  return (
    <div className="w-full flex items-center justify-center flex-wrap gap-4 p-4">
      {images.map((image, index) => {
        return (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 hover:scale-105 transition duration-300"
          >
            <img
              src={image}
              alt={`gallery-image-${index}`}
              className="w-full h-64 object-cover rounded-lg" // Resimleri aynı boyutta tutmak için sınıflar
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
