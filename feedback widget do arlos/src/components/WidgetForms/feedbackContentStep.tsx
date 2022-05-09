import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { feedbackType, feedbackTypes } from ".";
import { api } from "../../lib/api";
import { CloseButton } from "../CloseButton";
import { Loading } from "../Loading";
import { ScreenShotButton } from "./ScreenShotButton";

interface FeedbackContentStepProps {	
    feedbackType: feedbackType
    onFeedbackRestartRequested: () => void
    onFeedbackSent: () => void
}




export function FeedbackContentStep({onFeedbackSent, feedbackType, onFeedbackRestartRequested } : FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

   async function handleSubmitFeedback(event : FormEvent){
        event.preventDefault();
        setIsLoading(true);
        await api.post('/feedbacks', {
            type : feedbackType,
            comment, 
            screenshot,
        })
        setIsLoading(false);
        onFeedbackSent();
    }

    return (
        <>
    <header>
        <span className='text-xl leading-6 flex items-center gap-2'>
            <button onClick={onFeedbackRestartRequested}><ArrowLeft className="top-5 left-5 absolute text-zinc-400 dark:text-white hover:text-zinc-300 transition duration-1000;"></ArrowLeft></button>
            <img src={feedbackTypeInfo.image.src} alt={feedbackTypeInfo.image.alt } />
            <div className="text-black dark:text-white">
            {feedbackTypeInfo.title}
            </div>
        </span>
        <CloseButton />
    </header>
    <form className="my-4 w-full">
        <textarea onChange={event => setComment(event.target.value)} className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-900 dark:placeholder-white text-zinc-900 dark:text-white border-zinc-600 bg-transparent rounded-md focus:border-black dark:focus:border-brand-500 focus:ring-black dark:focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin transition duration-1000" placeholder='Fale com clareza para que possamos lhe ajudar melhor ;)'></textarea>
    
    <footer className="flex gap-2 mt-2">
        <ScreenShotButton
        screenshot={screenshot}
        onScreenshotTook={setScreenshot}></ScreenShotButton>
        <button disabled={comment.length === 0 || isLoading } type="submit" onClick={handleSubmitFeedback} className="p-2 bg-black dark:bg-brand-500  rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-gray-700 dark:hover:bg-brand-300 focus:outline-none focus:ring-2 focus-ring-offset-2 focus:ring-offset-zinc-900 dark:focus:ring-brand-500 disabled:opacity-40 disabled:hover:bg-black dark:disabled:hover:bg-brand-500 transition-opacity duration-500">{isLoading ? <Loading/> : "Enviar Feedback"}</button>    
    </footer>
    </form>
    
 </>)

}