import UseDarkMode from "../ToggleButton/UseDarkMode";

export function MainTitle() {
  return (
    <div>
      <div className="text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-2xl xs:text-lg font-Heebo mt-52 ml-48 xl:ml-36 lg:ml-24 md:ml-16 sm:ml-12 xs:ml-2">
        <h1>
          <span className="bg-black dark:bg-white text-transparent bg-clip-text">Independente de se é</span> <span className="bg-gradient-to-t text-transparent bg-clip-text from-blue-500 to-indigo-700 opacity-20 dark:opacity-100">noite</span> <span className="bg-black dark:bg-white text-transparent bg-clip-text">ou</span> <span className="transition-opacity bg-gradient-to-t text-transparent bg-clip-text from-blue-500 to-emerald-700 opacity-100 dark:opacity-20 dark:bg-gray-200 "> dia</span> <br />
          <span className="bg-black dark:bg-white text-transparent bg-clip-text">O céu nos reserva muitas belezas</span>
        </h1>
      </div>
      <div className="font-Heebo ml-[233px] lg:ml-[183px] md:ml-[73px] sm:ml-[33px] xs:ml-[13px] lg:text-lg md:text-md sm:text-sm xs:text-xs text-black dark:text-white">
        <p>
          Vamos te mostrar maravilhas que <br/> nenhum ser humano jamais já pensou ver
        </p>
      </div>
    </div>
  );
}
