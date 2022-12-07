import React, { useEffect } from "react";
import { useRouter } from "next/router";
import NotFound from "../components/NotFound";

const Error404 = () => {
  return (
    <div className="">
      <NotFound />
    </div>
  );
};

export default Error404;
