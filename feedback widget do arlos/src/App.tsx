import { Sidebar } from "./components/HeaderElements/MobileMenu";
import { MainProse } from "./components/Home/paragraph";
import { MainTitle } from "./components/Home/Title";
import { PopoverDarkMode } from "./components/ToggleButton/PopoverDarkMode";
import { Button } from "./components/ToggleButton/ToggleTheme";
import UseDarkMode  from "./components/ToggleButton/UseDarkMode";
import { Widget } from "./components/Widget";

/* Aprendemos aqui a estrutura básica do React e como funciona ele
entedemos também como o react renderiza apps a partir do App.tsx e como
realizar importações de bibliotecas externas e também de nossos próprios componentes */


export function App(){
  UseDarkMode();
  return (
    <div className="min-h-screen dark:bg-[#2a2a4a] text-zinc-100 transition duration-1000;">
    <div>
      
    <div className="flex mr-[55px] mb-8 justify-end items-center">
      <Sidebar/>
        </div>
        <div>
        <MainTitle></MainTitle>
      </div>
      <div>
        <MainProse></MainProse>
      </div>
        <div className="flex justify-center font-mono pt-10">
          <PopoverDarkMode></PopoverDarkMode>
      </div>
        <div className="text-white">
    <Widget/>
    </div>
    </div>
  </div>)
}