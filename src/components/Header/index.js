import { Menu } from "@mui/icons-material"
import { HeaderWrapper } from "./styles"
import { IconButton } from "@mui/material"

const Header = ({ setSidebarOpened }) => {
  return (
    <HeaderWrapper>
      <IconButton onClick={() => setSidebarOpened((prev) => !prev)}>
        <Menu sx={{ color: "white" }} />
      </IconButton>
    </HeaderWrapper>
  )
}

export default Header
