import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import RadarChart from "./RadarChart";

function PokemonStats({ pokemon }) {
  const router = useRouter();

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
            <h1 className="-mt-32 absolute text-[500px] text-opacity-10 text-white">
              #{("000" + pokemon.id).slice(-3)}
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
          <div className="flex justify-center w-full h-[500px] items-center rounded-full pb-20">
            <RadarChart pokemon={pokemon} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default PokemonStats;
