import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState('')

  function handleChange(event) {
    setInputValue(event.target.value.replace(/\D+/g, ''))
  }

  return( 
    <form>
      <input value={inputValue} onChange={handleChange}/>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default App
