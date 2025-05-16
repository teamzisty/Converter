import Image from "next/image"
import { SlashLg, Discord, TwitterX, Github } from 'react-bootstrap-icons';
import icon from "@/assets/icon.png"

export default function Header() {
 return (
    <header className="flex fixed text-neutral-950 dark:text-neutral-50 justify-between w-full z-999 top-0 left-0 right-0 pt-[12px] pr-[18px] pb-[12px] pl-[18px] bg-transparent backdrop-blur-sm">
        <div className="flex items-center justify-center text-base gap-x-2">
            <Image src={icon} alt="Logo" width={100} height={100} className="w-4.5 h-4.5 invert dark:invert-0" />
            <SlashLg className="h-4 w-4" />
            <a href="/" className="font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">Converter</a>
        </div>
        <div className="flex items-center justify-center gap-x-3">
            <a href="https://discord.gg/6BPfVm6cST" target="_blank"><Discord size={20} /></a>
            <a href="https://x.com/teamzisty" target="_blank"><TwitterX size={20} /></a>
            <a href="https://github.com/teamzisty" target="_blank"><Github size={20} /></a>
        </div>
    </header>
 )   
}