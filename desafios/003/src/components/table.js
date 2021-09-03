async function handleDelete(event, deleteCar) {
  const button = event.target
  const plate = button.dataset.plate
  return deleteCar(plate)
}

function NoCarRow () {
  return (
    <tr>
      <td> - </td>
      <td>Nenhum </td>
      <td>carro </td>
      <td>encontrado </td>
      <td> - </td>
    </tr>
  )
}

function Row ({ data, deleteCar }) {
  return (
    <tr>
      <td>
        <img src={data.image} alt={data.brandModel} />
      </td>
      <td>{data.plate}</td>
      <td>{data.brandModel}</td>
      <td>{data.year}</td>
      <td>
        <div style={{ backgroundColor: data.color }}></div>
      </td>
      <td>
        <button
          data-plate={data.plate}
          onClick={(event) => handleDelete(event, deleteCar)}
        >
          Excluir
        </button>
      </td>
    </tr>
  )
}

function Table ({ carsList, deleteCar }) {
  
  return (
    <table>
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Marca / Modelo</th>
          <th>Ano</th>
          <th>Placa</th>
          <th>Cor</th>
          <th></th>
        </tr>
      </thead>

      <tbody data-js="table">
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        { carsList.length > 0 && 
          carsList.map((data) => (
            <Row data={data} deleteCar={deleteCar} key={data.plate}/>
          ))
        }
        { carsList.length === 0 && <NoCarRow />}
      </tbody>
    </table>
  )
}

export default Table
