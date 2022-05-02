import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';

/*Aprendemos conceitos básicos do React como Componentes (Funções que retornarm HTML e CSS)
como o React renderiza a DOM, e por fim, como funciona as propriedades de um componente (elementos que podemos alterar
    em outro componente, como o texto por exemplo)

/* Aqui aprendemos sobre componentes do react e como rodar codigo HTML nele com Typescript e JSx
Aqui entendemos também como exportar funções para o App main e como utilizar o State management, 
além de aprender sobre UI e sobre a configuração e usabilidade do Tailwind css. */

export function Widget() {


    return (
        <Popover className="absolute bottom-5 right-5">
            <Popover.Panel>Amanhã vamos ter faustão no sbt</Popover.Panel>
            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-6 h-6" />

                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear"><span className='pl-2'>Feedback</span></span>
            </Popover.Button>
        </Popover>
    )
}