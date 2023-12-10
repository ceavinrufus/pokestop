import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import RadarChart from "./RadarChart";
import { types, hexToGrayscale } from "../functions/color";
import PokemonMainInfo from "./PokemonMainInfo";

function PokemonStats({ pokemon, details, description }) {
  const router = useRouter();
  console.log(pokemon);
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
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="mx-10 md:mx-16 lg:mx-28">
              <div className="flex items-center justify-between">
                <div className="text-xs md:text-base lg:text-xl py-2">
                  {details.is_mythical && (
                    <h1
                      style={{
                        background: `${
                          pokemon.types &&
                          `linear-gradient(45deg, #BE3265, #000, #BE3265, #000)`
                        }`,
                      }}
                      className={`border rounded-full px-2 py-1 md:px-4 md:py-2 text-${hexToGrayscale(
                        "#BE3265"
                      )} w-fit`}
                    >
                      Mythical Pokémon
                    </h1>
                  )}
                  {details.is_baby && (
                    <h1
                      style={{
                        background: `${
                          pokemon.types &&
                          `linear-gradient(45deg, #84BEE5, white, #84BEE5, white)`
                        }`,
                      }}
                      className={`border rounded-full px-2 py-1 md:px-4 md:py-2 text-${hexToGrayscale(
                        "#84BEE5"
                      )} w-fit`}
                    >
                      Baby Pokémon
                    </h1>
                  )}
                  {details.is_legendary && (
                    <h1
                      style={{
                        background: `${
                          pokemon.types &&
                          `linear-gradient(45deg, #FFD300, white, #FFD300, white)`
                        }`,
                      }}
                      className={`border rounded-full px-2 py-1 md:px-4 md:py-2 text-${hexToGrayscale(
                        "#FFD300"
                      )} w-fit`}
                    >
                      Legendary Pokémon
                    </h1>
                  )}
                </div>
              </div>
              <div className="flex items-center h-[500px]">
                <div className="flex items-center justify-center w-full rounded-full pb-20">
                  <h1
                    className={`lg:-mt-12 absolute text-[150px] md:text-[250px] lg:text-[350px] text-opacity-20 animate-slideInFromRight text-${
                      pokemon.types &&
                      hexToGrayscale(types[pokemon.types[0].type.name][1])
                    }`}
                  >
                    {pokemon.id && `#${("000" + pokemon.id).slice(-3)}`}
                  </h1>
                  {/* Pokemon Image */}
                  <div className="w-[180px] lg:w-[450px] md:w-[380px] animate-slideInFromLeft">
                    <Image
                      src={
                        pokemon.sprites.other["official-artwork"].front_default
                      }
                      width={600}
                      height={600}
                      alt={pokemon.id}
                      priority={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <div className="md:mx-16 lg:mx-28 items-center flex gap-6 md:flex-row flex-col-reverse">
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
              <div className="w-1/2 h-[200px] md:min-h-[500px] flex justify-center gap-2">
                {/* Pokemon Image 2 */}
                <div className={`w-[550px] flex animate-float`}>
                  <Image
                    src={
                      pokemon.sprites.other.dream_world?.front_default ||
                      pokemon.sprites.other["official-artwork"].front_default
                    }
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
          {/* Slide 3 */}
          <SwiperSlide>
            <div className="md:mx-16 lg:mx-28 flex gap-6">
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
