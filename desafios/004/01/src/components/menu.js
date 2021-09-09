import styled from "styled-components"

const Nav = styled.nav`
  grid-area: menu;
  height: 100%;
  width: 100%;
  display: inline-flex;
  align-items: center;
  background-color: #fafafa;
  font-size: 18px;
  font-weight: bold;
`
const Ul = styled.ul`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  margin: 0;
  width: 100%;
`
const A = styled.a`
  font-size: 18px;
  font-weight: bold;
  color: #2c2c2c;
  text-decoration: none;
  cursor: pointer;
`

function Menu({ menu }) {
  return (
    <Nav>
      <Ul>
        {menu.map((item) => (
          <li key={item.id}>
            <A href='/'> {item.title} </A>
          </li>
        ))}
      </Ul>
    </Nav>
  )
}

export default Menu
