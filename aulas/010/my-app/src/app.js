import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }
  function decrement() {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>contador: {counter}</h1>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </>
  )
}

export default App
