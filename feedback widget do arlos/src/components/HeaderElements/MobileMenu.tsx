import { ArrowSquareLeft, ArrowSquareRight } from 'phosphor-react';
import { useState } from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import { Button } from '../ToggleButton/ToggleTheme';

export function Sidebar() {

  const [isOpen, setOpen] = useState<boolean | null >(false)

  return (
  <>
    {!isOpen ? <div><button className='hover:opacity-25 transition-opacity' onClick={() => setOpen(!isOpen)}> <ArrowSquareLeft size={24} className='hover:opacity-3'></ArrowSquareLeft> </button></div> : <div className={`top-0 right-0 fixed bg-amber-400 dark:bg-black w-[25vw] h-full p-10 ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-200 z-0 transition-transform`}>
    <button className='hover:opacity-25 transition-opacity' onClick={() => setOpen(!isOpen)} > <ArrowSquareRight size={24}></ArrowSquareRight> </button>
      <div className="absolute top-7 right-10 flex hover:opacity-50 transition-opacity">
        <Button/>
        </div>
        <div className='flex flex-row items-center justify-center'>
          <ul className='text-lg'>
            <li>Home</li>
            <li>História</li>
            <li>Contato</li>
            <li>Parceiros</li>
          </ul></div> 
    </div> }
    
    </> 

  )
}