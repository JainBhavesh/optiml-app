import { NextApiRequest, NextApiResponse } from "next"
import PortfolioJson from "../../data/portfolios.json"

type PortfolioType = {
  portfolioId: string
  name: string
  value: string
  description: string
  posterImg: string
  posterTitle: string
  editAt: string
}

type ResponseData = {
  data: PortfolioType[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ data: PortfolioJson.portfolios as PortfolioType[] })
}
