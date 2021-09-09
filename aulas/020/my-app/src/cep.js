import styled from 'styled-components'

function Cep({ cep, setCep, color }) {
  function handleSubmit(e) {
    e.preventDefault()
    setCep(e.target.elements.campoCep.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input type='text' name='campoCep' color={color}/>
        <Button type='submit'>Busca CEP</Button>
      </form>
    </>
  )
}

const Input = styled.input`
  background-color: ${(props) => props.color};
  color: white;
  margin: 4px;
`
const Button = styled.button`
  margin-left: 4px;
`

export default Cep
