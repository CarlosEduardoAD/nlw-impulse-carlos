import { Elements } from "./components/HeaderElements/HeaderElements";
import { MyDropdown } from "./components/HeaderElements/MobileMenu";
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
          <div className="flex pt-10 justify-center items-center">
        <Elements></Elements>
        </div>
        <div className="absolute top-7 ml-10 hover:opacity-50 transition-opacity">
        <Button/>
        </div> 
        <div className="flex justify-center font-mono md:">
      <h1 className="text-black dark:text-white transition duration-100;">
        Quer sentar na janelinha ? Vem conosco
      </h1>
      </div>
    </div>
    <div className="text-white">
    <Widget/>
    </div>
  </div>)
}