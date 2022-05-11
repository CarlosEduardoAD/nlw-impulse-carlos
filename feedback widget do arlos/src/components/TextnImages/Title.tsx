import UseDarkMode from "../ToggleButton/UseDarkMode";

export function MainTitle() {
  return (
    <div>
      <div className=" text-7xl font-Heebo mt-52 ml-36">
        <h1>
          <span className="bg-black dark:bg-white text-transparent bg-clip-text">Independente de se é</span> <span className="bg-gradient-to-t text-transparent bg-clip-text from-blue-500 to-indigo-700 opacity-0 dark:opacity-100">noite</span><span className="transition-opacity bg-gradient-to-t text-transparent bg-clip-text from-blue-500 to-emerald-700 opacity-100 dark:opacity-0 "> ou dia</span> <br />
          <span className="bg-black dark:bg-white text-transparent bg-clip-text">O céu nos reserva muitas belezas</span>
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
