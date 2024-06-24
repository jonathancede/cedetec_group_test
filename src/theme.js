import { createTheme } from "@mui/material"

const theme = createTheme({
  colors: {
    main: "#bd2528",
    lightMain: "#bd2528D0",
    pageBackground: "#edf1f7",
    gray: "#9FA6AB",
    mainButton: "#001f3e",
  },
  constants: {
    headerHeight: "76px",
    drawerWidthExpanded: "320px",
    drawerWidthCollapsed: "65px",
  },
  transitions: {
    general: "all .2s",
  },
  shadows: {
    general: "0 0.5rem 1rem 0 rgba(44, 51, 73, 0.1)",
  },
})

export default theme
