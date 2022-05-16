import { Popover } from '@headlessui/react'
import { ArrowsOut } from 'phosphor-react'
import { Elements } from './PopoverElements'

export function PopContato(){
    return(
        <Popover>
            <Popover.Button className='flex flex-col items-center bg-amber-400 dark:bg-brand-300 p-2 rounded-full transtion duration-300'>
            <ArrowsOut size={32} />
            </Popover.Button>
            <Popover.Panel className="transition-transform duration-300 mt-2">
              <Elements></Elements>  
            </Popover.Panel>
        </Popover>
    )
}