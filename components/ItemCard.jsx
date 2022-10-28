import React from "react";
import Image from "next/image";

const types = {
  normal: ["#EAEADE", "#ACA974", "#ACA974"],
  fire: ["#F8B80E", "#FC0C0B", "#F67F0B"],
  water: ["#6390F0", "#08517A", "#6390F0"],
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

const Card = ({ item }) => {
  return (
    <div className="flex items-center rounded-3xl gap-4 my-2">
      <div className="">
        <div className="bg-[#fff] w-[50px] h-[50px] rounded-full pb-0">
          {item.id < 12 ? (
            <Image
              src={item.sprites.default}
              height={50}
              width={50}
              alt={item.name}
            />
          ) : (
            <Image
              src={item.sprites.default}
              height={50}
              width={50}
              alt={item.name}
            />
          )}
        </div>
      </div>
      <div className={`text-lg text-white`}>
        {/* Nomor Pokemon */}
        <p>#{("000" + item.id).slice(-3)}</p>
        {/* Nama Pokemon */}
        <h1 className="">
          {item ? item.name.split(" ").map(capitalize).join(" ") : ""}
        </h1>
      </div>
    </div>
  );
};

export default Card;
