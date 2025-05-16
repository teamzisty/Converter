"use client"

import { useState } from "react"
import FadeIn from "@/components/ui/FadeIn"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/Dialog"
import { FileEarmarkArrowUp, XLg, ArrowRepeat } from "react-bootstrap-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";
import { Button } from "@/components/ui/Button";
import ExtensionSelect from "@/components/ui/ExtensionSelect"

export default function FileUpload() {
    const [files, setFiles] = useState<{ name: string, content: string, size: string, type: string }[]>([])
    const [extensions, setExtensions] = useState<{ [key: number]: string }>({})
    const [open, setOpen] = useState(false)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files
        if (selectedFiles) {
            const fileArray = Array.from(selectedFiles)
            const newFiles: { name: string, content: string, size: string, type: string }[] = []

            fileArray.forEach((file) => {
                const reader = new FileReader()
                reader.onload = () => {
                    newFiles.push({ name: file.name, content: reader.result as string, size: (file.size / 1024).toFixed(1) + " kb", type: file.name.split('.').pop() || '' })
                    if (newFiles.length === fileArray.length) {
                        setFiles((prevFiles) => [...prevFiles, ...newFiles])
                        setOpen(true)
                    }
                }
                reader.readAsDataURL(file)
            })
        }
    }

    const handleSave = async () => {
        const payload = files.map((file, index) => ({
            name: file.name,
            content: file.content,
            from: file.type,
            to: extensions[index] || file.type
        }))
    
        try {
            const res = await fetch('/api/convert', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            })
    
            const blob = await res.blob()
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement("a")
            a.href = url
            a.download = "converted.zip"
            document.body.appendChild(a)
            a.click()
            a.remove()
            window.URL.revokeObjectURL(url)
    
            close()
        } catch (error) {
            console.error("Convert Error: ", error)
        }
    }    

    const close = () => {
        setOpen(false)
        setFiles([])
    }

    return (
        <>
            {/* <FileDownload /> */}

            <FadeIn delay={500} duration={700}>
                <label className="flex flex-col items-center justify-center cursor-pointer w-full h-90 mt-10 border border-dashed rounded text-muted-foreground">
                    <FileEarmarkArrowUp size={25} className="mb-2" />
                    <p className="text-lg">Click or Drop to upload</p>
                    <p className="text-sm">No file size limit</p>
                    <input type="file" accept="*" onChange={handleFileChange} className="hidden" />
                </label>
            </FadeIn>

            <Dialog open={open} onOpenChange={close}>
                <DialogContent className="sm:max-w-[650px]">
                    <DialogHeader>
                        <DialogTitle>Uploaded Image</DialogTitle>
                        <DialogDescription>
                            Select the file extension you want to convert.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-2">
                        <table className="table-auto border-collapse w-full">
                            <tbody>
                                {files.map((file, index) => (
                                    <tr key={index} className="border-b border-neutral-500/20">
                                        <td className="px-2 py-3.5 w-45 relative inline-block whitespace-nowrap overflow-hidden text-ellipsis after:content-[''] after:absolute after:right-0 after:top-0 after:w-25 after:h-full after:pointer-events-none after:bg-gradient-to-r after:from-transparent after:to-white dark:after:to-[#0a0a0a]">{file.name}</td>
                                        <td className="px-2 py-2 text-neutral-800 dark:text-neutral-400">{file.size}</td>
                                        <td className="px-2 py-2"><ExtensionSelect extension={file.type} onChange={(ext: string) => { setExtensions((prev) => ({ ...prev, [index]: ext })) }} /></td>
                                        <td className="px-2 py-2 text-right">
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button size="icon" variant="ghost" onClick={() => setFiles(files.filter((_, i) => i !== index))}>
                                                        <XLg className="text-neutral-900 dark:text-neutral-300" size={15} />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Remove</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <DialogFooter className="flex gap-x-2.5 mt-10">
                        <Button onClick={close} variant="ghost">Cancel</Button>
                        <Button onClick={handleSave}><ArrowRepeat className="rotate-40" /> Convert</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}