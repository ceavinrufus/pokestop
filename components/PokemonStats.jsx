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
import {
  capitalize,
  capitalizeEachFirstLetter,
  meterToFeet,
} from "../functions/stringManipulation";

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
          <div className="mx-16">
            <div className="flex justify-between">
              <div className="">
                <div className="flex items-center">
                  {/* Nama Pokemon */}
                  <h1 className="text-6xl">
                    {pokemon.name && capitalize(pokemon.name)}
                  </h1>
                  {/* Icon */}
                  <Image
                    src={`https://www.cpokemon.com/pokes/shuffle/${pokemon.id}.png`}
                    height={75}
                    width={75}
                    alt={pokemon.name}
                  />
                </div>
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
                          {capitalize(type.type.name)}
                        </h3>
                      </div>
                    ))}
                </div>
              </div>
              <div className="">
                <h1
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                  }}
                  className="text-8xl text-left"
                >
                  {
                    details.names?.find((name) => name.language?.name == "ja")
                      .name
                  }
                </h1>
              </div>
            </div>
            <div className="flex">
              <div className="flex -mt-64 justify-center w-full rounded-full pb-20">
                <h1
                  className={`-mt-24 absolute text-[400px] text-opacity-10 text-${
                    pokemon.types &&
                    hexToGrayscale(types[pokemon.types[0].type.name][1])
                  }`}
                >
                  {pokemon.id && `#${("000" + pokemon.id).slice(-3)}`}
                </h1>
                <Image
                  src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${(
                    "000" + pokemon.id
                  ).slice(-3)}.png`}
                  height={400}
                  width={400}
                  alt={pokemon.name}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-2 grid grid-cols-2">
            <div className="flex">
              <div className="flex items-end">
                <div
                  className={`flex flex-col text-${
                    pokemon.types &&
                    hexToGrayscale(types[pokemon.types[0].type.name][1])
                  } justify-center w-[690px] h-full items-center rounded-full pb-12`}
                >
                  <h2 className="text-xl ml-52 mb-12">
                    {description[0] &&
                      description[0].flavor_text.replace("\f", "\n")}
                  </h2>
                  <table>
                    <tbody className="text-xl text-left divide-y-2 divide-gray-75">
                      <tr>
                        <th className="pl-2 font-thin pr-8">National No</th>
                        <td className="pr-2">
                          {pokemon.id && `#${("000" + pokemon.id).slice(-3)}`}
                        </td>
                      </tr>
                      <tr>
                        <th className="pl-2 font-thin pr-10">Name</th>
                        <td className="pr-2">
                          {pokemon.id &&
                            `${capitalizeEachFirstLetter(pokemon.name)}`}
                        </td>
                      </tr>
                      <tr>
                        <th className="pl-2 font-thin pr-10">Weight</th>
                        <td className="pr-2">
                          {pokemon.weight / 10} kg (
                          {((pokemon.weight / 10) * 2.2046).toFixed(1)} lbs)
                        </td>
                      </tr>
                      <tr>
                        <th className="pl-2 font-thin pr-10">Height</th>
                        <td className="pr-2">
                          {pokemon.height / 10} m (
                          {meterToFeet(pokemon.height / 10)})
                        </td>
                      </tr>
                      <tr>
                        <th className="pl-2 font-thin pr-10">Shape</th>
                        <td className="pr-2">
                          {details.shape && capitalize(details.shape?.name)}
                        </td>
                      </tr>
                      <tr>
                        <th className="pl-2 font-thin pr-10">Color</th>
                        <td className="pr-2">
                          {details.shape && capitalize(details.color?.name)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
