import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { BsChevronRight } from "react-icons/bs";
import { BiCog } from "react-icons/bi";
import { IoArrowBack } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import { AiOutlineProfile } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

function Dropdown() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <div
        className="h-[45px] flex items-center px-3 hover:bg-opacity-20 hover:bg-white/30 hover:backdrop-blur-xl"
        onClick={props.onClick}
      >
        <span className="rounded-full p-[5px] m-[2px] flex items-center justify-center mr-2 hover:filter-none transition-filter">
          {props.leftIcon}
        </span>
        {props.children}
        <span className="rounded-full p-[5px] m-[2px] flex items-center justify-center mr-2 hover:filter-none ml-auto">
          {props.rightIcon}
        </span>
      </div>
    );
  }

  return (
    <div
      className="absolute top-[70px] right-0 md:mr-16 mr-8 w-[195px] border rounded-xl overflow-hidden transition-height cursor-pointer backdrop-blur-sm shadow-lg bg-opacity-20 z-50"
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="w-full">
          {/* <DropdownItem
            onClick={() => router.push("/presensi")}
            leftIcon={<MdPayment className="text-2xl" />}
          >
            Presensi
          </DropdownItem> */}
          <DropdownItem
            leftIcon={<BiCog className="text-2xl" />}
            rightIcon={<BsChevronRight />}
            onClick={() => setActiveMenu("settings")}
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="w-full">
          <DropdownItem
            goToMenu="main"
            onClick={() => setActiveMenu("main")}
            leftIcon={<IoArrowBack />}
          >
            <h2>Settings</h2>
          </DropdownItem>
          <DropdownItem
            onClick={() => router.push("/edit-password")}
            leftIcon={<RiLockPasswordLine className="text-xl" />}
          >
            Edit Password
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Dropdown;
