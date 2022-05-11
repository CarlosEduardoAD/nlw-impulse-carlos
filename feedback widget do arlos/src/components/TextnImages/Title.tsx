import UseDarkMode from "../ToggleButton/UseDarkMode";

export function MainTitle() {
  return (
    <div>
      <div className="bg-gradient-to-t text-transparent from-blue-500 to-emerald-300 dark:from-purple-500 dark:to-indigo-700 bg-clip-text text-7xl font-Heebo mt-52 ml-36">
        <h1>
          Que tal tentar contar <br />
          as estrelas do céu ?
        </h1>
      </div>
      <div className="font-Heebo mt-1 ml-[233px] text-black dark:text-white">
        <p>
          Vamos te mostrar maravilhas que nenhum ser humano jamais já pensou ver
        </p>
      </div>
    </div>
  );
}
