import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Card from "../components/PokemonCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/pokedex/pokemon");
  }, []);

  return (
    <div>
      <Head>
        <title>PokéStop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      <div className="bg-[url('../public/assets/background-pokemon.jpg')] bg- bg-no-repeat bg-cover fixed min-h-screen w-screen -z-50"></div>
      {/* <div className="bg-[url('../public/assets/background.jpg')] bg-no-repeat bg-cover fixed min-h-screen w-screen -z-50"></div> */}
      <div className="bg-no-repeat bg-cover fixed min-h-screen w-screen -z-50"></div>
      <div
        className={`transition min-h-screen w-screen -z-40 opacity-80 fixed bg-black`}
      ></div>
      <main className="w-screen h-screen">
        <div className="flex justify-center h-1/2 items-center">
          <img src={`/assets/pokestop-xl.png`} width={800} height={300}></img>
          {/* <h1 className="font-Pokemon text-8xl text-white">PokeStop</h1> */}
        </div>
        <div className="flex flex-col space-y-6 justify-center">
          <button className="font-Pokemon text-5xl text-white">Battle</button>
          <button className="font-Pokemon text-5xl text-white">
            Catch Pokémon
          </button>
          <button
            onClick={() => {
              router.push("pokedex");
            }}
            className="font-Pokemon text-5xl text-white"
          >
            PokéDex
          </button>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
