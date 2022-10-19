import React from "react";
import Image from "next/image";

const types = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
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
  const color = pokemon.types[0].type.name;
  return (
    <div
      style={{ backgroundColor: types[color] }}
      className="h-[250px] w-[300px] flex items-center rounded-3xl justify-around"
    >
      <div className={`text-xl ${hexToGrayscale(types[color])}`}>
        <p>#{("000" + pokemon.id).slice(-3)}</p>
        <h1 className="">
          {pokemon ? pokemon.name.split(" ").map(capitalize).join(" ") : ""}
        </h1>
        <div className="">
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
      <div className="bg-[#fff] rounded-full h-[100px] w-[100px] pb-20">
        <Image
          src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${(
            "000" + pokemon.id
          ).slice(-3)}.png`}
          height={100}
          width={100}
          alt={pokemon.name}
        />
      </div>
    </div>
  );
};

export default Card;
