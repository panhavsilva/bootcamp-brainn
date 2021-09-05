import {useState, useEffect} from 'react'

import Form from './components/form'
import Table from './components/table'
import { post, get, del } from './http'

const url = 'http://localhost:3333/cars'

async function getCars(url, setCarList, setMessageError) {
  const result = await get(url)
  if (result.error) {
    return setMessageError(result.message)
  }

  setCarList(result)

  return
}

async function createCar(url, car, setCar, setMessageError) {
  if (!car.image) { return }

  const result = await post(url, car)
  if (result.error) {
    return setMessageError(result.message)
  }

  setCar({})
  setMessageError('')

  return console.log(result.message)
}

async function deleteCar(url, plate, setCarDelete, setMessageError) {
  if(plate === ''){ return }

  const result = await del(url, { plate })
  if (result.error) {
    return setMessageError(result.message)
  }

  setCarDelete('')
  setMessageError('')

  return console.log(result.message)
}

function App() {
  const [car, setCar] = useState({})
  const [carsList, setCarsList] = useState([])
  const [carDelete, setCarDelete] = useState('')
  const [messageError, setMessageError] = useState('')

  useEffect(() => {  
    createCar(url, car, setCar, setMessageError)
    deleteCar(url, carDelete, setCarDelete, setMessageError)
    getCars(url, setCarsList, setMessageError)

    return () => {
      
    }
  }, [car, carDelete])

  return (
    <>
      <Form setCar={setCar}/>
      {messageError !== '' && <div>{messageError}</div>}
      <Table carsList={carsList} deleteCar={setCarDelete}/>
    </>
  )
}

export default App