import {
  EmailOutlined,
  FileUploadOutlined,
  Inventory2Outlined,
  PersonOutline,
  WorkOutlineOutlined,
} from "@mui/icons-material"

export const SIDEBAR_ROUTES = [
  {
    Icon: PersonOutline,
    path: "/alumnos",
    label: "Alumnos",
  },
  {
    Icon: FileUploadOutlined,
    path: "/intercambio",
    label: "Servicio de intercambio",
  },
  {
    Icon: Inventory2Outlined,
    path: "/actas",
    label: "Actas",
  },
  {
    Icon: EmailOutlined,
    path: "/boletines",
    label: "Boletines",
  },
  {
    Icon: WorkOutlineOutlined,
    path: "/matriculas",
    label: "Matrículas",
  },
]
