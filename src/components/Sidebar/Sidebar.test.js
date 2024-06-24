import { MemoryRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { render, screen } from "@testing-library/react"
import { SIDEBAR_ROUTES } from "../../utils/constants"
import Sidebar from "."
import theme from "../../theme"

describe("renderizado de los componentes", () => {
  it("logo de la página en sidebar colapsado.", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[{ pathname: "/" }]}>
          <Sidebar sidebarOpened={false} />
        </MemoryRouter>
      </ThemeProvider>,
    )

    expect(screen.getByText("CD")).toBeInTheDocument()
  })

  it("logo de la página en sidebar abierto.", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[{ pathname: "/" }]}>
          <Sidebar sidebarOpened={true} />
        </MemoryRouter>
      </ThemeProvider>,
    )

    expect(screen.getByText("CEDETEC GROUP")).toBeInTheDocument()
  })

  it("rutas de navegación.", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[{ pathname: "/" }]}>
          <Sidebar sidebarOpened={true} />
        </MemoryRouter>
      </ThemeProvider>,
    )

    expect(screen.getAllByRole("link")).toHaveLength(SIDEBAR_ROUTES.length + 1) // Más el logo que también es link.
  })

  it("remarcar la ruta presente.", () => {
    const routeSelected = SIDEBAR_ROUTES[0]
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[{ pathname: routeSelected.path }]}>
          <Sidebar sidebarOpened={true} />
        </MemoryRouter>
      </ThemeProvider>,
    )

    expect(screen.getAllByRole("link", { current: true })).toHaveLength(1)
    expect(screen.getByRole("link", { current: true })).toHaveTextContent(routeSelected.label)
    expect(screen.getAllByRole("link", { current: false })).toHaveLength(SIDEBAR_ROUTES.length - 1 + 1) // Menos el seleccionado más el logo que también es link.
  })

  it("navegación al clicar en los elementos del sidebar.", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[{ pathname: "/" }]}>
          <Sidebar sidebarOpened={true} />
        </MemoryRouter>
      </ThemeProvider>,
    )

    SIDEBAR_ROUTES.forEach((route) => {
      expect(screen.getByRole("link", { name: route.label })).toHaveAttribute("href", route.path)
    })
  })
})
