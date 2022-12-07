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

  return (
    <>
      <div className="">
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
            <div className="mx-10 md:mx-16 lg:mx-24">
              <div className="flex flex-col">
                <div className="text-base md:text-2xl lg:text-5xl pb-1">
                  <h1 className="text-[#be3265]">
                    {details.is_mythical && "Mythical Pokémon"}
                  </h1>
                  <h1>{details.is_baby && "Baby Pokémon"}</h1>
                  <h1 className="text-[#FFD300]">
                    {details.is_legendary && "Legendary Pokémon"}
                  </h1>
                </div>
                <div className="">
                  {/* Tipe Pokemon */}
                  <div className="flex gap-2">
                    {pokemon.types &&
                      pokemon.types.map((type) => (
                        <div
                          key={type.type.name}
                          className="flex flex-col items-center w-[100px] md:w-[120px] lg:w-[160px] -translate-x-2.5 md:-translate-x-3 lg:-translate-x-4 -mr-6"
                        >
                          <Image
                            src={`/assets/icon_type/typeIconText_${type.type?.name}.png`}
                            height={40}
                            width={160}
                            alt={type.type.name}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center h-[500px]">
                <div className="flex items-center justify-center w-full rounded-full pb-20">
                  <h1
                    className={`lg:-mt-12 absolute text-[150px] md:text-[250px] lg:text-[350px] text-opacity-20 text-${
                      pokemon.types &&
                      hexToGrayscale(types[pokemon.types[0].type.name][1])
                    }`}
                  >
                    {pokemon.id && `#${("000" + pokemon.id).slice(-3)}`}
                  </h1>
                  {/* Pokemon Image */}
                  <div className="w-[180px] lg:w-[450px] md:w-[380px]">
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
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:mx-16 lg:mx-24 items-center flex gap-6 md:flex-row flex-col-reverse">
              <div
                className={`flex flex-col justify-center mx-12 md:mx-0 md:w-1/2 text-${
                  pokemon.types &&
                  hexToGrayscale(types[pokemon.types[0].type.name][1])
                }`}
              >
                <h2 className="text-xs md:text-base lg:text-xl md:my-8">
                  {description[0] &&
                    description[0].flavor_text.replace("\f", "\n")}
                </h2>
                <div className={`flex justify-start mb-12`}>
                  <PokemonMainInfo pokemon={pokemon} details={details} />
                </div>
              </div>
              <div className="w-1/2 h-[200px] md:min-h-[450px] flex justify-center gap-2">
                {/* Pokemon Image 2 */}
                <div className="w-[550px] flex">
                  <Image
                    src={pokemon.sprites.other.dream_world?.front_default}
                    width={600}
                    height={600}
                    alt={pokemon.id}
                  />
                </div>
                <h1
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                  }}
                  className="text-3xl md:text-6xl lg:text-8xl text-center "
                >
                  {
                    details.names?.find((name) => name.language?.name == "ja")
                      .name
                  }
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:mx-16 lg:mx-24 flex gap-6">
              <div className="flex flex-col w-full">
                <div className="md:flex flex-col mt-8 w-full hidden">
                  <RadarChart pokemon={pokemon} smallDevice={false} />
                </div>
                <div className="flex flex-col mt-8 w-full md:hidden">
                  <RadarChart pokemon={pokemon} smallDevice={true} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default PokemonStats;
