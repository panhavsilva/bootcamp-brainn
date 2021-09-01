import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(null)

  function increment() {
    setCounter(counter + 1)
  }
  function decrement() {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>
        {counter === null && 'Contador vazio'}
        {counter !== null && 'Contador: '+counter}
      </h1>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </>
  )
}

export default App
