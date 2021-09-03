import { useEffect } from 'react'
const url = 'https://ws.apicep.com/cep.json?code=[CEP]'

function App() {
  useEffect(() => {
    async function getCep () {
      console.log('buscando CEP... ')
      const response = await fetch(url.replace('[CEP]', '06233-030'))
      const json = await response.json()
      console.log('CEP: ', json)
    }

    getCep()
  })

  return( 
    <>
      <button>Buscar CEP</button>
    </>
  )
}

export default App
