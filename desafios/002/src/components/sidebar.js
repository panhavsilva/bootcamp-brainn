import Nav from './nav'

function Sidebar({ items }) {
  return (
    <aside>
      <Nav name='nav-sidebar' items={items}/>
    </aside>
  )
}

export default Sidebar