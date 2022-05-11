import { ArrowSquareLeft, ArrowSquareRight } from "phosphor-react";
import { useState } from "react";
import { Button } from "../ToggleButton/ToggleTheme";
import { Popover } from "@headlessui/react";


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
        <div className={`top-0 right-0 fixed bg-amber-400 dark:bg-black w-[8vw] h-full p-10 opacity-70 dark:opacity-40 ease-in-out duration-500 ${
          !isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <button
            className="hover:opacity-25 transition-opacity"
            onClick={() => setOpen(!isOpen)}
          >

            <ArrowSquareLeft
              size={24}
              className="hover:opacity-3"
            ></ArrowSquareLeft>{" "}
          </button>
        </div>
      ) : (
        <div
          className={`top-0 right-0 fixed bg-amber-400 dark:bg-black w-[25vw] opacity-80  dark:opacity-60 h-full p-10 ease-in-out duration-500 {isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <button onClick={() => setOpen(!isOpen)}>
            <ArrowSquareRight size={24}></ArrowSquareRight>{" "}
          </button>

          <div className="flex flex-row items-center justify-center">
            <ul className="text-lg">
              <li>Home</li>
              <li>História</li>
              <li>Contato</li>
              <li>Parceiros</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
