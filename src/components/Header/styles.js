import styled from "styled-components"

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  height: ${({ theme }) => theme.constants.headerHeight};
  background-color: ${({ theme }) => theme.colors.main};
  width: 100%;
  transition: ${({ theme }) => theme.transitions.general};
  box-shadow: ${({ theme }) => theme.shadows.general};
  z-index: 1;
`
