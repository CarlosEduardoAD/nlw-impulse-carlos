import { Popover } from '@headlessui/react'
import { ArrowsOut } from 'phosphor-react'
import { Elements } from './PopoverElements'

export function PopContato(){
    return(
        <Popover>
            <Popover.Button className='fixed bg-amber-400 dark:bg-brand-300 p-2 rounded-full transtion duration-300'>
            <ArrowsOut size={32} />
            </Popover.Button>
            <Popover.Panel className="transition-transform duration-300">
              <Elements></Elements>  
            </Popover.Panel>
        </Popover>
    )
}