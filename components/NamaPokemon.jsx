import React from "react";
import Image from "next/image";
import { capitalizeEachFirstLetter } from "../functions/stringManipulation";

function NamaPokemon({ pokemon }) {
  return (
    <>
      <div className="mx-10 md:mx-16 lg:mx-24">
        <div className="flex items-center gap-2">
          {/* Nama Pokemon */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl">
            {pokemon.name && capitalizeEachFirstLetter(pokemon.name, "-")}
          </h1>
          {/* Icon */}
          <div className="w-[40px] lg:w-[80px] md:w-[60px] flex">
            <Image
              src={
                pokemon.id <= 999
                  ? `https://www.cpokemon.com/pokes/shuffle/${pokemon.id}.png`
                  : `/assets/pokeball.png`
              }
              height={80}
              width={80}
              alt={pokemon.name}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NamaPokemon;
