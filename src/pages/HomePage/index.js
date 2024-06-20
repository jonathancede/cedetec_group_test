import HomeCard from "../../components/HomeCard"
import PageTitle from "../../components/PageTitle"
import { SIDEBAR_ROUTES } from "../../utils/constants"
import { GridContainerHomePage } from "./styles"

const HomePage = () => {
  return (
    <>
      <PageTitle>¿Qué necesitas consultar?</PageTitle>
      <GridContainerHomePage>
        {SIDEBAR_ROUTES.map((route, id) => (
          <HomeCard key={`sidebar-routes-in-home-page-${id}`} Icon={route.Icon} label={route.label} path={route.path} />
        ))}
      </GridContainerHomePage>
    </>
  )
}

export default HomePage
