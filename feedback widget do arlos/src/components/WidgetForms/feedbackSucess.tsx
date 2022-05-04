import { CloseButton } from "../CloseButton";
import vezinho from "../../assets/vezinho.svg";

interface feedbackSucessProps {
    onFeedbackRestartRequested: () => void;
}

export function FeedbackSucessStep ({ onFeedbackRestartRequested }: feedbackSucessProps) {
    return(
        <>
        <header>
            <CloseButton></CloseButton>
            <div><img src={vezinho} alt="" /></div>
        </header>
        <main className="flex flex-col justify-center items-center">
            <span className="text-xl mt-2">Obrigado pelo seu feedback !</span>
            <button type="button" onClick={onFeedbackRestartRequested} className="py-2 px-6 mt-4 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus-ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-40 disabled:hover:bg-brand-500">
                Quero enviar outro
                </button>
       </main>

       </>
    )
}