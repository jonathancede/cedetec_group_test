import { HomeCardLabel, HomeCardWrapper } from "./styles"

const HomeCard = ({ Icon, label, path }) => {
  return (
    <HomeCardWrapper to={path}>
      <Icon sx={{ fontSize: 44 }} />
      <HomeCardLabel>{label}</HomeCardLabel>
    </HomeCardWrapper>
  )
}

export default HomeCard
