import '../../global.css'
import { Sidebar } from '../HeaderElements/MobileMenu'
import { PopoverDarkMode } from '../ToggleButton/PopoverDarkMode'
import { Widget } from '../Widget'
import { CardContato } from './Card'
import { PopContato } from './Popover'

export function MainContato(){
    return(
        <div className="min-h-screen dark:bg-[#2a2a4a] text-zinc-100 transition duration-1000;">
    <div>
    <div className="flex mr-[55px] mb-8 justify-end items-center">
      <Sidebar/>
        </div>
        <div className='flex justify-center items-center'>
      <CardContato></CardContato>
      </div>
      <div className='absolute left-[780px] -mt-8'>
      <PopContato></PopContato>
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