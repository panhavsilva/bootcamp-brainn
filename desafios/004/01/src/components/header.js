import styled from 'styled-components'
import Title from './title'

const HeaderStyled = styled.header`
  grid-area: header;
  text-align: center;
  align-self: center;
`

function Header() {
  return(
    <HeaderStyled>
      <Title size='1'>Bootcamp B.Academy</Title>
    </HeaderStyled>
  )
}

export default Header
