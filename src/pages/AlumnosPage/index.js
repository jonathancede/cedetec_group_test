import { useEffect, useRef, useState } from "react"
import PageTitle from "../../components/PageTitle"
import alumnos_api_service from "../../services/alumnos_api_service"
import Table from "../../components/Table"
import { Button } from "@mui/material"
import { AlumnosBuscadorWapper, AlumnosInputsWrapper, AlumnoInput, AlumnosPageContent } from "./styles"

const propsToSearch = [
  {
    property: "name",
    label: "Nombre",
  },
  {
    property: "surname",
    label: "Apellidos",
  },
  {
    property: "email",
    label: "Email",
  },
  {
    property: "dni",
    label: "DNI",
  },
]

const AlumnosBuscador = ({ filters, setFilters, onSearch }) => {
  return (
    <AlumnosBuscadorWapper>
      <span>Puedes filtrar por estos campos:</span>
      <AlumnosInputsWrapper>
        {propsToSearch.map((prop, id) => (
          <AlumnoInput
            key={`alumno-inputs-to-search-${id}`}
            type="text"
            placeholder={prop.label}
            value={filters[prop.property]}
            onChange={(e) => setFilters((prev) => ({ ...prev, [prop.property]: e.target.value }))}
          />
        ))}
        <Button onClick={onSearch}>Buscar</Button>
      </AlumnosInputsWrapper>
    </AlumnosBuscadorWapper>
  )
}

const AlumnosTable = ({ rows = [] }) => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "company",
      headerName: "Empresa",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "center",
      headerName: "Centro Estudio",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "surname",
      headerName: "Apellidos",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "dni",
      headerName: "DNI",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "_actions_",
      headerName: "Acciones",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: () => {
        return <Button>Detalles</Button>
      },
    },
  ]

  return <Table rows={rows} columns={columns} />
}

const AlumnosPage = () => {
  const allAlumnos = useRef([])
  const [alumnos, setAlumnos] = useState([])
  const [fetching, setFetching] = useState(false)
  const [filters, setFilters] = useState({ name: "", surname: "", email: "", dni: "" })

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    setFetching(true)

    try {
      const data = await alumnos_api_service.getList()
      setAlumnos(data ?? [])
      allAlumnos.current = data ?? []
    } finally {
      setFetching(false)
    }
  }

  // TODO: Lo suyo sería filtar pasándole params al backend, pero mockApi no lo permite.
  const filterAlumnos = () => {
    const newAlumnos = allAlumnos.current.filter((alumno) => {
      if (filters.name !== "" && !alumno.name.toLowerCase().includes(filters.name.toLocaleLowerCase())) return false
      if (filters.surname !== "" && !alumno.surname.toLowerCase().includes(filters.surname.toLocaleLowerCase()))
        return false
      if (filters.email !== "" && !alumno.email.toLowerCase().includes(filters.email.toLocaleLowerCase())) return false
      if (filters.dni !== "" && !alumno.dni.toLowerCase().includes(filters.dni.toLocaleLowerCase())) return false

      return true
    })

    setAlumnos(newAlumnos)
  }

  if (fetching) {
    return (
      <>
        <PageTitle>Alumnos</PageTitle>
        <div>Cargando datos...</div>
      </>
    )
  }

  return (
    <>
      <PageTitle>Alumnos</PageTitle>
      <AlumnosPageContent>
        <AlumnosBuscador filters={filters} setFilters={setFilters} onSearch={filterAlumnos} />
        <AlumnosTable rows={alumnos} />
      </AlumnosPageContent>
    </>
  )
}

export default AlumnosPage

// TODO: Refactorizar esta pantalla para tener todo mejor componetizado.
