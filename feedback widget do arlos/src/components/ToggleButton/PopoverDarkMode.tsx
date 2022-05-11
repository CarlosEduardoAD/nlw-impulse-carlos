import { Popover } from "@headlessui/react"
import { Button } from "./ToggleTheme"

export function PopoverDarkMode() {
    return (
        <div >
            <Popover className="fixed bottom-4 right-4 md:bottom-28 md:right-10 flex flex-col items-end">
                <Popover.Button className="bg-amber-500 dark:bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group transition duration-200"><Button></Button></Popover.Button>
            </Popover>
        </div>
    )
}