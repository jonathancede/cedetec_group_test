import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../Header"
import Sidebar from "../Sidebar"
import { HeaderAndPageWrapper, LayoutWrapper, PageWrapper } from "./styles"

const Layout = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false)

  return (
    <LayoutWrapper>
      <Sidebar sidebarOpened={sidebarOpened} />
      <HeaderAndPageWrapper>
        <Header setSidebarOpened={setSidebarOpened} />
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      </HeaderAndPageWrapper>
    </LayoutWrapper>
  )
}

export default Layout
