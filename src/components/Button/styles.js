import styled from "styled-components"

export const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  outline: none;
  border-radius: 8px;
  transition: ${({ theme }) => theme.transitions.general};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.9);
  }
`

export const MainButton = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.colors.mainButton};
  color: white;
  font-size: 16px;
  padding: 4px 8px;
`
