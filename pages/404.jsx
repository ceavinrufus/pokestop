import React, { useEffect } from "react";
import { useRouter } from "next/router";
import NotFound from "../components/NotFound";

const Error404 = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/pokedex/pokemon");
    }, 3000);
  }, []);

  return (
    <div className="">
      <NotFound />
    </div>
  );
};

export default Error404;
