import * as S from './styled'

function Row({ data, deleteCar }) {
  function handleDelete(event, deleteCar) {
    const button = event.target
    const plate = button.dataset.plate
    return deleteCar(plate)
  }

  return (
    <S.Tr>
      <S.Td>
        <S.Img src={data.image} alt={data.brandModel} />
      </S.Td>
      <S.Td>{data.plate}</S.Td>
      <S.Td>{data.brandModel}</S.Td>
      <S.Td>{data.year}</S.Td>
      <S.Td>
        <S.DivColor style={{ backgroundColor: data.color }}></S.DivColor>
      </S.Td>
      <S.Td>
        <S.Button
          data-plate={data.plate}
          onClick={(event) => handleDelete(event, deleteCar)}
        >
          Excluir
        </S.Button>
      </S.Td>
    </S.Tr>
  )
}

export default Row
