"use client"

import { useState } from "react"
import FadeIn from "@/components/ui/FadeIn"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/Dialog"
import { FileEarmarkArrowUp, XLg, ArrowRepeat } from "react-bootstrap-icons";
import { Button } from "@/components/ui/Button";

export default function FileUpload() {
    const [files, setFiles] = useState<{ name: string, content: string, size: string, type: string }[]>([])
    const [open, setOpen] = useState(false)

    const close = () => {
        setOpen(false)
        setFiles([])
    }

    return (
        <>
            <Dialog open={open} onOpenChange={close}>
                <DialogContent className="sm:max-w-[650px]">
                    <DialogHeader>
                        <DialogTitle>Download Image</DialogTitle>
                        <DialogDescription>
                            The converted file will be displayed.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-2">
                        <table className="table-auto border-collapse w-full">
                            <tbody>
                                <tr className="border-b border-neutral-500/20">
                                    <td className="px-2 py-3.5 w-45 relative inline-block whitespace-nowrap overflow-hidden text-ellipsis after:content-[''] after:absolute after:right-0 after:top-0 after:w-25 after:h-full after:pointer-events-none after:bg-gradient-to-r after:from-transparent after:to-white dark:after:to-[#0a0a0a]">Ababa.mp4</td>
                                    <td className="px-2 py-2 text-neutral-800 dark:text-neutral-400">1.2 mb</td>
                                    <td className="px-2 py-2">mp4</td>
                                    <td className="px-2 py-2 text-right">
                                        <Button>Download</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}