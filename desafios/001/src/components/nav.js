function Nav({ name }) {
  return (
    <nav className={name}>
      <ul>
        <li><a href="/">Menu</a></li>
        <li><a href="/">Sobre</a></li>
        <li><a href="/">Como funciona</a></li>
        <li><a href="/">Cronograma</a></li>
      </ul>
    </nav>
  )
}

export default Nav