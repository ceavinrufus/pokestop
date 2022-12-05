import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import RadarChart from "./RadarChart";
import { types, hexToGrayscale } from "../functions/color";
import Dropdown from "./Dropdown";
import { capitalizeEachFirstLetter } from "../functions/stringManipulation";
import NamaPokemon from "./NamaPokemon";
import PokemonMainInfo from "./PokemonMainInfo";

function PokemonStats({ pokemon, details, description }) {
  const router = useRouter();
  const [level, setLevel] = useState();
  const [iv, setIV] = useState();
  const [ev, setEV] = useState();
  console.log(details.names);
  return (
    <>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        modules={[Pagination, Navigation, A11y, Scrollbar]}
        autoplay={{ delay: 5000 }}
        navigation
        pagination={{
          dynamicBullets: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mx-24">
            <div className="flex justify-between">
              <div className="">
                <NamaPokemon pokemon={pokemon} />
                {/* Tipe Pokemon */}
                <div className="flex gap-2">
                  {pokemon.types &&
                    pokemon.types.map((type) => (
                      <div
                        key={type.type.name}
                        className="flex flex-col items-center m-2"
                      >
                        <Image
                          src={`https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Types/POKEMON_TYPE_${type.type.name.toUpperCase()}.png`}
                          height={40}
                          width={40}
                          alt={type.type.name}
                        />
                        <h3 className="text-xl">
                          {capitalizeEachFirstLetter(type.type.name, " ")}
                        </h3>
                      </div>
                    ))}
                </div>
              </div>
              <h1
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "upright",
                }}
                className="text-8xl text-left min-h-[450px]"
              >
                {
                  details.names?.find((name) => name.language?.name == "ja")
                    .name
                }
              </h1>
            </div>
            <div className="flex">
              <div className="flex -mt-80 justify-center w-full rounded-full pb-20">
                <h1
                  className={`-mt-12 absolute text-[350px] text-opacity-10 text-${
                    pokemon.types &&
                    hexToGrayscale(types[pokemon.types[0].type.name][1])
                  }`}
                >
                  {pokemon.id && `#${("000" + pokemon.id).slice(-3)}`}
                </h1>
                {/* Pokemon Image */}
                <Image
                  src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${(
                    "000" + pokemon.id
                  ).slice(-3)}.png`}
                  height={450}
                  width={450}
                  alt={pokemon.name}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-24 grid grid-cols-2">
            <div
              className={`flex flex-col text-${
                pokemon.types &&
                hexToGrayscale(types[pokemon.types[0].type.name][1])
              }`}
            >
              <NamaPokemon pokemon={pokemon} />
              <h2 className="text-xl my-8">
                {description[0] &&
                  description[0].flavor_text.replace("\f", "\n")}
              </h2>
              <div className={`flex justify-start`}>
                <PokemonMainInfo pokemon={pokemon} details={details} />
              </div>
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="flex justify-center w-3/4 h-[500px] items-center rounded-full pb-8">
                <div
                  className={`flex w-3/4 justify-center h-full rounded-xl text-gray-700 bg-white text-${
                    pokemon.types &&
                    hexToGrayscale(types[pokemon.types[0].type.name][1])
                  } py-4 shadow-lg focus:outline-none placeholder:text-gray-500`}
                >
                  <RadarChart pokemon={pokemon} level={level} iv={iv} ev={ev} />
                </div>
              </div>
              <div className="flex justify-center w-full mb-16">
                <div className="flex items-center justify-center">
                  <div className="flex justify-center items-center space-x-2 w-48">
                    <label
                      htmlFor=""
                      className="text-gray-100 md:text-xl font-semibold ml-1"
                    >
                      Level
                    </label>
                    <input
                      type="text"
                      required
                      value={level}
                      placeholder="Level"
                      className={`w-1/2 h-10 rounded-xl text-gray-700 bg-white text-${
                        pokemon.types &&
                        hexToGrayscale(types[pokemon.types[0].type.name][1])
                      }  pl-4 shadow-lg focus:outline-none placeholder:text-gray-500`}
                      onChange={(e) => {
                        setLevel(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex justify-center items-center space-x-2 w-48">
                    <label
                      htmlFor=""
                      className="text-gray-100 md:text-xl font-semibold ml-1"
                    >
                      IV
                    </label>
                    <input
                      type="text"
                      required
                      value={iv}
                      placeholder="IV"
                      className="w-1/2 h-10 rounded-xl text-gray-700 bg-white  pl-4 shadow-lg focus:outline-none placeholder:text-gray-500"
                      onChange={(e) => {
                        setIV(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex justify-center items-center space-x-2 w-48">
                    <label
                      htmlFor=""
                      className="text-gray-100 md:text-xl font-semibold ml-1"
                    >
                      EV
                    </label>
                    <input
                      type="text"
                      required
                      value={ev}
                      placeholder="EV"
                      className="w-1/2 h-10 rounded-xl text-gray-700 bg-white  pl-4 shadow-lg focus:outline-none placeholder:text-gray-500"
                      onChange={(e) => {
                        setEV(e.target.value);
                      }}
                    />
                  </div>
                  {/* <div className="flex justify-center items-center space-x-2">
                  <label
                    htmlFor=""
                    className="text-gray-100 md:text-xl font-semibold ml-1"
                  >
                    Nature
                  </label>
                  <input
                    type="text"
                    required
                    value={ev}
                    placeholder="EV"
                    className="w-1/2 h-10 rounded-xl text-gray-700 bg-white bg-opacity-75 pl-4 shadow-lg focus:outline-none placeholder:text-gray-500"
                    onChange={(e) => {
                      setEV(e.target.value);
                    }}
                  />
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default PokemonStats;
