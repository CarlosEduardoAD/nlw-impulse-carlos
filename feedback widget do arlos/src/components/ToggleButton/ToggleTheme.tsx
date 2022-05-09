import UseDarkMode from "./UseDarkMode";
import lua from "../../assets/lua.svg";
import sol from "../../assets/sol.svg";


export function Button() {

    const [colorTheme, setTheme] = UseDarkMode();


    return (
        <div>
            <span onClick={() => setTheme(colorTheme)}>
                {colorTheme === "dark" ? (<button><img src={lua}  width="25" alt="Lua" height="25" /></button>
                ) : (<button><img src={sol} width="25" alt="Sol" height="25" /></button>)}
            </span>
        </div>
    )
}