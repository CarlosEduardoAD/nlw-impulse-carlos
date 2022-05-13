import '../../global.css'
import { Sidebar } from '../HeaderElements/MobileMenu'
import { PopoverDarkMode } from '../ToggleButton/PopoverDarkMode'
import { Widget } from '../Widget'

export function MainContato(){
    return(
        <div className="min-h-screen dark:bg-[#2a2a4a] text-zinc-100 transition duration-1000;">
    <div>
      
    <div className="flex mr-[55px] mb-8 justify-end items-center">
      <Sidebar/>
        </div>
        <div>
        
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