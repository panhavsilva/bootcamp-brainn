import styled from 'styled-components'
import { useState } from 'react'
import Title from './title'

const Aside = styled.aside`
  grid-area: sidebar;
  background-color: #2c2c2c;
  padding-top: 2em;
  text-align: center;
`
const Ul = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  width: 100%;
`
const Li = styled.li`
  margin-bottom: 16px;
`
const A = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`
const Main = styled.main`
  padding: 20px 120px;
  grid-area: content;
  background-color: #f1f5f6;
`

function Content({ text }) {
  const [title, setTitle] = useState(text[0].title)
  const [content, setContent] = useState(text[0].content)

  function handleClick(item, event) {
    event.preventDefault()
    setTitle(item.title)
    setContent(item.content)
  }

  return (
    <>
      <Aside>
        <Ul>
          {text.map((item) => (
            <Li key={item.id}>
              <A href='/' onClick={(e) => (handleClick(item, e))}>
                {item.title}
              </A>
            </Li>
          ))}
        </Ul>
      </Aside>

      <Main>
        <article>
          <Title size='2'>{title}</Title>
          <p>
            {content}
          </p>
        </article>      
      </Main>
    </>
  )
}

export default Content
