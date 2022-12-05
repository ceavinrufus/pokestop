import React, { useEffect } from "react";
import { useRouter } from "next/router";

function Pokedex() {
  const router = useRouter();

  useEffect(() => {
    router.push("pokedex/pokemon");
  }, []);
  return <></>;
}

export default Pokedex;
