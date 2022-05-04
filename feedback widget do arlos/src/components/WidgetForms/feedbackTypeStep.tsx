import { feedbackTypes } from "."
import { feedbackType } from "."
import {CloseButton} from "../CloseButton"

interface feedbackTypeStepProps {
    onFeedbackTypeChanged: (type: feedbackType) => void

}

export function FeedbackTypeStep(props: feedbackTypeStepProps) {
    return (
    <>
        <header>
                <div className='text-xl leading-6'>
                    Nos dê sua opinião !
                </div>
                <CloseButton />
            </header>
    <div className="flex py-8 gap-2 w-full">
    {Object.entries(feedbackTypes).map(([key,value]) => {
        return(
        
        <button key={key} type="button" onClick={() => props.onFeedbackTypeChanged(key as feedbackType)} className=" bg-zinc-700 rounded-lg py-5 w-24x flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500">
            <img src={value.image.src} alt={value.image.alt} />
            <span>{value.title}</span>
        </button>

    )})}
</div>
</>)
}