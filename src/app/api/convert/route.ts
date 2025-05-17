import { NextRequest, NextResponse } from "next/server";
import {
    ImageTypes,
    VideoTypes,
    AudioTypes,
    DocumentTypes,
    FontTypes
} from "@/interfaces/types";

const maxBytes: number = 5368709120; // 5 GB -> 5368709120 Byte

interface SuccsessResponse {
    name: string;
    download: string;
}
interface ErrorResponse {
    error: string;
}
type AllTypes = ImageTypes | VideoTypes | AudioTypes | DocumentTypes | FontTypes;
interface Payload {
    name: string,
    content: string,
    from: AllTypes;
    to: AllTypes;
}
/*
const payload = files.map((file, index) => ({
    name: file.name,
    content: file.content,
    from: file.type,
    to: extensions[index] || file.type
}))
*/


// export default async function handler(req: NextApiRequest, res: NextApiResponse<{ name: string, download: string }[] | { error: string }>) {
//     console.log(req.body)
//     res.status(200).json({ error: "Not implemented" });
// }

export async function POST(req: NextRequest) {
    const payloads: Array<Payload> = await req.json();
    
    for (const payload of payloads) {
        console.log(payload);
    }


    return NextResponse.json({ error: "Not implemeted" }, { status: 400 });
}