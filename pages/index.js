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
    router.push("/pokemon");
  }, []);

  return (
    <div>
      <Head>
        <title>PokéStop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div className="bg-[url('../public/assets/background.jpg')] bg-no-repeat bg-cover fixed min-h-screen w-screen -z-50"></div> */}
      <div className="bg-[#323232] bg-no-repeat bg-cover fixed min-h-screen w-screen -z-50"></div>

      <main></main>

      <footer></footer>
    </div>
  );
}