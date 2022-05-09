import { CloseButton } from "../CloseButton";
import { useState } from "react";
import bug from "../../assets/bug.svg";
import ideia from "../../assets/ideia.svg";
import outro from '../../assets/outro.svg';
import { FeedbackTypeStep } from "./feedbackTypeStep";
import { FeedbackContentStep } from "./feedbackContentStep";
import { FeedbackSucessStep } from "./feedbackSucess";
import { Button } from "../ToggleButton/ToggleTheme";

export const feedbackTypes = {
    bug : {
        title : "Bug",
        description : "Ocorreu um bug no sistema e não estou conseguindo utilizar corretamente",
        image : {
            src : bug,
            alt : "Bug"
        }
    }
    ,
    ideia : {
        title : "Idéia",
        description : "Gostei de alguma coisa mas acho que poderia ficar melhor",
        image : {
            src : ideia,
            alt : "Idéia"
        },
    },

    outro : {
        title : "Outro",
        description : "Sei lá, outra coisa que eu queira falar",
        image : {
            src : outro,
            alt : "Outro"
        },
    }
}

export type feedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<feedbackType | null >(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }
    
    return(
        <div className='bg-amber-400 dark:bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto transition duration-1000;'> 
        
        {feedbackSent ? (
            <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback} />) :
            (
            <>
            {!feedbackType ? (<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}></FeedbackTypeStep>)
            : (<FeedbackContentStep feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback} onFeedbackSent={() => setFeedbackSent(true)}></FeedbackContentStep>)}
            </>)}

            <Button/>

            <footer>
                <div className="text-zinc-900 dark:text-white transition duration-1000;">Feito de maneira com ajuda da <a className="underline underline-offset-1" href="https://www.rocketseat.com.br/">Rocketseat</a> por <a className="underline underline-offset-1" href="https://github.com/Karl-developer">Carlos Eduardo</a></div>
            </footer>
        </div>
    )

}