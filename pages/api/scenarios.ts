import { NextApiRequest, NextApiResponse } from "next"
import ScenarioJson from "../../data/scenarios.json"

type ScenarioType = {
  name: string
  caption: string
  posterGrdt: Array<any>
  posterTitle: string
  posterSubtitle: string
  editAt: string
}

type ResponseData = {
  data: ScenarioType[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ data: ScenarioJson.scenarios as ScenarioType[] })
}
