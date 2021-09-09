import styled from 'styled-components'

function Counter({ counter, setCounter }) {
  return (
    <>
      <Title>{counter}</Title>
      <Input type='text' />
      <Button onClick={() => setCounter(c => c - 1)}>-</Button>
      <Button onClick={() => setCounter(c => c + 1)}>+</Button>
    </>
  )
}

const Title = styled.h1`
  margin: 4px;
`

const Input = styled.input`
  background-color: red;
  color: white;
  margin: 4px;
`
const Button = styled.button`
  margin-left: 4px;
`

export default Counter
