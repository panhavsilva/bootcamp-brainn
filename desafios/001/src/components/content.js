import Title from './title'
import Button from './button'

function Content() {
  return (
    <main>
      <Title size='2'> Título </Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Nullam eu vulputate eros, et tristique nulla. <br />
        Phasellus sed metus quam. Fusce tortor ex, hendrerit in faucibus vitae, 
        vehicula sed lorem. In imperdiet massa non enim facilisis sagittis. <br />
        Curabitur faucibus malesuada neque ut imperdiet. Donec at libero massa. <br />
        Nulla tincidunt mi orci, sed ultrices dolor porta vitae. <br />
        Vestibulum ex mauris, consectetur non sem non, cursus lobortis erat. <br />
        Vestibulum ut magna in orci accumsan congue. <br />
        Donec malesuada urna quis odio dictum, nec posuere orci feugiat.<br />
      </p>

      <article>
        <Title size='3'> Subtítulo </Title>
        <Title size='4'> Subtítulo 2</Title>
        <Title size='5'> Subtítulo 3</Title>
        <Title size='6'> Subtítulo 4</Title>
        <p>
          Sed commodo, urna id tincidunt cursus, est augue elementum felis, eu cursus enim magna ut justo.<br/> 
          Ut ac vehicula mauris. Etiam bibendum sapien a sapien dapibus, eu tincidunt nunc tempus. <br />
          Integer elementum mattis sapien vitae imperdiet.<br />
        </p>
      </article>

      <Button kind="primary">
        Primary
      </Button>

      <Button kind="secondary">
        Secondary
      </Button>
      
    </main>
  )
}

export default Content
