import {useState, useEffect} from 'react'

import Form from './components/form'
import Table from './components/table'
import { post, get, del } from './http'

const url = 'http://localhost:3333/cars'

async function getCars(url, setCarList) {
  const result = await get(url)
  if (result.error) {
    console.log('deu erro na hora de cadastrar', result.message)
    return
  }
  setCarList(result)
  return
}

async function createCar(car, setCar) {
  if (!car.image) {
    return
  }

  const result = await post(url, car)
  if (result.error) {
    console.log('deu erro na hora de cadastrar', result.message)
    return
  }

  setCar({})

  return console.log(result.message)
}

async function deleteCar (plate, setCarDelete) {
  if(plate === ''){ return }
  const result = await del(url, { plate })
  setCarDelete('')
  console.log(result.message)
}

function App() {
  const [car, setCar] = useState({})
  const [carsList, setCarsList] = useState([])
  const [carDelete, setCarDelete] = useState('')

  useEffect(() => {  
    createCar(car, setCar)
    deleteCar(carDelete, setCarDelete)
    getCars(url, setCarsList)

    return () => {
      
    }
  }, [car, carDelete])

  return (
    <>
      <Form setCar={setCar}/>
      <Table carsList={carsList} deleteCar={setCarDelete}/>
    </>
  )
}

export default App