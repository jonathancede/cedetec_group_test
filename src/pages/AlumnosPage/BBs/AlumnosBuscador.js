import Button from "../../../components/Button"
import { AlumnoInput, AlumnosBuscadorWapper, AlumnosInputsWrapper } from "../styles"

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
        <Button text="Buscar" icon="search" onClick={onSearch} />
      </AlumnosInputsWrapper>
    </AlumnosBuscadorWapper>
  )
}

export default AlumnosBuscador
