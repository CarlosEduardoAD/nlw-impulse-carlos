import { ArrowSquareLeft, ArrowSquareRight } from "phosphor-react";
import { useState } from "react";
import { Button } from "../ToggleButton/ToggleTheme";
import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";


const pages = {
  1 : {
    title: "Home",
    img : "blablabla"
  },
  2 : {
    title: "About",
    img : "blablabla"},
  3 : {
    title: "Contact",
    img : "blablabla"},
  4 : {
    title: "Blog",
    img : "blablabla"},
}

export function Sidebar() {
  const [isOpen, setOpen] = useState<boolean | null>(false);

  return (
    <>
      {!isOpen ? (
        <div className={`top-0 right-0 fixed bg-amber-400 dark:bg-black xl:w-[14vw] lg:w-[12vw] md:w-[10vw] sm:w-[10vw] bxs:w-[4vw] xs:w-[2vw] h-full p-10 opacity-70 dark:opacity-40 ease-in-out duration-500 ${
          !isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <button
            className="hover:opacity-25 transition-opacity"
            onClick={() => setOpen(!isOpen)}
          >

            <ArrowSquareLeft
              size={24}
              className="hover:opacity-3"
            ></ArrowSquareLeft>
          </button>
        </div>
      ) : (
        <div
          className={`top-0 right-0 fixed bg-amber-400 dark:bg-black w-[40vw] lg:w-[30vw] md:w-[25w] sm:w-[15vw] xs:w-[10vw] opacity-80  dark:opacity-60 h-full p-10 ease-in-out duration-500 {isOpen ? "translate-x-1" : "translate-x-full"}`}
        >
          <button onClick={() => setOpen(!isOpen)}>
            <ArrowSquareRight size={24}></ArrowSquareRight>{" "}
          </button>
          <div>
        <Link to='/contato'>Contato</Link>
        <Link to='/home'>Home</Link>
      </div>
        </div>
      )}
    </>
  );
}
