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
    
    document.querySelector('#image').focus()
    setCar(data)
    event.target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input 
          placeholder="http://exemple.com" 
          type="text" 
          id="image" 
          name="image" 
        />
        <label htmlFor="image">Imagem (URL)</label>
      </div>

      <div>
        <input 
          placeholder="Marca Modelo" 
          type="text" 
          id="brandModel" 
          name="brandModel" 
        />
        <label htmlFor="brandModel">Marca / Modelo</label>
      </div>

      <div>
        <input 
          placeholder="2021" 
          type="number" 
          id="year" 
          name="year" 
        />
        <label htmlFor="year">Ano</label>
      </div>

      <div>
        <input 
          placeholder="XXX-XXXX" 
          type="text" 
          id="plate" 
          name="plate" 
        />
        <label htmlFor="plate">Placa</label>
      </div>

      <div>
        <input 
          placeholder="#ffffff" 
          type="text" 
          id="color" 
          name="color" 
        />
        <label htmlFor="color">Cor</label>
      </div>

      <button type="submit">Cadastrar carro</button>
    </form>
  )
}

export default Form
