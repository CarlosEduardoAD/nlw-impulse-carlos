import { Sidebar } from "../HeaderElements/MobileMenu";
import { PopoverDarkMode } from "../ToggleButton/PopoverDarkMode";
import { Widget } from "../Widget";

export function MainHistoria(){
    return(
        <div className="min-h-screen dark:bg-[#2a2a4a] text-zinc-100 transition duration-1000;">
    <div>
      
    <div className="flex mr-[55px] mb-8 justify-end items-center">
      <Sidebar/>
        </div>
        <div className="text-black dark:text-white flex items-center justify-center mr-[200px] mt-[200px] font-Heebo font-semibold text-4xl xl:text-5xl xl:mr-[300px] lg:text-3xl lg:mr-[140px] ">
        Presidente Inprudente <br/>
        Bairro Lago Esmeralda rua Dois de Julho nº. 100 <br />
        (11) 91234-5678
      </div>
      <div>
        
      </div>
        <div className="flex justify-center font-mono pt-10">
          <PopoverDarkMode></PopoverDarkMode>
      </div>
        <div className="text-white">
    <Widget/>
    </div>
    </div>
  </div>
    )
}