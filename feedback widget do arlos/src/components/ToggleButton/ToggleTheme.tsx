import UseDarkMode from "./UseDarkMode";
import lua from "../../assets/lua.svg";
import sol from "../../assets/sol.svg";


export function Button() {

    const [colorTheme, setTheme] = UseDarkMode();

    return (
        <div>
            <span className="transition duration-200" onClick={() => setTheme(colorTheme)}>
                {colorTheme === "dark" ? (<button><img src={lua}  width="45" alt="Lua" height="45" /></button>
                ) : (<button><img src={sol} width="45" alt="Sol" height="45" /></button>)}
            </span>
        </div>
    )
}