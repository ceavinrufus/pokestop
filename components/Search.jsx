import React, { useState } from "react";
import { useRouter } from "next/router";

function Search() {
  const router = useRouter();
  const [poke, setPoke] = useState("");

  return (
    <div className="flex justify-start items-center md:text-base text-sm">
      <form
        onSubmit={() => {
          router.push(`/pokedex/pokemon/${poke}`);
        }}
        className="flex justify-end"
      >
        <input
          value={poke}
          type="text"
          onChange={(e) => {
            setPoke(e.target.value);
          }}
          className="block w-5/6 md:w-full px-2 py-1 md:px-4 md:py-2 text-[#323232] bg-white border rounded-md focus:border-[#323232] focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search by ID or name"
        />
      </form>
    </div>
  );
}

export default Search;
