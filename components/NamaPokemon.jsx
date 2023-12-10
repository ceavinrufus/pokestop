import React, { useState } from "react";
import Image from "next/image";
import { capitalizeEachFirstLetter } from "../functions/stringManipulation";

function NamaPokemon({ pokemon }) {
  return (
    <>
      <div className="mx-10 md:mx-16 lg:mx-28 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Nama Pokemon */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl">
            {pokemon.name && capitalizeEachFirstLetter(pokemon.name, "-")}
          </h1>
          {/* Icon */}
          <div className="w-[40px] lg:w-[80px] md:w-[60px] flex">
            <Image
              src={
                pokemon.sprites.versions["generation-v"]["black-white"].animated
                  .front_default ||
                pokemon.sprites.versions["generation-v"]["black-white"]
                  .front_default
              }
              height={100}
              width={100}
              alt={pokemon.name}
              onError={() => setSrc("/assets/egg.png")}
            />
          </div>
        </div>
        {/* Tipe Pokemon */}
        <div className="md:flex">
          {pokemon.types &&
            pokemon.types.map((type) => (
              <div
                key={type.type.name}
                className="w-[100px] hover:animate-wiggle md:w-[120px] lg:w-[160px] cursor-pointer"
                // className="w-[10px] flex flex-col items-center hover:animate-wiggle md:w-[20px] lg:w-[40px] cursor-pointer"
                onClick={() => router.push("types/" + type.type.name)}
              >
                <Image
                  src={`/assets/icon_type/typeIconText_${type.type?.name}.png`}
                  height={40}
                  width={160}
                  alt={type.type.name}
                />
                {/* <div className="capitalize">{type.type.name}</div> */}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default NamaPokemon;
