import styled from "styled-components"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

export const HeaderAndPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.pageBackground};
  width: 100%;
  height: 100%;
`

export const PageWrapper = styled.div`
  padding: 36px;
  width: 100%;
  max-width: 1164px;
  height: 100%;
`
