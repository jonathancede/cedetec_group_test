import { useEffect, useRef, useState } from "react"
import PageTitle from "../../components/PageTitle"
import alumnos_api_service from "../../services/alumnos_api_service"
import { AlumnosPageContent } from "./styles"
import AlumnosBuscador from "./BBs/AlumnosBuscador"
import AlumnosTable from "./BBs/AlumnosTable"
import { filterAlumnos } from "./BBs/helpers"

const AlumnosPage = () => {
  const allAlumnos = useRef([])
  const [alumnos, setAlumnos] = useState([])
  const [fetching, setFetching] = useState(true)
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

  const handleSearch = () => {
    const alumnosResult = filterAlumnos(allAlumnos.current, filters)
    setAlumnos(alumnosResult)
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
        <AlumnosBuscador filters={filters} setFilters={setFilters} onSearch={handleSearch} />
        <AlumnosTable rows={alumnos} />
      </AlumnosPageContent>
    </>
  )
}

export default AlumnosPage
