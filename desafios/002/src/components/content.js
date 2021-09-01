import { useState } from 'react'
import Title from './title'

function Content({ text }) {
  const [title, setTitle] = useState(text[0].title)
  const [content, setContent] = useState(text[0].content)

  function handleClick(item) {
    setTitle(item.title)
    setContent(item.content)
  }

  return (
    <>
      <aside>
        <ul>
          {text.map((item) => (
            <li key={item.id}>
              <a onClick={(e) => (handleClick(item))}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <main>
        <article>
          <Title size='2'>{title}</Title>
          <p>
            {content}
          </p>
        </article>      
      </main>
    </>
  )
}

export default Content
