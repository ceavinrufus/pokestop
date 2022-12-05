import React, { useState } from "react";
import Image from "next/image";
import { types } from "../functions/color";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Card = ({ pokemon }) => {
  const [theme, setTheme] = useState("");
  const color = pokemon.types[0].type.name;
  return (
    <div className="shadow-2xl rounded-3xl gap-4">
      <div className="flex items-center rounded-3xl hover:bg-transparent hover:translate-y-1 hover:text-white border border-white transition text-[#323232] bg-white justify-between p-8 h-[250px] w-[300px]">
        <div className={`text-xl`}>
          {/* Nomor Pokemon */}
          <p>#{("000" + pokemon.id).slice(-3)}</p>
          {/* Nama Pokemon */}
          <h1 className="">
            {pokemon ? pokemon.name.split(" ").map(capitalize).join(" ") : ""}
          </h1>
          {/* Logo Tipe */}
          <div className="flex gap-1">
            {pokemon.types.map((type) => (
              <Image
                key={type.type.name}
                src={`https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Types/POKEMON_TYPE_${type.type.name.toUpperCase()}_BORDERED.png`}
                height={30}
                width={30}
                alt={type.type.name}
              />
            ))}
          </div>
        </div>
        <div className="">
          <div
            style={{
              background: `linear-gradient(45deg, ${types[color][1]}, ${types[color][0]})`,
            }}
            className="rounded-full h-[100px] w-[100px] pb-20"
          >
            <Image
              src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${(
                "000" + pokemon.id
              ).slice(-3)}.png`}
              // src={
              //   pokemon.sprites.versions["generation-v"]["black-white"].animated
              //     .front_default
              // }
              // src={
              //   pokemon.sprites.versions["generation-v"]["black-white"]
              //     .front_default
              // }
              height={100}
              width={100}
              alt={pokemon.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
