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
      <div className="flex items-center rounded-3xl hover:bg-transparent hover:translate-y-1 hover:text-white border border-white transition text-[#323232] bg-white justify-between p-2 md:p-4 lg:p-8 h-[120px] w-[140px] md:h-[160px] md:w-[200px] lg:h-[250px] lg:w-[300px]">
        <div className={`text-xs lg:text-xl md:text-sm`}>
          {/* Nomor Pokemon */}
          <p>#{("000" + pokemon.id).slice(-3)}</p>
          {/* Nama Pokemon */}
          <h1 className="">
            {pokemon ? pokemon.name.split(" ").map(capitalize).join(" ") : ""}
          </h1>
          {/* Logo Tipe */}
          <div className="flex md:gap-1">
            {pokemon.types.map((type) => (
              <div
                key={type.type.name}
                className="flex gap-1 w-[14px] md:w-[20px] lg:w-[30px]"
              >
                <Image
                  src={`https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Types/POKEMON_TYPE_${type.type.name.toUpperCase()}_BORDERED.png`}
                  width={30}
                  height={30}
                  alt={type.type.name}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <div
            style={{
              background: `linear-gradient(45deg, ${types[color][1]}, ${types[color][0]})`,
            }}
            className="rounded-full h-[30px] md:h-[80px] w-[50px] md:w-[80px] lg:h-[100px] lg:w-[100px] leading-3 pb-[50px]"
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
