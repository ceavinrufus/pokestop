import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";

const NotFound = () => {
  const router = useRouter();

  //   useEffect(() => {
  //     setTimeout(() => {
  //       router.push("/pokedex/pokemon");
  //     }, 100000);
  //   }, []);
  return (
    <div className="">
      <Head>
        <title>PokéStop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="bg-[url('../public/assets/background-pokemon.jpg')] bg- bg-no-repeat bg-cover fixed min-h-screen w-screen -z-50"></div>
      <div
        className={`transition min-h-screen w-screen -z-40 opacity-80 fixed bg-black`}
      ></div>

      <main className="flex min-h-screen flex-col items-center justify-center">
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/250.gif"
          width={200}
          height={200}
        ></Image>
        <div className="flex flex-col items-center w-1/2 text-white outline-4">
          <h1 className="text-[200px]">HO-OH!</h1>
          <p className="text-3xl text-center">
            The requested page{" "}
            <span className="bg-black p-1">{window.location.pathname}</span>{" "}
            could not be found. Check that you typed the URL cor rectly!
          </p>
        </div>
      </main>
    </div>
  );
};

export default NotFound;