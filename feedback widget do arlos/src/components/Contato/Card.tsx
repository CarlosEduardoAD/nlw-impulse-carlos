import { PopContato } from "./Popover";

export function CardContato (){
    return(
        <div className="transition bg-amber-500 dark:bg-brand-500 text-black dark:text-white mr-[480px] xl:mr-[420px] lg:mr-[280px] md:mr-[170px] md:ml-[170-px] sm:mr-[80px] bxs:ml-[40px] bxs:mr-[150px] xs:mr-[120px] xs:ml-[50px] xxs:mr-[120px] mt-[100px] rounded-lg p-10 xl:p-8 lg:p-6 md:p-4 sm:p-3 bxs:p-2 font-Heebo font-normal xl:text-xl lg:text-lg md: md:text-md sm:text-sm xbs:text-xs">
            <p>Não somos uma startup ou algo do tipo, somos apenas um timezinho <br />
            de pequenos desenvolvedores que querem trazer programas mais de boas<br />
            para a comunidade de tecnologia, não que seja aplicações grandes sejam ruins, mas  <br />
            sentimos que nem todos precisam do tanto que elas oferecem.</p> 
            
            <br/>

            <p>
            Utilizamos tecnologias open-source de grande parte, tipo <br />
            <strong>PostegreSql</strong>, <strong>Svelte</strong> e <strong>FastApi</strong> (Python) para fazer aplicações <br />
            poderosas e ao mesmo tempo, bonitas de se ver. <br />
            </p>

            <br/>

            <p>
            Não queremos te explicar toda física por trás das estrelas, só queremos <br />
            mostrar a beleza delas, ou seja, não queremos entregar aplicações super complexas, <br />
            só queremos entregar o necessário de uma maneira que seja agradável de usar.
            </p>
            <div className="flex items-end justify-start">
                <PopContato></PopContato>
            </div>

        </div>
    )
}