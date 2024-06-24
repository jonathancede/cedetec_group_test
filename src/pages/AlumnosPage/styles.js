import styled from "styled-components"

export const AlumnosPageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`

export const AlumnosBuscadorWapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const AlumnosInputsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  width: 100%;
`

export const AlumnoInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

export const AlumnoInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  padding: 4px 8px;
  width: 100%;
  height: 100%;
`

export const CenterCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
