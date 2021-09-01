import { useState } from 'react'
import Title from './title'

function Content({ text }) {
  const [title, setTitle] = useState(text[0].Title)
  const [content, setContent] = useState(text[0].content)

  return (
    <main>
      <article>
        <Title size='2'>{title}</Title>
        <p>
          {content}
        </p>
      </article>      
    </main>
  )
}

export default Content
