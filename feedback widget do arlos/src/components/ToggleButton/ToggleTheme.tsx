import UseDarkMode from "./UseDarkMode";
import { Sun } from "phosphor-react";
import { Moon } from "phosphor-react";

export function Button() {
  const [colorTheme, setTheme] = UseDarkMode();

  return (
    <div>
      <button>
        <span
          className="transition duration-200"
          onClick={() => setTheme(colorTheme)}
        >
          {colorTheme === "dark" ? (
            <Moon className="mt-[5px]" size={25}></Moon>
          ) : (
            <Sun className="mt-[5px]" size={25}></Sun>
          )}
        </span>
      </button>
    </div>
  );
}
