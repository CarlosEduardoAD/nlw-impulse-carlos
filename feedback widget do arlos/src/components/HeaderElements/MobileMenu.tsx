import { ArrowSquareLeft, ArrowSquareRight } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";


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
          <div className="font-semibold pointer-events-none flex flex-col items-center justify-center gap-y-24 xl:gap-y-20 lg:gap-y-16 md:gap-y-12 sm:gap-y-8 bxs:gap-y-6 xs:gap-y-4 mt-24 xl:mt-28 lg:mt-32 md:mt-36 sm:mt-40 bxs:mt-44 xs:mt-48 text-black dark:text-white transition duration-300 font-Heebo animate__animated  animate__fadeInRight">
      <Link className="transition duration-700 opacity-20 focus:bg-blue-500 dark:focus:bg-brand-500 hover:bg-white dark:hover:bg-brand-300 rounded-lg p-4" to='/'>Home</Link>
      <Link className="transition duration-700 opacity-20 focus:bg-blue-500 dark:focus:bg-brand-500 hover:bg-white dark:hover:bg-brand-300 rounded-lg p-4" to='/historia '>História</Link>
        <Link className="transition duration-700 opacity-20 focus:bg-blue-500 dark:focus:bg-brand-500 hover:bg-white dark:hover:bg-brand-300 rounded-lg p-4" to='/contato'>Contato</Link>
      </div>
        </div>
      ) : (
        <div
          className={`top-0 right-0 fixed bg-amber-400 dark:bg-black w-[40vw] lg:w-[30vw] md:w-[25w] sm:w-[15vw] xs:w-[10vw] opacity-80  dark:opacity-60 h-full p-10 ease-in-out duration-500 {isOpen ? "translate-x-1" : "translate-x-full"}`}
        >
          <button onClick={() => setOpen(!isOpen)}>
            <ArrowSquareRight size={24}></ArrowSquareRight>{" "}
          </button>
          <div className="font-bold flex flex-col items-center justify-center gap-y-24 xl:gap-y-20 lg:gap-y-16 md:gap-y-12 sm:gap-y-8 bxs:gap-y-6 xs:gap-y-4 mt-24 xl:mt-28 lg:mt-32 md:mt-36 sm:mt-40 bxs:mt-44 xs:mt-48 mt-24 text-black dark:text-white transition duration-300 font-Heebo animate__animated  animate__fadeInRight">
      <Link className="transition duration-700 opacity-100 focus:bg-blue-500 dark:focus:bg-brand-500 hover:bg-white dark:hover:bg-brand-300 rounded-lg p-3" to='/'>Home</Link>
      <Link className="transition duration-700 opacity-100 focus:bg-blue-500 dark:focus:bg-brand-500 hover:bg-white dark:hover:bg-brand-300 rounded-lg p-3" to='/historia '>História</Link>
        <Link className="transition duration-700 opacity-100 focus:bg-blue-500 dark:focus:bg-brand-500 hover:bg-white dark:hover:bg-brand-300 rounded-lg p-3" to='/contato'>Contato</Link>
      </div>
        </div>
      )}
    </>
  );
}
