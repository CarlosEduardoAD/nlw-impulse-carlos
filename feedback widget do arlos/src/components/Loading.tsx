import { CircleNotch } from "phosphor-react";

export function Loading() {
    return (
       <div>
           <CircleNotch className="w-4 h-4 animate-spin" weight="bold" ></CircleNotch>
       </div>
    );
}