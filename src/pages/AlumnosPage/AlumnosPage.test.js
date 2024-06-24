import { ThemeProvider } from "styled-components"
import { act, cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react"
import alumnos_api_service from "../../services/alumnos_api_service"
import { filterAlumnos } from "./BBs/helpers"
import AlumnosPage from "."
import theme from "../../theme"
import AlumnosBuscador from "./BBs/AlumnosBuscador"

// Realizamos un mock de la recepción de los alumnos.
jest.mock("../../services/alumnos_api_service")

// Definimos los mocks de los alumnos.
const mock_alumno_1 = {
  company: "Kling - Monahan",
  center: "Reichel - Aufderhar",
  name: "Kathryne",
  surname: "Stark",
  email: "Esteban23@gmail.com",
  dni: "dni 1",
  id: "1",
}

const mock_alumno_2 = {
  company: "Hauck - Feeney",
  center: "Conn Inc",
  name: "Angelica",
  surname: "Turner",
  email: "Clementine.Hintz97@yahoo.com",
  dni: "dni 2",
  id: "2",
}

const mock_alumno_3 = {
  company: "Fisher, Crona and Yundt",
  center: "Brakus - Little",
  name: "Kimberly",
  surname: "Bahringer",
  email: "Chelsey38@yahoo.com",
  dni: "dni 3",
  id: "3",
}

const mock_alumno_4 = {
  company: "Kemmer, Schmeler and Ledner",
  center: "Paucek Inc",
  name: "Josh",
  surname: "Mante",
  email: "Mable.Ruecker99@gmail.com",
  dni: "dni 4",
  id: "4",
}

const mockAlumnos = [mock_alumno_1, mock_alumno_2, mock_alumno_3, mock_alumno_4]

describe("renderizado de los componentes:", () => {
  beforeEach(async () => {
    alumnos_api_service.getList.mockResolvedValue(mockAlumnos)

    await act(async () => {
      render(
        <ThemeProvider theme={theme}>
          <AlumnosPage />
        </ThemeProvider>,
      )
    })
  })

  afterEach(cleanup)

  it("título de página", async () => {
    await waitFor(() => expect(screen.getByRole("heading", { name: "Alumnos" })).toBeInTheDocument())
  })

  it("inputs de filtros.", async () => {
    await waitFor(() => {
      expect(screen.queryByPlaceholderText("Nombre")).toBeInTheDocument()
      expect(screen.queryByPlaceholderText("Apellidos")).toBeInTheDocument()
      expect(screen.queryByPlaceholderText("Email")).toBeInTheDocument()
      expect(screen.queryByPlaceholderText("DNI")).toBeInTheDocument()
    })
  })

  it("botón del buscador", async () => {
    await waitFor(() => expect(screen.getByRole("button", { name: "Buscar" })).toBeInTheDocument())
  })

  it("tabla de alumnos", async () => {
    await waitFor(() => {
      const rows = screen.getAllByRole("row")
      const headerRow = 1
      expect(rows).toHaveLength(mockAlumnos.length + headerRow)
    })
  })
})

describe("filtraje de la tabla de alumnos:", () => {
  it("al clicar en el botón buscar se ejecuta la función de filtrado", () => {
    const mockSearch = jest.fn()

    render(
      <ThemeProvider theme={theme}>
        <AlumnosBuscador filters={{}} setFilters={() => {}} onSearch={mockSearch} />
      </ThemeProvider>,
    )

    const button = screen.getByRole("button", { name: "Buscar" })
    fireEvent.click(button)
    expect(mockSearch).toHaveBeenCalledTimes(1)
  })

  it("si dejo los filtros vacios, devuelve todo el listado inicial de alumnos.", () => {
    const filters = { name: "", surname: "", email: "", dni: "" }
    const alumnosResults = filterAlumnos(mockAlumnos, filters)
    expect(alumnosResults).toEqual(mockAlumnos)
  })

  it("si pongo 'jo' en el campo name me devuelve los alumnos que contienen 'jo' en el name.", () => {
    const filters = { name: "jo", surname: "", email: "", dni: "" }
    const alumnosResults = filterAlumnos(mockAlumnos, filters)
    expect(alumnosResults).toEqual([mock_alumno_4])
  })

  it("si pongo 'ba' en el campo surname me devuelve los alumnos que contienen 'ba' en el surname.", () => {
    const filters = { name: "", surname: "ba", email: "", dni: "" }
    const alumnosResults = filterAlumnos(mockAlumnos, filters)
    expect(alumnosResults).toEqual([mock_alumno_3])
  })

  it("si pongo 'le' en el campo email me devuelve los alumnos que contienen 'le' en el email.", () => {
    const filters = { name: "", surname: "", email: "le", dni: "" }
    const alumnosResults = filterAlumnos(mockAlumnos, filters)
    expect(alumnosResults).toEqual([mock_alumno_2, mock_alumno_4])
  })

  it("si pongo '1' en el campo dni me devuelve los alumnos que contienen '1' en el dni.", () => {
    const filters = { name: "", surname: "", email: "", dni: "1" }
    const alumnosResults = filterAlumnos(mockAlumnos, filters)
    expect(alumnosResults).toEqual([mock_alumno_1])
  })

  it("si pongo 'le' en email y '4' en dni me devuelve los alumnos que contienen 'le' en email y '4' en dni.", () => {
    const filters = { name: "", surname: "", email: "le", dni: "4" }
    const alumnosResults = filterAlumnos(mockAlumnos, filters)
    expect(alumnosResults).toEqual([mock_alumno_4])
  })

  it("integración entre buscador y resultados de la tabla", async () => {
    alumnos_api_service.getList.mockResolvedValue(mockAlumnos)

    await act(async () => {
      render(
        <ThemeProvider theme={theme}>
          <AlumnosPage />
        </ThemeProvider>,
      )
    })

    await waitFor(() => {
      const inputEmail = screen.queryByPlaceholderText("Email")
      const inputDNI = screen.queryByPlaceholderText("DNI")
      const buttonSearch = screen.getByRole("button", { name: "Buscar" })

      fireEvent.change(inputEmail, { target: { value: "le" } })
      fireEvent.change(inputDNI, { target: { value: "4" } })
      fireEvent.click(buttonSearch)

      const rows = screen.getAllByRole("row")
      expect(rows).toHaveLength(2) // 1 resultado más la cabecera.
    })
  })
})
