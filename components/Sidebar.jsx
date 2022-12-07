import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { BsChevronRight } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import { MdOutlineBackpack, MdExitToApp } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import { TbPokeball } from "react-icons/tb";
import { TiDevicePhone } from "react-icons/ti";
import Image from "next/image";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");
  const router = useRouter();

  function DropdownItem(props) {
    return (
      <div
        className="h-[45px] flex items-center group md:px-6 lg:px-8 cursor-pointer hover:bg-[#E3350D] hover:text-white"
        onClick={props.onClick}
      >
        <span className="rounded-full flex items-center group justify-center ml-3 md:ml-0 mr-2 hover:filter-none transition-filter">
          {props.leftIcon}
        </span>
        <span className="md:mr-2 text-sm md:text-base">{props.children}</span>
        <span className="rounded-full flex items-center justify-center mr-3 md:mr-2 hover:filter-none ml-auto">
          {props.rightIcon}
        </span>
      </div>
    );
  }
  return (
    <>
      <div
        className={`transition min-h-screen w-screen z-40 opacity-80 fixed ${
          open ? "bg-black" : "hidden"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`transition duration-500 fixed min-h-screen w-[140px] md:w-[168px] lg:w-[200px] border rounded-r-xl overflow-hidden transition-height bg-white bg-[url('../public/assets/container_bg.png')] shadow-2xl z-40 md:text-sm lg:text-base ${
          open
            ? ""
            : "-translate-x-[125px] md:-translate-x-[156px] lg:-translate-x-44"
        }`}
      >
        <div className="h-[40px] flex items-center md:px-6 lg:px-8 mb-10 mt-5">
          <button
            onClick={() => {
              router.push("/");
            }}
            className="md:text-xl ml-3 text-base md:ml-0 lg:text-2xl text-[#E3350D]"
          >
            PokéStop
          </button>
        </div>
        <CSSTransition
          in={activeMenu === "main"}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
        >
          <div className="w-full">
            {/* <DropdownItem
              onClick={() => {
                router.push("/profile");
              }}
              leftIcon={<CgProfile className="text-2xl" />}
            >
              My Profile
            </DropdownItem> */}

            <DropdownItem
              leftIcon={<TiDevicePhone className="text-2xl" />}
              rightIcon={<BsChevronRight />}
              onClick={() => setActiveMenu("pokedex")}
            >
              Pokédex
            </DropdownItem>
            {/* <DropdownItem
              leftIcon={<MdOutlineBackpack className="text-2xl" />}
              rightIcon={<BsChevronRight />}
              onClick={() => setActiveMenu("backpack")}
            >
              Backpack
            </DropdownItem> */}
            <DropdownItem
              onClick={() => {
                router.push("/");
              }}
              leftIcon={<MdExitToApp className="text-2xl" />}
            >
              Exit
            </DropdownItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "pokedex"}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
        >
          <div className="w-full">
            <DropdownItem
              goToMenu="main"
              onClick={() => setActiveMenu("main")}
              leftIcon={<IoArrowBack />}
            >
              Pokédex
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                router.push("/pokedex/pokemon");
              }}
              leftIcon={
                <>
                  <TbPokeball className="text-xl group-hover:hidden" />{" "}
                  <img
                    src={"/assets/pokemon-icon.png"}
                    width={20}
                    height={20}
                    className="text-xl hidden group-hover:flex"
                  />
                </>
              }
            >
              Pokémon
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                router.push("/pokedex/item");
              }}
              leftIcon={
                <>
                  <TbPokeball className="text-xl group-hover:hidden" />{" "}
                  <img
                    src={"/assets/pokemon-icon.png"}
                    width={20}
                    height={20}
                    className="text-xl hidden group-hover:flex"
                  />
                </>
              }
            >
              Item
            </DropdownItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "backpack"}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
        >
          <div className="w-full">
            <DropdownItem
              goToMenu="main"
              onClick={() => setActiveMenu("main")}
              leftIcon={<IoArrowBack />}
            >
              <h2>Backpack</h2>
            </DropdownItem>
            <DropdownItem
              onClick={() => {}}
              leftIcon={<TbPokeball className="text-xl" />}
            >
              Pokeball
            </DropdownItem>
          </div>
        </CSSTransition>
      </div>
      <div className="fixed z-50 min-h-screen flex">
        <button
          className={`transition duration-500 w-[30px] lg:w-[50px] md:w-[40px] ${
            open
              ? "translate-x-[125px] md:translate-x-[148px] lg:translate-x-[175px]"
              : "md:-translate-x-2 lg:-translate-x-0"
          }`}
          onClick={() => setOpen(!open)}
        >
          <Image
            className={`transition duration-500 fixed ${
              open ? "rotate-[360deg]" : ""
            }`}
            src={`${
              open ? "/assets/open-pokeball.png" : "/assets/pokeball.png"
            }`}
            height={50}
            width={50}
            alt=""
          />
        </button>
      </div>
    </>
  );
}
