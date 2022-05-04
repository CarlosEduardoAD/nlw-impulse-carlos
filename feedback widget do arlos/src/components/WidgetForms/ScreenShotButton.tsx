import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenShotButtonProps {
    screenshot : string | null
    onScreenshotTook: (screenshot : string | null) => void
}

export function ScreenShotButton({ screenshot, onScreenshotTook } : ScreenShotButtonProps) {

    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true);
        const canvas = await html2canvas(document.querySelector("html")!)
        const base64image = canvas.toDataURL("image/png");  
        onScreenshotTook(base64image);
        setIsTakingScreenshot(false);
    }

    if(screenshot){
        return (
            <button
            onClick={() => {onScreenshotTook(null)}}
            style={{
                backgroundImage : `url(${screenshot})`,
                backgroundPosition : 'right bottom',
                backgroundSize : 290,
            }}
            type='button' className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-200 transition-colors">
            <Trash weight='fill'></Trash>
            </button>
        )
    }

    return (
        <button type="button" onClick={handleTakeScreenshot} className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-500">
            {isTakingScreenshot ? <Loading></Loading> : <Camera className="w-6 h-6 text-zinc-100"></Camera>}
            </button>)
}  