import Head from "next/head";
import Navbar from "../../../components/Navbar";
import Card from "../../../components/ItemCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import DropdownMenu from "../../../components/Sidebar";

// export const getStaticProps = async () => {
//   const res
// }
export default function Home() {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(100);
  // const [open, setOpen] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/item/?offset=${offset}&limit=${limit}`)
      .then((res) => {
        const getItems = async () => {
          try {
            const fetchItemPromises = await res.data.results.map((item) =>
              axios.get(item.url)
            );
            Promise.all(fetchItemPromises).then((values) => {
              setItems([...items, ...values.map((value) => value.data)]);
            });
          } catch (err) {
            console.log(err);
          }
        };
        getItems();
      })
      .catch((err) => console.log(err));
  }, [offset, limit]);

  function changeLimit(option) {
    if (option != limit) {
      setItems([]);
      setLimit(option);
    }
  }

  return (
    <div>
      <Head>
        <title>PokéStop - Item</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      {/* <div className="bg-[url('../public/assets/background.jpg')] bg-no-repeat bg-cover fixed min-h-screen w-screen -z-50"></div> */}
      <div className="bg-[#323232] bg-no-repeat bg-cover fixed min-h-screen w-screen -z-50"></div>

      <DropdownMenu open={open} setOpen={setOpen} />
      <main>
        <Navbar title={"Item"} />

        <div
          className={`grid transition duration-500 my-12 mx-32 grid-cols-[2fr_1fr] justify-center max-w-screen`}
        >
          <div className="">
            <div className={`justify-center max-w-screen grid grid-cols-4`}>
              {items.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className=" h-screen">
            <div className="bg-white h-[80%] fixed"></div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
