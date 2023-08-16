import { render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import List from "./index"

// mock axios package
const axios = require("axios")
jest.mock("axios")

describe("List Page", () => {
  it("renders a list component", async () => {
    // mock api call
    axios.get.mockResolvedValue({
      data: [],
    })

    await act(async () => render(<List />))

    const heading = screen.getByRole("tab", { name: /List/i })
    expect(heading).toBeTruthy()
  })
})
