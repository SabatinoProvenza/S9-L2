import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Welcome from "../components/Welcome"

describe("Welcome component", () => {
  it("mostra il titolo di benvenuto", () => {
    render(<Welcome />)

    const heading = screen.getByText(/benvenuto/i)
    expect(heading).toBeInTheDocument()
  })

  it("mostra il testo descrittivo corretto", () => {
    render(<Welcome />)

    const paragraph = screen.getByText(
      /in questa pagina troverai il libro che vuoi/i
    )
    expect(paragraph).toBeInTheDocument()
  })

  it("renderizza l'Alert visibile all'utente", () => {
    render(<Welcome />)

    const alert = screen.getByRole("alert")
    expect(alert).toBeInTheDocument()
  })
})
