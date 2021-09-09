import styled from 'styled-components'

const Input = styled.input`
  margin: 4px 4px 6px 0px;
`
const Button = styled.button`
  margin: 4px 0px;
`

function Form ({setCar}) {
  function handleSubmit(event) {
    event.preventDefault()
    const target = event.target
    const data = {
      image: target.elements.image.value,
      brandModel: target.elements.brandModel.value,
      year: target.elements.year.value,
      plate: target.elements.plate.value,
      color: target.elements.color.value,
    }
    
    setCar(data)
    event.target.reset()
    event.target.elements.image.focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input 
          placeholder="http://exemple.com" 
          type="text" 
          id="image" 
          name="image" 
        />
        <label htmlFor="image">Imagem (URL)</label>
      </div>

      <div>
        <Input 
          placeholder="Marca Modelo" 
          type="text" 
          id="brandModel" 
          name="brandModel" 
        />
        <label htmlFor="brandModel">Marca / Modelo</label>
      </div>

      <div>
        <Input 
          placeholder="2021" 
          type="number" 
          id="year" 
          name="year" 
        />
        <label htmlFor="year">Ano</label>
      </div>

      <div>
        <Input 
          placeholder="XXX-XXXX" 
          type="text" 
          id="plate" 
          name="plate" 
        />
        <label htmlFor="plate">Placa</label>
      </div>

      <div>
        <Input 
          placeholder="#ffffff" 
          type="text" 
          id="color" 
          name="color" 
        />
        <label htmlFor="color">Cor</label>
      </div>

      <Button type="submit">Cadastrar carro</Button>
    </form>
  )
}

export default Form
