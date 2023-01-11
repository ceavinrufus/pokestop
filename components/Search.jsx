import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { capitalizeEachFirstLetter } from "../functions/stringManipulation";
import Image from "next/image";
import { CgPokemon } from "react-icons/cg";

function Search() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [previews, setPreviews] = useState("");

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${0}&limit=${905}`)
      .then((res) => {
        const getPreviews = async () => {
          try {
            setPreviews(
              res.data.results
                .filter((el) => {
                  return el.name.toLowerCase().includes(e.target.value);
                })
                .slice(0, 4)
            );
          } catch (err) {
            console.log(err);
          }
        };
        getPreviews();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative">
      <div className="flex justify-start items-center md:text-base text-sm relative">
        <div className="flex justify-end">
          <input
            // value={query}
            type="text"
            onChange={(e) => {
              onChange(e);
            }}
            className="block w-5/6 md:w-full px-2 py-1 md:px-4 md:py-2 text-[#323232] bg-white border rounded-md focus:border-[#323232] focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search by ID or name"
          />
        </div>
      </div>

      {query.length > 0 && previews.length > 0 && (
        <div className="absolute bg-[#303030] border-2 left-0 w-full z-50 rounded-lg text-white">
          {previews.map((preview, id) => (
            <div
              key={id}
              className={`flex items-center px-3 cursor-pointer hover:bg-[#535353] transition ${
                id == 0 && "rounded-t-lg"
              } ${id == previews.length - 1 && "rounded-b-lg"}`}
              onClick={() => {
                router
                  .push("/pokedex/pokemon/" + preview.name)
                  .then(() => router.reload());
              }}
            >
              <div className="mr-3">
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${preview.url.slice(
                    34,
                    -1
                  )}.png`}
                  className=""
                  height={80}
                  width={80}
                  alt={preview.name}
                />
              </div>
              <div className="flex flex-col relative">
                <span className="">
                  #{("000" + preview.url.slice(34, -1)).slice(-3)}
                </span>
                <span>{capitalizeEachFirstLetter(preview.name, "-")}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
