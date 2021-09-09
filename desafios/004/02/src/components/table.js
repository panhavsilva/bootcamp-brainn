import * as S from './styled'
import Row from './row'
import NoCarRow from './no-car-row'

function Table ({ carsList, deleteCar }) {
  return (
    <S.TableStyled>
      <S.Thead>
        <S.Tr>
          <th>Imagem</th>
          <th>Marca / Modelo</th>
          <th>Ano</th>
          <th>Placa</th>
          <th>Cor</th>
          <th></th>
        </S.Tr>
      </S.Thead>

      <S.Tbody data-js="table">
        <S.Tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </S.Tr>
        { carsList.length > 0 && 
          carsList.map((data) => (
            <Row data={data} deleteCar={deleteCar} key={data.plate}/>
          ))
        }
        { carsList.length === 0 && <NoCarRow />}
      </S.Tbody>
    </S.TableStyled>
  )
}

export default Table
