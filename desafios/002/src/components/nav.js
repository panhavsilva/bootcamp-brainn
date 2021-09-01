function Nav({ name, items }) {
  return (
    <nav className={name}>
      <ul>
        {items.map((item) => (
          <li>
            <a key={item.id} href={item.id}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav