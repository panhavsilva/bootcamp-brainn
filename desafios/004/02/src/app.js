import {useState, useEffect} from 'react'
import { createGlobalStyle } from 'styled-components'
import { post, get, del } from './http'
import Form from './components/form'
import Table from './components/table'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 30px;
  }
`

const url = 'http://localhost:3333/cars'
async function getCars(url, setCarList, setMessageError) {
  const result = await get(url)
  if (result.error) {
    return setMessageError(result.message)
  }

  setCarList(result)

  return
}
async function createCar(url, car, setCar, setMessageError, setCarsList) {
  if (!car.image) { return }

  const result = await post(url, car)
  if (result.error) {
    return setMessageError(result.message)
  }

  setCar({})
  setMessageError('')
  getCars(url, setCarsList, setMessageError)

  return console.log(result.message)
}
async function deleteCar(url, plate, setCarDelete, setMessageError, setCarsList) {
  if(plate === ''){ return }

  const result = await del(url, { plate })
  if (result.error) {
    return setMessageError(result.message)
  }

  setCarDelete('')
  setMessageError('')
  getCars(url, setCarsList, setMessageError)

  return console.log(result.message)
}

function App() {
  const [car, setCar] = useState({})
  const [carsList, setCarsList] = useState([])
  const [carDelete, setCarDelete] = useState('')
  const [messageError, setMessageError] = useState('')

  useEffect(() => {  
    createCar(url, car, setCar, setMessageError, setCarsList)
  }, [car])
  useEffect(() => {
    deleteCar(url, carDelete, setCarDelete, setMessageError, setCarsList)
  }, [carDelete])

  return (
    <>
      <GlobalStyle />
      <Form setCar={setCar}/>
      {messageError !== '' && <div>{messageError}</div>}
      <Table carsList={carsList} deleteCar={setCarDelete}/>
    </>
  )
}

export default App