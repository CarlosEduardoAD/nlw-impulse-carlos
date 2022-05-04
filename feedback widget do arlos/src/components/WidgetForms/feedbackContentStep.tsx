import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { feedbackType, feedbackTypes } from ".";
import { CloseButton } from "../CloseButton";
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

    function handleSubmitFeedback(event : FormEvent){
        event.preventDefault();
        console.log({
            comment, 
            screenshot,
        })
        onFeedbackSent();
    }

    return (
        <>
    <header>
        <span className='text-xl leading-6 flex items-center gap-2'>
            <button onClick={onFeedbackRestartRequested}><ArrowLeft className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-300"></ArrowLeft></button>
            <img src={feedbackTypeInfo.image.src} alt={feedbackTypeInfo.image.alt } />
            {feedbackTypeInfo.title}
        </span>
        <CloseButton />
    </header>
    <form className="my-4 w-full">
        <textarea onChange={event => setComment(event.target.value)} className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" placeholder='Fale com clareza para que possamos lhe ajudar melhor ;)'></textarea>
    
    <footer className="flex gap-2 mt-2">
        <ScreenShotButton
        screenshot={screenshot}
        onScreenshotTook={setScreenshot}></ScreenShotButton>
        <button disabled={comment.length === 0} type="submit" onClick={handleSubmitFeedback} className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus-ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-40 disabled:hover:bg-brand-500 transition-opacity">Enviar Feedback</button>    
    </footer>
    </form>
    
 </>)

}