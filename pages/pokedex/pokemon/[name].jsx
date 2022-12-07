import Head from "next/head";
import Sidebar from "../../../components/Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import PokemonStats from "../../../components/PokemonStats";
import { types, hexToGrayscale } from "../../../functions/color";
import {
  capitalize,
  capitalizeEachFirstLetter,
} from "../../../functions/stringManipulation";
import NotFound from "../../../components/NotFound";
import NamaPokemon from "../../../components/NamaPokemon";
import Navbar from "../../../components/Navbar";

export default function PokemonDetails() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [details, setDetails] = useState([]);
  const [description, setDescription] = useState([]);
  const { name } = router.query;

  useEffect(() => {
    if (router.isReady) {
      const getPokemons = async () => {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
          .then((res) => {
            const getPokemon = async () => {
              try {
                console.log(res);
                setPokemon(res.data);
                await axios.get(res.data.species.url).then((res) => {
                  const getDetails = async () => {
                    setDetails(res.data);
                    setDescription(
                      res.data.flavor_text_entries.filter(function (el) {
                        return el.language?.name == "en";
                      })
                    );
                    setLoading(false);
                  };
                  getDetails();
                });
              } catch (err) {
                console.log(err);
                setLoading(false);
              }
            };
            getPokemon();
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
      };
      getPokemons();
    }
  }, [router.isReady]);

  return (
    <>
      {!loading && (
        <div>
          {pokemon.id ? (
            <>
              <Head>
                <title>
                  PokéStop -{" "}
                  {pokemon.name && capitalizeEachFirstLetter(pokemon.name, "-")}
                </title>
                <meta
                  name="description"
                  content="Generated by create next app"
                />
                <link rel="icon" href={`/assets/logo.png`} />
              </Head>

              <Sidebar />

              {/* <div className="bg-[url('../public/assets/background.jpg')] bg-no-repeat bg-cover fixed min-h-screen w-screen -z-50"></div> */}
              <div
                style={{
                  backgroundColor:
                    pokemon.types && types[pokemon.types[0].type.name][1],
                }}
                className="bg-no-repeat bg-cover fixed min-h-screen w-screen -z-50"
              ></div>
              {/* <div className="bg-[url('../public/assets/container_bg.png')] bg-opacity-0 bg-repeat fixed min-h-screen w-screen -z-50"></div> */}

              <main>
                <Navbar
                  title={"PokéStop"}
                  textColor={hexToGrayscale(
                    types[pokemon.types[0].type.name][1]
                  )}
                />

                <section
                  className={
                    pokemon.types &&
                    `text-${hexToGrayscale(
                      types[pokemon.types[0].type.name][1]
                    )}`
                  }
                >
                  <div className="h-full md:mt-4 lg:mt-8">
                    <NamaPokemon pokemon={pokemon} details={details} />
                    <PokemonStats
                      pokemon={pokemon}
                      details={details}
                      description={description}
                    />
                  </div>
                </section>

                {/* Info */}
                <section className="p-16 mt-8 bg-[#fff] shadow-2xl rounded-t-[50px]"></section>
              </main>
            </>
          ) : (
            <NotFound />
          )}
          <footer></footer>
        </div>
      )}
    </>
  );
}
