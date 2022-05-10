import { CircleNotch } from "phosphor-react";

export function Loading() {
    return (
       <div className="animate-pulse">
           <CircleNotch className="w-4 h-4 animate-spin" weight="bold" ></CircleNotch>
       </div>
    );
}