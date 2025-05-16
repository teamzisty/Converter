import type { NextApiRequest, NextApiResponse } from "next"
export default async function handler(req: NextApiRequest, res: NextApiResponse<{ name: string, download: string }[] | { error: string }>) {
    res.status(200).json({ error: "Not implemented" })
}
