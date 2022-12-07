import Head from "next/head";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Card from "../../../components/PokemonCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Sidebar from "../../../components/Sidebar";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "../../../components/Search";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  // const [open, setOpen] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
      .then((res) => {
        const getPokemons = async () => {
          try {
            const fetchPokemonPromises = await res.data.results.map((pokemon) =>
              axios.get(pokemon.url)
            );
            Promise.all(fetchPokemonPromises).then((values) => {
              setPokemons([...pokemons, ...values.map((value) => value.data)]);
              setLoading(false);
            });
          } catch (err) {
            console.log(err);
          }
        };
        getPokemons();
      })
      .catch((err) => console.log(err));
  }, [offset, limit]);

  function changeLimit(option) {
    if (option != limit) {
      setPokemons([]);
      setLimit(option);
    }
  }

  return (
    <div>
      <Head>
        <title>PokéStop - Pokémon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      <div
        // style={{ background: `linear-gradient(45deg, #F2F2F2, #f6f6f6)` }}
        className="bg-[#323232] fixed min-h-screen w-screen -z-50"
      ></div>
      {/* <div className="bg-[url('../public/assets/container_bg.png')] bg-repeat fixed min-h-screen w-screen -z-50"></div> */}
      <div className="bg-[url('../public/assets/body_bg.png')] bg-repeat fixed min-h-screen w-screen -z-50"></div>

      <Sidebar />
      <main>
        <Navbar title={"Pokémon"} textColor="white" />

        {!loading && (
          <>
            <div className={`lg:mx-28 my-4 flex justify-center min-w-screen`}>
              <InfiniteScroll
                dataLength={pokemons.length}
                next={() => setOffset(offset + limit)}
                hasMore={true}
                className={`flex flex-wrap lg:gap-12 md:gap-8 gap-2 justify-center max-w-[2000px]`}
              >
                {pokemons.map((pokemon) => (
                  <Link
                    key={pokemon.id}
                    href={`/pokedex/pokemon/${pokemon.name}`}
                  >
                    <a href="">
                      <Card pokemon={pokemon} />
                    </a>
                  </Link>
                ))}
              </InfiniteScroll>
            </div>
          </>
        )}
      </main>

      <footer></footer>
    </div>
  );
}
