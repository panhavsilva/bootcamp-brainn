import { createGlobalStyle } from 'styled-components'
import Header from './components/header'
import Menu from './components/menu'
import Content from './components/content'
import Footer from './components/footer'

const GlobalStyle = createGlobalStyle`
  body { 
    min-height: 100vh;
    width: 100%;
    margin: 0;
    color: #2c2c2c;
  }

  #root {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 20% 80%;
    grid-template-rows: 9vh 6vh 80vh 5vh;
    grid-template-areas:
      "header header"
      "menu menu"
      "sidebar content"
      "footer footer"
    ;
  }
`

const articles = [
  {
    id: 1,
    title: 'Vidis litro abertis',
    content: `
      Donec nulla urna, dictum ut ultrices imperdiet, varius mollis justo. 
      Nulla nec tempor mi. Mauris mattis velit tortor, in aliquet nunc dapibus non. 
      Nullam bibendum imperdiet elit non vestibulum. 
      Quisque quis sollicitudin elit, vitae imperdiet augue. 
      Morbi vestibulum elit at interdum tempor. Etiam at sagittis arcu. 
    `,
  },
  {
    id: 2,
    title: 'Ampola pa arma uma pindureta',
    content: `
      Pellentesque molestie, arcu venenatis euismod aliquet, nunc ligula tristique magna, 
      a fringilla dolor tortor in orci. 
      Proin eget lorem at tortor posuere elementum. 
      Cras felis quam, tincidunt et tellus non, lobortis accumsan ex. 
      Sed quam enim, commodo a euismod ac, tincidunt quis nulla. 
      Donec porta leo at sapien dapibus, id fermentum ipsum cursus.
    `,
  },
  {
    id: 3,
    title: 'Em pé sem cair, deitado sem dormir',
    content: `
      Nullam neque ipsum, varius eget urna ut, ultricies semper dolor. 
      Duis accumsan efficitur urna, non suscipit erat condimentum id. 
      Duis ornare risus eu convallis pulvinar. Aenean quis maximus magna, a cursus odio. 
      Proin cursus efficitur mollis. 
      Sed malesuada semper tellus, non pretium neque porta et. 
      Nam non justo et elit molestie blandit. 
      Sed erat dolor, ultrices sed erat ac, blandit tincidunt nibh. 
      Nullam quam arcu, euismod quis lorem eu, euismod lobortis neque.
    `,
  },
  {
    id: 4,
    title: 'Não sou faixa preta cumpadi',
    content: `
      Vivamus nulla metus, suscipit vel felis eu, fermentum porta neque. 
      Ut at nisi ultrices, dapibus magna interdum, sagittis erat. 
      Maecenas eu malesuada lectus. Vestibulum congue sodales augue vel facilisis. 
      Donec aliquet dapibus nulla eget vulputate. 
      Integer a massa at erat sodales varius et eu justo. 
      Vestibulum ultricies mi ac dui efficitur pretium. 
      Phasellus sit amet interdum ex, eget posuere dui. 
      Morbi maximus dictum mi in ornare.
    `,
  },
]

const menu = [
  {
    id: 'menu',
    title: 'Menu',
  },
  {
    id: 'sobre',
    title: 'Sobre',
  },
  {
    id: 'como',
    title: 'Como funciona',
  },
  {
    id: 'cronograma',
    title: 'Cronograma',
  },
]

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Menu menu={menu}/>
      <Content text={articles}/>
      <Footer />
    </>
  )
}

export default App
