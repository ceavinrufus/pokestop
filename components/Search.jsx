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
  const [suggest, setSuggest] = useState([]);

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

  const onBlur = (e) => {
    if (e.relatedTarget == null) {
      setSuggest(false);
    } else {
      if (e.relatedTarget.className === "search-result") {
        setSuggest(true);
      } else {
        setSuggest(false);
      }
    }
  };

  return (
    <div className="relative flex justify-end">
      <div className="relative w-5/6 md:w-full">
        <div className="flex justify-start items-center md:text-base text-sm relative">
          <form
            className="flex justify-end"
            onSubmit={(e) => {
              e.preventDefault();
              router.push("/pokedex/pokemon/" + previews[0].name);
              setSuggest(false);
            }}
          >
            <input
              // value={query}
              onBlur={onBlur}
              onFocus={() => setSuggest(true)}
              type="text"
              onChange={(e) => {
                onChange(e);
                setSuggest(true);
              }}
              className="block w-full px-2 py-1 md:px-4 md:py-2 text-[#323232] bg-white border rounded-md focus:border-[#323232] focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search by ID or name"
            />
          </form>
        </div>

        {suggest && query.length > 0 && previews.length > 0 && (
          <div tabIndex="0" className="search-result">
            <div className="absolute mt-1 bg-[#303030] border-2 left-0 w-full z-50 rounded-lg text-white">
              {previews.map((preview, id) => (
                <div
                  key={id}
                  className={`grid grid-cols-2 px-3 cursor-pointer hover:bg-[#535353] transition ${
                    id == 0 && "rounded-t-lg"
                  } ${id == previews.length - 1 && "rounded-b-lg"}`}
                  onClick={() => {
                    router.push("/pokedex/pokemon/" + preview.name);
                    setSuggest(false);
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
                  <div className="flex flex-col relative text-xs md:text-base justify-center">
                    <span className="">
                      #{("000" + preview.url.slice(34, -1)).slice(-3)}
                    </span>
                    <span>{capitalizeEachFirstLetter(preview.name, "-")}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
