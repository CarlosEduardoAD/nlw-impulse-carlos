import { Button } from "./components/ToggleButton/ToggleTheme";
import UseDarkMode  from "./components/ToggleButton/UseDarkMode";
import { Widget } from "./components/Widget";

/* Aprendemos aqui a estrutura básica do React e como funciona ele
entedemos também como o react renderiza apps a partir do App.tsx e como
realizar importações de bibliotecas externas e também de nossos próprios componentes */


export function App(){
  UseDarkMode();
  return (
  <div>
    <div className="flex items-center justify-center min-h-screen dark:bg-[#2a2a4a] text-zinc-100 transition duration-1000;">
      <h1 className="text-black dark:text-white transition duration-1000;">
        Amanhã teremos faustão no sbt
      </h1>
    </div>
    <div className="text-white">
    <Widget/>
    </div>
  </div>)
}