import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import AlumnosPage from "./pages/AlumnosPage"
import IntercambioPage from "./pages/IntercambioPage"
import ActasPage from "./pages/ActasPage"
import BoletinesPage from "./pages/BoletinesPage"
import MatriculasPage from "./pages/MatriculasPage"

import theme from "./theme"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/alumnos",
        element: <AlumnosPage />,
      },
      {
        path: "/intercambio",
        element: <IntercambioPage />,
      },
      {
        path: "/actas",
        element: <ActasPage />,
      },
      {
        path: "/boletines",
        element: <BoletinesPage />,
      },
      {
        path: "/matriculas",
        element: <MatriculasPage />,
      },
    ],
  },
])

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
