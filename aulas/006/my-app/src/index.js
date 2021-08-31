import ReactDOM from 'react-dom'

function Title({ text }) {
  return (
    <h1 className='classe-css'>{text}</h1>
  )
}

ReactDOM.render(
  <Title text='Hello world!'/>,
  document.querySelector('#root')
)
