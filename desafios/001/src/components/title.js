function Title({ children, size }) {
  if(size >0 && size <7){
    const Text = 'h' + size
    return (
      <Text>{children}</Text>
    )
  }
  return(
    <h1>{children}</h1>
  )
}

export default Title