import styled from "styled-components"

const FooterStyled = styled.footer`
  grid-area: footer;
  padding: 4px;
  text-align: center;
  align-self: center;
`

function Footer() {
  return (
    <FooterStyled>Todos os direitos reservados - B.Academy ©</FooterStyled>
  )
}

export default Footer
