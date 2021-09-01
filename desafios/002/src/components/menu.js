import Nav from './nav'
const menu = [
  {
    id: 'menu',
    title: 'Menu',
  },
  {
    id: 'sobre',
    title: 'Sobre',
  },
  {
    id: 'como-funciona',
    title: 'Como funciona',
  },
  {
    id: 'cronograma',
    title: 'Cronograma',
  },
]

function Menu() {
  return (
    <Nav name='menu' items={menu}/>
  )
}

export default Menu