import React from "react";
import { useSelector } from "react-redux";

const Heroes = () => {
  const heroes = useSelector((state) => state.heroes.heroes);

  return (
    <div className="w-full flex items-center justify-center flex-wrap gap-6 mt-8">
      {heroes &&
        heroes.map((hero) => (
          <div
            key={hero.id}
            className="w-96 lg:h-[550px]  bg-white rounded-lg shadow-xl flex items-center justify-start flex-col gap-4 p-4 hover:shadow-2xl transition duration-300"
          >
            <img src={hero.image} alt="" className="w-full" />

            <h1 className="font-bold">{hero.name}</h1>
            <p className="font-semibold text-center">{hero.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Heroes;
