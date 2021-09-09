import styled from 'styled-components'

export const TableStyled = styled.table`
  width: 100%;
  display: block;
  box-sizing: border-box;
  text-align: center;
  margin-top: 1em;
`
export const Thead = styled.thead`
  width: 100%;
  display: block;
  text-transform: uppercase;
  font-weight: bold;
`
export const Tbody = styled.tbody`
  width: 100%;
  display: block;
`
export const Tr = styled.tr`
  display: grid;
  padding: 0.5em;
  grid-template-columns: repeat(5, 1fr) 100px;
  color: #555;
  border-bottom: solid 1px #777;
`
export const Td = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444;
`
export const Button = styled.button`
  border: solid 1px #777;
  border-radius: 4px;
  color: #333;
  width: 5em;
  height: 2em;
  cursor: pointer;
`
export const Img = styled.img`
  width: 7.5em;
` 
export const DivColor = styled.div`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  border: 1px solid #999;
`