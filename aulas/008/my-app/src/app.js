const menu = [
  {
    id: 'home',
    name: 'Home',
    link: '/',
  },
  {
    id: 'sobre',
    name: 'Sobre',
    link: '/',
  },
]

function App() {
  return (
    <ul>
      {menu.map((item) => (
        <li key={item.id}>
          <a href={item.link}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default App
