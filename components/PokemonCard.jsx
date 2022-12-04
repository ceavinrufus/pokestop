import React, { useState } from "react";
import Image from "next/image";

const types = {
  normal: ["#EAEADE", "#ACA974", "#ACA974"],
  fire: ["#F8B80E", "#9b5510", "#F67F0B"],
  water: ["#6390F0", "#08517A", "#6898F7"],
  electric: ["#FFFA24", "#969101", "#FFFA24"],
  grass: ["#7AC74C", "#204000", "#7AC74C"],
  ice: ["#96D9D6", "#1995A1", "#96D9D6"],
  fighting: ["#C22E28", "#800B11", "#C22E28"],
  poison: ["#A33EA1", "#611380", "#A33EA1"],
  ground: ["#EDE293", "#BFAC21", "#BFAC21"],
  flying: ["#A98FF3", "#085764", "#A98FF3"],
  psychic: ["#F95587", "#8A0532", "#F95587"],
  bug: ["#D9FE9E", "#A6B91A", "#D9FE9E"],
  rock: ["#B6A136", "#470426", "#B6A136"],
  ghost: ["#735797", "#472B53", "#735797"],
  dragon: ["#6F35FC", "#29036A", "#6F35FC"],
  dark: ["#705746", "#2D221C", "#705746"],
  steel: ["#B7B7CE", "#454545", "#B7B7CE"],
  fairy: ["#FDD1E0", "#D685AD", "#FDD1E0"],
};

function hexToGrayscale(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? 0.2126 * parseInt(result[1], 16) +
        0.7152 * parseInt(result[2], 16) +
        0.0722 * parseInt(result[3], 16) >=
      128
      ? "text-black"
      : "text-white"
    : null;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Card = ({ pokemon }) => {
  const [theme, setTheme] = useState("");
  const color = pokemon.types[0].type.name;
  return (
    <div className="shadow-2xl rounded-3xl gap-4">
      <div className="flex items-center rounded-3xl hover:bg-[#323232] hover:text-white border border-white transition text-[#323232] bg-white justify-between p-8 h-[250px] w-[300px]">
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
