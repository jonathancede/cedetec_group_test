import { useMemo } from "react"
import { Link, useLocation } from "react-router-dom"
import { SIDEBAR_ROUTES } from "../../utils/constants"
import { ItemLabel, ItemWrapper, Logo, SidebarList, SidebarWrapper } from "./styles"
import theme from "../../theme"

const Item = ({ open, Icon, label, path }) => {
  const location = useLocation()
  const isActive = useMemo(() => location.pathname === path, [location, path])

  return (
    <ItemWrapper to={path} aria-current={isActive}>
      <Icon sx={{ color: isActive ? "black" : theme.colors.gray }} />
      {open && <ItemLabel $isActive={isActive}>{label}</ItemLabel>}
    </ItemWrapper>
  )
}

const Sidebar = ({ sidebarOpened }) => {
  return (
    <SidebarWrapper $open={sidebarOpened}>
      <Link to="/">
        <Logo>{sidebarOpened ? "CEDETEC GROUP" : "CD"}</Logo>
      </Link>
      <SidebarList>
        {SIDEBAR_ROUTES.map((route, id) => (
          <Item
            key={`sidebar-routes-${id}`}
            open={sidebarOpened}
            Icon={route.Icon}
            label={route.label}
            path={route.path}
          />
        ))}
      </SidebarList>
    </SidebarWrapper>
  )
}

export default Sidebar
