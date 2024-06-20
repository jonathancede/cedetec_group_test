import { Link } from "react-router-dom"
import styled from "styled-components"

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ $open, theme }) => ($open ? theme.constants.drawerWidthExpanded : theme.constants.drawerWidthCollapsed)};
  background-color: white;
  transition: ${({ theme }) => theme.transitions.general};
  box-shadow: ${({ theme }) => theme.shadows.general};
  overflow: hidden;
  white-space: nowrap;
  z-index: 1;
`

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  height: ${({ theme }) => theme.constants.headerHeight};
  font-weight: bold;
`

export const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 16px;
  gap: 20px;
  overflow: hidden;
`

export const ItemWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 20px;
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.general};
  padding: 8px 4px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.pageBackground};
  }
`

export const ItemLabel = styled.div`
  width: 100%;
  color: ${({ $isActive, theme }) => ($isActive ? "black" : theme.colors.gray)};
`
