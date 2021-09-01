function Sidebar({ items }) {
  return (
    <aside>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href='/'> {item.title} </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar