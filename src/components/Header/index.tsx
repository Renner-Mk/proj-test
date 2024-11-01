import { useContext } from 'react'
import { Button, Container, Wrapper } from './styles'
import { ThemeContext } from '../../context/ThemeChange'

export function Header() {
  const themeChange = useContext(ThemeContext)
  console.log(themeChange)
  if (!themeChange) {
    throw new Error('Home deve ser usado dentro de um ThemeContextProvider.')
  }

  const { toggle } = themeChange

  return (
    <Wrapper>
      <Container>Header</Container>
      <Button onClick={toggle}>Trocar thema</Button>
    </Wrapper>
  )
}
