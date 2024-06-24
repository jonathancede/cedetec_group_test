import { MainButton } from "./styles"
import { Search, VisibilityOutlined } from "@mui/icons-material"

const ICONS_TYPES = {
  view: VisibilityOutlined,
  search: Search,
  // ...
}

const VARIANTS = {
  main: MainButton,
  // ...
}

const Button = ({ icon = "", iconPosition = "left", text = "", variant = "main", onClick = () => {} }) => {
  const hasIcon = Object.keys(ICONS_TYPES).includes(icon)
  const Icon = hasIcon && ICONS_TYPES[icon]
  const iconLeft = iconPosition === "left"
  const iconRigth = iconPosition === "rigth"
  const ButtonStyle = VARIANTS[variant]

  return (
    <ButtonStyle onClick={onClick}>
      {hasIcon && iconLeft && <Icon />}
      {text}
      {hasIcon && iconRigth && <Icon />}
    </ButtonStyle>
  )
}

export default Button
