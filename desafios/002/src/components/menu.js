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
    id: 'como',
    title: 'Como funciona',
  },
  {
    id: 'cronograma',
    title: 'Cronograma',
  },
]

function Menu() {
  return (
    <nav>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            <a href='/'> {item.title} </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu