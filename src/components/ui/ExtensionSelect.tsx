import { Select, SelectContent, SelectGroup, SelectLabel, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"

export default function ExtensionSelect({ extension, onChange }: { extension: string, onChange: (extension: string) => void }) {
    return (
        <Select onValueChange={onChange}>
            <SelectTrigger className="w-[120px]">
                to<SelectValue placeholder={extension || "..."} />
            </SelectTrigger>
            <SelectContent className="w-[190px] h-[300px]">
                <SelectGroup>
                    <SelectLabel>Image</SelectLabel>
                    <SelectItem value="png">PNG</SelectItem>
                    <SelectItem value="jpg">JPG</SelectItem>
                    <SelectItem value="jpeg">JPEG</SelectItem>
                    <SelectItem value="gif">GIF</SelectItem>
                    <SelectItem value="svg">SVG</SelectItem>
                    <SelectItem value="webp">WEBP</SelectItem>
                    <SelectItem value="ico">ICO</SelectItem>
                    <SelectItem value="tiff">TIFF</SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Video</SelectLabel>
                    <SelectItem value="mp4">MP4</SelectItem>
                    <SelectItem value="webm">WEBM</SelectItem>
                    <SelectItem value="avi">AVI</SelectItem>
                    <SelectItem value="mov">MOV</SelectItem>
                    <SelectItem value="mkv">MKV</SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Audio</SelectLabel>
                    <SelectItem value="mp3">MP3</SelectItem>
                    <SelectItem value="wav">WAV</SelectItem>
                    <SelectItem value="ogg">OGG</SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Document</SelectLabel>
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="docx">DOCX</SelectItem>
                    <SelectItem value="txt">TXT</SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Font</SelectLabel>
                    <SelectItem value="ttf">TTF</SelectItem>
                    <SelectItem value="otf">OTF</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
};