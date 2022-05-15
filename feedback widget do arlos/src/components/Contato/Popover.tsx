import { Popover } from '@headlessui/react'
import { ArrowsOut } from 'phosphor-react'
import { Elements } from './PopoverElements'

export function PopContato(){
    return(
        <Popover>
            <Popover.Button className='bg-black dark:bg-brand-300 p-2 rounded-full '>
            <ArrowsOut size={32} />
            </Popover.Button>
            <Popover.Panel>
              <Elements></Elements>  
            </Popover.Panel>
        </Popover>
    )
}