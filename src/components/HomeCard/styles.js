import { Link } from "react-router-dom"
import styled from "styled-components"

export const HomeCardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.lightMain};
  color: white;
  border-radius: 16px;
  transition: ${({ theme }) => theme.transitions.general};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export const HomeCardLabel = styled.div`
  font-weight: bold;
`
