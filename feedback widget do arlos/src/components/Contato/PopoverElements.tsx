import UseDarkMode from "../ToggleButton/UseDarkMode"

export function Elements(){
    const [colorTheme, setTheme] = UseDarkMode();
  
    return (
      <div>
        <button>
          <span
            className="transition duration-200"
            onClick={() => setTheme(colorTheme)}
          >
            {colorTheme === "dark" ? (
             <div className="transition-opacity duration-100 bg-amber-300 p-4 font-Heebo font-medium mt-4 rounded-lg text-black text-left">De dia colocamos novas features
             <br /> e analisamos pull requests <br /> nossas e de outros usuários.</div>
            ) : (
                <div className="text-left mt-4 rounded-lg bg-indigo-800 p-4 font-Heebo font-medium">De noite lemos as issues <br /> do github
                e corrigimos bugs.</div>
            )}
          </span>
        </button>
      </div>
    );
  }
