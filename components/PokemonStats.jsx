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

function PokemonStats({ pokemon }) {
  const router = useRouter();
  const [level, setLevel] = useState();
  const [iv, setIV] = useState();
  const [ev, setEV] = useState();

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
          <div className="flex justify-center w-full rounded-full pb-20">
            <h1
              className={`-mt-32 absolute text-[500px] text-opacity-10 text-${
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
              height={500}
              width={500}
              alt={pokemon.name}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="flex justify-center w-full mb-8">
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
            <div className="flex justify-center w-full h-[600px] items-center rounded-full pb-20">
              <RadarChart pokemon={pokemon} level={level} iv={iv} ev={ev} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default PokemonStats;
