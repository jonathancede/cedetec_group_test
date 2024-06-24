import Button from "../../../components/Button"
import Table from "../../../components/Table"
import { CenterCell } from "../styles"

const AlumnosTable = ({ rows = [] }) => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
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
      flex: 0.7,
      headerAlign: "center",
      align: "center",
      renderCell: () => (
        <CenterCell>
          <Button icon="view" />
        </CenterCell>
      ),
    },
  ]

  return <Table rows={rows} columns={columns} />
}

export default AlumnosTable
