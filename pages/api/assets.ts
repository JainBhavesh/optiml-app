import { NextApiRequest, NextApiResponse } from "next"
import AssetsJson from "../../data/assets.json"

type AssetsType = {
  assetId: string
  name: string
  caption: string
  previewImg: string
  editAt: string
  assetValue: number
}

type ResponseData = {
  data: AssetsType[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ data: AssetsJson.assets as AssetsType[] })
}
