import React from "react";
import Image from "next/image";
import {
  capitalize,
  capitalizeEachFirstLetter,
  meterToFeet,
} from "../functions/stringManipulation";

function NamaPokemon({ pokemon }) {
  return (
    <>
      <div className="flex items-center gap-4">
        {/* Nama Pokemon */}
        <h1 className="text-7xl">
          {pokemon.name && capitalizeEachFirstLetter(pokemon.name, "-")}
        </h1>
        {/* Icon */}
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
    </>
  );
}

export default NamaPokemon;
